
import type {IMovieShortModel} from "./IMovieModels";

export interface IBaseResponseModel {
  page: number;
  results: IMovieShortModel[];
  total_pages: number;
  total_results: number;
}
