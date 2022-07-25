
type Response = {
    [key: string]: string | number | {}
}

type FnSetter = (obj: any) => void

export const getMovies = (url: string, fnSet: FnSetter, fnPage?: FnSetter | null): void => {
    fetch(url)
		.then((response: any): Response  => response.json())
		.then((response: Response): void => {
			response.genres ? fnSet(response.genres) : fnSet(response.results);
			fnPage && response && fnPage(response.total_pages <= 10 ? response.total_pages : 10)
		})
		.catch((error) => console.log("Erreur : ", error));
    
}