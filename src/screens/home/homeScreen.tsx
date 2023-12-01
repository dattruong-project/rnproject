import { useEffect } from "react";
import { useHomeContext } from "../../providers/home";
import { AppStatus } from "../../shared/type/app";
import LoadingIndicator from "./components/loading/loadingIndicator";
import ErrorText from "./components/error/errorText";
import BookLs from "./components/ls/bookList";

const HomeScreen = () => {
    const { fetchBooks, state } = useHomeContext();
    const { status, books } = state;

    useEffect(() => {
        fetchBooks();
    }, []);

    return (
        <>
            {status === AppStatus.loading && (
              <LoadingIndicator/>
            )}
            {status === AppStatus.success && books && (
               <BookLs data={books}/>
            )}
            {status === AppStatus.error && (
                <ErrorText/>
            )}
        </>
    );
}

export default HomeScreen;
