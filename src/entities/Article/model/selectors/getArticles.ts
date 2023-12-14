import {StateSchema} from "../../../../app/providers/store/config/stateSchema.ts";

export const getArticles = (state: StateSchema) => state.articles.articlesList;