import { createContext, useContext, useState } from "react";
import { AppStatus } from "../../shared/type/app";
import HomeService from "../../services/home/homeService";
import { Book } from "../../model/book";

type State = {
  status : AppStatus,
  books?: [Book] | undefined     
}

type homeContextProps = {
    fetchBooks: () => void;
    state: State;
    refreshState: () => void;
}

const homeContext = createContext<homeContextProps | undefined>(undefined);

type homeProviderProps = {
    children: React.ReactNode;
}

export const HomeProvider: React.FC<homeProviderProps> = ({ children }) => {
    const initialState: State = {status: AppStatus.init,
     books: undefined
    };
    const [state, setState] = useState<State>(initialState);

    const { getAllBooks } = HomeService();

    const fetchBooks = async () => {
        setState({
            status: AppStatus.loading
        })
        const {data,errors} = await getAllBooks();
        if (data) {
            const books: [Book] = (data as { books: [Book] }).books;
            setState({
                status: AppStatus.success,
                books: books
            })
        } 
        if (errors) {
            setState({
                status: AppStatus.error
            })
        }
    }

    const refreshState = () => setState(initialState);

    return <>
        <homeContext.Provider value={{ state: state, 
            fetchBooks: fetchBooks, refreshState }}>
            {children}
        </homeContext.Provider>
    </>
}

export const useHomeContext = () => {
    const context = useContext(homeContext);
    if (!context) {
        throw Error("Please wrap before using context");
    }
    return context;
};