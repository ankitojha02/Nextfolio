
{/*
import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({children}) =>{
    const [token, setToken] = useState(localStorage.getItem('token'))
    const [user, setUser]= useState("");
    const [services, setServices] = useState("");

    const storetokenInLS = (serverToken) =>{
    return localStorage.setItem('token', serverToken);
    }

    let isLoggedin = !!token;
     console.log(isLoggedin);
    //tackling the logout functionality

    const LogoutUser = ()=>{
    setToken("");
    return localStorage.removeItem("token");
    }

    // JWT Authentication

    const userAuthentication = async() =>{
      try {
        const response = await fetch('http://localhost:5000/api/auth/user', {
          method : "GET",
          headers : {
            Authorization : `Bearer ${token}`
          }
        })

        if(response.ok){
          const data = await response.json();
          console.log('User Data : ', data);
          setUser(data);
        }
      } catch (error) {
        return res.send(401).json({message: error});
      }
    }

   
   

    useEffect(()=>{
      
      userAuthentication();
    }, []);

return <AuthContext.Provider value={{isLoggedin, storetokenInLS, LogoutUser, user, services}}>
{children}
</AuthContext.Provider>
}

export const useAuth = () =>{

    const authContextValue = useContext(AuthContext);
    if(!authContextValue){
     throw new Error("useAuth used outside of the provider");
    }
  return authContextValue;
}
  */}


  import { createContext, useContext, useEffect, useState } from "react";

// Create the AuthContext
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState(null);

  // Store token in local storage
  const storetokenInLS = (serverToken) => {
    localStorage.setItem("token", serverToken);
    setToken(serverToken);
  };

  // Determine if the user is authenticated
  const isAuthenticated = !!token;

  // Logout functionality
  const logout = () => {
    setToken(null);
    setUser(null);
    localStorage.removeItem("token");
  };

  // Fetch authenticated user details
  const userAuthentication = async () => {
    if (!token) return;

    try {
      const response = await fetch("http://localhost:5000/api/auth/user", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        setUser(data);
      }
    } catch (error) {
      console.error("Error authenticating user:", error);
      logout();
    }
  };

  useEffect(() => {
    userAuthentication();
  }, [token]);

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        storetokenInLS, // Ensure function name is consistent
        logout,
        user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use the AuthContext
export const useAuth = () => {
  const authContextValue = useContext(AuthContext);
  if (!authContextValue) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return authContextValue;
};
