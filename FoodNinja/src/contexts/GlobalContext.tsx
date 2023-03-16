import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {createContext, useState, useContext, useEffect, ChildContextProvider} from 'react';
import { Alert, useColorScheme } from 'react-native';
import { ColorsData, dark, light } from '../utilities/colors';

type AuthData = {
  token: string;
  email: string;
  name: string;
};



type GlobalContextData = {
  authData?: AuthData;
  loading: boolean;
  theme: "light" | "dark" | "system default" ;
  signIn(date:object): Promise<void>;
  signOut(): void;
  changeTheme(theme: "light" | "dark" | "system default") : Promise<void>;
  colors?: ColorsData;
};

enum t  {
  "light" , "dark" , "system default"
}

interface Props {
  children: React.ReactNode;
}

const GlobalContext = createContext<GlobalContextData>({} as GlobalContextData);

const GlobalProvider= ({children} : Props) => {
  const selected = useColorScheme()
  const [authData, setAuthData] = useState<AuthData>();
  const [theme, setTheme] = useState<"light" | "dark" | "system default">("system default");
  const [colors, setColors] = useState<ColorsData>()


  //the AuthContext start with loading equals true
  //and stay like this, until the data be load from Async Storage
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    //Every time the App is opened, this provider is rendered
    //and call de loadStorage function.
    loadStorageData();
    if(theme == 'system default'){
      selected === 'dark' ? setColors(dark) : setColors(light)
    } else{
      theme === "dark" ? setColors(dark) : setColors(light)
    }
  }, [theme, selected]);

  async function loadStorageData(): Promise<void> {
    try {
      //Try get the data from Async Storage
      const authDataSerialized = await AsyncStorage.getItem('@AuthData');
      const themedata = await AsyncStorage.getItem('@Theme');

      if (themedata) {
        const data = themedata === "dark"? "dark" : themedata === "light" ? "light" : "system default"
        setTheme(data);
      }

      if (authDataSerialized) {
        //If there are data, it's converted to an Object and the state is updated.
        const _authData: AuthData = JSON.parse(authDataSerialized);
        setAuthData(_authData);
      }
    } catch (error) {
    } finally {
      //loading finished
      setLoading(false);
    }
  }
const changeTheme = async(theme : "light" | "dark" | "system default" ) => {
  setTheme(theme)
  if(theme == 'system default'){
    selected === 'dark' ? setColors(dark) : setColors(light)
  } else{
    theme == 'dark' ? setColors(dark) : setColors(light)
  }

  AsyncStorage.setItem('@Theme', theme);
}


  const signIn = async (data :  AuthData) => {
    //call the service passing credential (email and password).
    //In a real App this data will be provided by the user from some InputText components.
    const _authData = data;
    console.log("data from SIGNIN", data);
    

    //Set the data in the context, so the App can be notified
    //and send the user to the AuthStack
    setAuthData(_authData);

    //Persist the data in the Async Storage
    //to be recovered in the next user session.
    AsyncStorage.setItem('@AuthData', JSON.stringify(_authData));
  };

  const signOut = async () => {
    //Remove data from context, so the App can be notified
    //and send the user to the AuthStack
    setAuthData(undefined);

    //Remove the data from Async Storage
    //to NOT be recoverede in next session.
    await AsyncStorage.removeItem('@AuthData');
  };

  return (
    //This component will be used to encapsulate the whole App,
    //so all components will have access to the Context
    <GlobalContext.Provider value={{authData, loading, signIn, signOut, changeTheme, theme, colors}}>
      {children}
    </GlobalContext.Provider>
  );
};

//A simple hooks to facilitate the access to the AuthContext
// and permit components to subscribe to AuthContext updates
function useAuth(): GlobalContextData {
  const context = useContext(GlobalContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}


export {GlobalContext, GlobalProvider, useAuth};
