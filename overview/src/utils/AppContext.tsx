import { createContext, FC, PropsWithChildren, SetStateAction, useState } from "react";

interface IContext {
    email:string,
    setEmail: React.Dispatch<React.SetStateAction<string>>
}

const contextData: IContext = {
    email: "",
    setEmail: () => {}
} 

export const Context = createContext<IContext>(contextData)

export const AppProvider: FC<PropsWithChildren> = ( props ) => {

    const [email, setEmail] = useState('')
    const sendObj = {email, setEmail}
    return (
      <Context.Provider value={sendObj}>
        {props.children}
      </Context.Provider>  
    )
}