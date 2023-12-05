import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { PostListRelationFilter } from "../post/PostListRelationFilter";

export type AuthorWhereInput = {
  createdAt?: DateTimeFilter;
  firstName?: StringFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  posts?: PostListRelationFilter;
  profileImage?: StringNullableFilter;
  slug?: StringNullableFilter;
  twitter?: StringNullableFilter;
  updatedAt?: DateTimeFilter;
};
