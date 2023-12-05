import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringFilter } from "../../util/StringFilter";
import { PostListRelationFilter } from "../post/PostListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type TagWhereInput = {
  createdAt?: DateTimeFilter;
  id?: StringFilter;
  name?: StringFilter;
  posts?: PostListRelationFilter;
  slug?: StringNullableFilter;
  updatedAt?: DateTimeFilter;
};
