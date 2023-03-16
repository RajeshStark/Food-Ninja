import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {createContext, useState, useContext, useEffect, ChildContextProvider} from 'react';
import { Alert } from 'react-native';
import { dark, light } from '../utilities/colors';

type AuthData = {
  token: string;
  email: string;
  name: string;
};

type ColorsData = {
  AppThemeColor: string;
  BackgroundColor: string;
  textColor: string;
};

type GlobalContextData = {
  authData?: AuthData;
  loading: boolean;
  theme: string;
  signIn(date:object): Promise<void>;
  signOut(): void;
  changeTheme(theme : string) : Promise<void>;
  colors?: ColorsData;
};

// const light = {
//   AppThemeColor: '#4AE188',
//   BackgroundColor : "#FEFEFF",
//   textColor: '#09051C'
// }

// const dark = {
//   AppThemeColor : '#4AE188',
//   BackgroundColor : "#0D1E15",
//   textColor : '#FFFFFF'
// }
//Create the Auth Context with the data type specified
//and a empty object
const GlobalContext = createContext<GlobalContextData>({} as GlobalContextData);

const GlobalProvider: React.FC = ({children}) => {
  const [authData, setAuthData] = useState<AuthData>();
  const [theme, setTheme] = useState('light');
  const [colors, setColors] = useState<ColorsData>()

  //the AuthContext start with loading equals true
  //and stay like this, until the data be load from Async Storage
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    //Every time the App is opened, this provider is rendered
    //and call de loadStorage function.
    loadStorageData();
  }, [theme]);

  async function loadStorageData(): Promise<void> {
    try {
      //Try get the data from Async Storage
      const authDataSerialized = await AsyncStorage.getItem('@AuthData');
      const themedata = await AsyncStorage.getItem('@Theme');

      if (themedata) {
        const _themedata: string = themedata
        setTheme(_themedata);
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
const changeTheme = async(theme : string) => {
  setTheme(theme);
  if(theme == 'light'){
    setColors(light)
  } else{
    setColors(dark)
  }
  AsyncStorage.setItem('@Theme', theme);
}


  const signIn = async (data : object) => {
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
