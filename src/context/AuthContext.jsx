import {
    createContext,
    createRef,
    useCallback,
    useContext,
    useEffect,
    useImperativeHandle,
    useMemo,
    useState,
  } from 'react';

const AuthContext = createContext({});

const contextRef = createRef();

export function AuthProvider({ authService, authErrorEventBus, children }) {
  const [user, setUser] = useState(undefined);
  const [auth, setAuth] = useState(false);
  useImperativeHandle(contextRef, () => (user ? user.token : undefined));
  
    useEffect(() => {
      authErrorEventBus.listen((err) => {
        console.log(err);
        setUser(undefined);
      });
    }, [authErrorEventBus]);
  
    useEffect(() => {
      authService.me().then((data) => {setUser(data)}).catch(console.error);
    }, [authService]);
  
    const signUp = useCallback(
      async (username, email, password) =>
        authService
          .signup(username, email, password)
          .then((user) => setUser(user))
          .then(() => {setAuth(true)}),
      [authService]
    );
  
    const logIn = useCallback(
      async (email, password) =>
        authService.login(email, password).then((user) => setUser(user)).then(()=>{setAuth(true)}),
      [authService]
    );
  
    const logout = useCallback(
      async () => authService.logout().then(() => setUser(undefined)).then(()=>{setAuth(false)}).then(()=>{window.location.reload()}),
      [authService]
    );
  
    const context = useMemo(
      () => ({
        user,
        signUp,
        logIn,
        logout,
        auth
      }),
      [user, signUp, logIn, logout, auth]
    );
  
    return (
      <AuthContext.Provider value={context}>
          {children}

      </AuthContext.Provider>
    );
  }

  export class AuthErrorEventBus {
    listen(callback) {
      this.callback = callback;
    }
    notify(error) {
      this.callback(error);
    }
  }

export default AuthContext;
export const fetchToken = () => contextRef.current;
export const useAuth = () => useContext(AuthContext);
  