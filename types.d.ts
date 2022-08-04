import { SVGProps } from "react";

export interface AppFormProp {
  description:
    | string
    | React.ReactNode
    | {
        icon?: (props) => JSX.Element;
        text: string;
      };
}
export interface AppSubmitButton {
  title: string;
  onDismiss?: () => void;
}
export interface DashboardNavProps {
  children?: {
    isCurrent: boolean;
    name: string;
    href: string;
  }[];
  name: string;
  href: string;
  Icon?: (props: SVGProps<SVGSVGElement>) => JSX.Element;
  isCurrent?: boolean;
  count?: number;
  isOpen?: boolean;
}

export interface AppMenuProps {
  label?: string;
  icon?: JSX.Element;
  badge?: string;
  header?: JSX.Element;
  menus: {
    label?: string;
    onClick?: () => void | Promise<boolean | void>;
    icon?: (props: SVGProps<SVGSVGElement>) => JSX.Element;
    role?:
      | "separator"
      | "destructive"
      | "default"
      | "info"
      | "success"
      | "warning";
  }[];
}
export interface AppPopoverProps {
  // Either provide a label or icon
  label?: string;
  icon?: JSX.Element;
  badge?: string;
  header?: JSX.Element;
  menus: {
    label: string;
    onClick: () => void | Promise<boolean | void>;
    icon?: (props: SVGProps<SVGSVGElement>) => JSX.Element;
  }[];
}

/* 
  ======= AUTO GENERATED START =======
*/

export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
};

export type Post = {
  __typename?: "Post";
  id: Scalars["ID"];
  image?: Maybe<PostImage>;
  slug?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  status?: Maybe<Scalars["String"]>;
  user?: Maybe<User>;
  labels?: Maybe<Array<Label>>;
  labelsCount?: Maybe<Scalars["Int"]>;
  isFeatured?: Maybe<Scalars["Boolean"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
};

export type PostLabelsArgs = {
  where?: LabelWhereInput;
  orderBy?: Array<LabelOrderByInput>;
  take?: InputMaybe<Scalars["Int"]>;
  skip?: Scalars["Int"];
};

export type PostLabelsCountArgs = {
  where?: LabelWhereInput;
};

export type PostWhereUniqueInput = {
  id?: InputMaybe<Scalars["ID"]>;
  slug?: InputMaybe<Scalars["String"]>;
};

export type PostWhereInput = {
  AND?: InputMaybe<Array<PostWhereInput>>;
  OR?: InputMaybe<Array<PostWhereInput>>;
  NOT?: InputMaybe<Array<PostWhereInput>>;
  id?: InputMaybe<IdFilter>;
  image?: InputMaybe<PostImageWhereInput>;
  slug?: InputMaybe<StringFilter>;
  description?: InputMaybe<StringFilter>;
  status?: InputMaybe<StringNullableFilter>;
  user?: InputMaybe<UserWhereInput>;
  labels?: InputMaybe<LabelManyRelationFilter>;
  isFeatured?: InputMaybe<BooleanFilter>;
  updatedAt?: InputMaybe<DateTimeNullableFilter>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
};

export type IdFilter = {
  equals?: InputMaybe<Scalars["ID"]>;
  in?: InputMaybe<Array<Scalars["ID"]>>;
  notIn?: InputMaybe<Array<Scalars["ID"]>>;
  lt?: InputMaybe<Scalars["ID"]>;
  lte?: InputMaybe<Scalars["ID"]>;
  gt?: InputMaybe<Scalars["ID"]>;
  gte?: InputMaybe<Scalars["ID"]>;
  not?: InputMaybe<IdFilter>;
};

export type StringFilter = {
  equals?: InputMaybe<Scalars["String"]>;
  in?: InputMaybe<Array<Scalars["String"]>>;
  notIn?: InputMaybe<Array<Scalars["String"]>>;
  lt?: InputMaybe<Scalars["String"]>;
  lte?: InputMaybe<Scalars["String"]>;
  gt?: InputMaybe<Scalars["String"]>;
  gte?: InputMaybe<Scalars["String"]>;
  contains?: InputMaybe<Scalars["String"]>;
  startsWith?: InputMaybe<Scalars["String"]>;
  endsWith?: InputMaybe<Scalars["String"]>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringFilter>;
};

export enum QueryMode {
  Default = "default",
  Insensitive = "insensitive",
}

export type NestedStringFilter = {
  equals?: InputMaybe<Scalars["String"]>;
  in?: InputMaybe<Array<Scalars["String"]>>;
  notIn?: InputMaybe<Array<Scalars["String"]>>;
  lt?: InputMaybe<Scalars["String"]>;
  lte?: InputMaybe<Scalars["String"]>;
  gt?: InputMaybe<Scalars["String"]>;
  gte?: InputMaybe<Scalars["String"]>;
  contains?: InputMaybe<Scalars["String"]>;
  startsWith?: InputMaybe<Scalars["String"]>;
  endsWith?: InputMaybe<Scalars["String"]>;
  not?: InputMaybe<NestedStringFilter>;
};

export type StringNullableFilter = {
  equals?: InputMaybe<Scalars["String"]>;
  in?: InputMaybe<Array<Scalars["String"]>>;
  notIn?: InputMaybe<Array<Scalars["String"]>>;
  lt?: InputMaybe<Scalars["String"]>;
  lte?: InputMaybe<Scalars["String"]>;
  gt?: InputMaybe<Scalars["String"]>;
  gte?: InputMaybe<Scalars["String"]>;
  contains?: InputMaybe<Scalars["String"]>;
  startsWith?: InputMaybe<Scalars["String"]>;
  endsWith?: InputMaybe<Scalars["String"]>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringNullableFilter>;
};

export type NestedStringNullableFilter = {
  equals?: InputMaybe<Scalars["String"]>;
  in?: InputMaybe<Array<Scalars["String"]>>;
  notIn?: InputMaybe<Array<Scalars["String"]>>;
  lt?: InputMaybe<Scalars["String"]>;
  lte?: InputMaybe<Scalars["String"]>;
  gt?: InputMaybe<Scalars["String"]>;
  gte?: InputMaybe<Scalars["String"]>;
  contains?: InputMaybe<Scalars["String"]>;
  startsWith?: InputMaybe<Scalars["String"]>;
  endsWith?: InputMaybe<Scalars["String"]>;
  not?: InputMaybe<NestedStringNullableFilter>;
};

export type LabelManyRelationFilter = {
  every?: InputMaybe<LabelWhereInput>;
  some?: InputMaybe<LabelWhereInput>;
  none?: InputMaybe<LabelWhereInput>;
};

export type BooleanFilter = {
  equals?: InputMaybe<Scalars["Boolean"]>;
  not?: InputMaybe<BooleanFilter>;
};

export type DateTimeNullableFilter = {
  equals?: InputMaybe<Scalars["DateTime"]>;
  in?: InputMaybe<Array<Scalars["DateTime"]>>;
  notIn?: InputMaybe<Array<Scalars["DateTime"]>>;
  lt?: InputMaybe<Scalars["DateTime"]>;
  lte?: InputMaybe<Scalars["DateTime"]>;
  gt?: InputMaybe<Scalars["DateTime"]>;
  gte?: InputMaybe<Scalars["DateTime"]>;
  not?: InputMaybe<DateTimeNullableFilter>;
};

export type PostOrderByInput = {
  id?: InputMaybe<OrderDirection>;
  slug?: InputMaybe<OrderDirection>;
  description?: InputMaybe<OrderDirection>;
  status?: InputMaybe<OrderDirection>;
  isFeatured?: InputMaybe<OrderDirection>;
  updatedAt?: InputMaybe<OrderDirection>;
  createdAt?: InputMaybe<OrderDirection>;
};

export enum OrderDirection {
  Asc = "asc",
  Desc = "desc",
}

export type PostUpdateInput = {
  image?: InputMaybe<PostImageRelateToOneForUpdateInput>;
  slug?: InputMaybe<Scalars["String"]>;
  description?: InputMaybe<Scalars["String"]>;
  status?: InputMaybe<Scalars["String"]>;
  user?: InputMaybe<UserRelateToOneForUpdateInput>;
  labels?: InputMaybe<LabelRelateToManyForUpdateInput>;
  isFeatured?: InputMaybe<Scalars["Boolean"]>;
};

export type PostImageRelateToOneForUpdateInput = {
  create?: InputMaybe<PostImageCreateInput>;
  connect?: InputMaybe<PostImageWhereUniqueInput>;
  disconnect?: InputMaybe<Scalars["Boolean"]>;
};

export type UserRelateToOneForUpdateInput = {
  create?: InputMaybe<UserCreateInput>;
  connect?: InputMaybe<UserWhereUniqueInput>;
  disconnect?: InputMaybe<Scalars["Boolean"]>;
};

export type LabelRelateToManyForUpdateInput = {
  disconnect?: InputMaybe<Array<LabelWhereUniqueInput>>;
  set?: InputMaybe<Array<LabelWhereUniqueInput>>;
  create?: InputMaybe<Array<LabelCreateInput>>;
  connect?: InputMaybe<Array<LabelWhereUniqueInput>>;
};

export type PostUpdateArgs = {
  where: PostWhereUniqueInput;
  data: PostUpdateInput;
};

export type PostCreateInput = {
  image?: InputMaybe<PostImageRelateToOneForCreateInput>;
  slug?: InputMaybe<Scalars["String"]>;
  description?: InputMaybe<Scalars["String"]>;
  status?: InputMaybe<Scalars["String"]>;
  user?: InputMaybe<UserRelateToOneForCreateInput>;
  labels?: InputMaybe<LabelRelateToManyForCreateInput>;
  isFeatured?: InputMaybe<Scalars["Boolean"]>;
};

export type PostImageRelateToOneForCreateInput = {
  create?: InputMaybe<PostImageCreateInput>;
  connect?: InputMaybe<PostImageWhereUniqueInput>;
};

export type UserRelateToOneForCreateInput = {
  create?: InputMaybe<UserCreateInput>;
  connect?: InputMaybe<UserWhereUniqueInput>;
};

export type LabelRelateToManyForCreateInput = {
  create?: InputMaybe<Array<LabelCreateInput>>;
  connect?: InputMaybe<Array<LabelWhereUniqueInput>>;
};

export type PostLike = {
  __typename?: "PostLike";
  id: Scalars["ID"];
  post?: Maybe<Post>;
  user?: Maybe<User>;
};

export type PostLikeWhereUniqueInput = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type PostLikeWhereInput = {
  AND?: InputMaybe<Array<PostLikeWhereInput>>;
  OR?: InputMaybe<Array<PostLikeWhereInput>>;
  NOT?: InputMaybe<Array<PostLikeWhereInput>>;
  id?: InputMaybe<IdFilter>;
  post?: InputMaybe<PostWhereInput>;
  user?: InputMaybe<UserWhereInput>;
};

export type PostLikeOrderByInput = {
  id?: InputMaybe<OrderDirection>;
};

export type PostLikeUpdateInput = {
  post?: InputMaybe<PostRelateToOneForUpdateInput>;
  user?: InputMaybe<UserRelateToOneForUpdateInput>;
};

export type PostRelateToOneForUpdateInput = {
  create?: InputMaybe<PostCreateInput>;
  connect?: InputMaybe<PostWhereUniqueInput>;
  disconnect?: InputMaybe<Scalars["Boolean"]>;
};

export type PostLikeUpdateArgs = {
  where: PostLikeWhereUniqueInput;
  data: PostLikeUpdateInput;
};

export type PostLikeCreateInput = {
  post?: InputMaybe<PostRelateToOneForCreateInput>;
  user?: InputMaybe<UserRelateToOneForCreateInput>;
};

export type PostRelateToOneForCreateInput = {
  create?: InputMaybe<PostCreateInput>;
  connect?: InputMaybe<PostWhereUniqueInput>;
};

export type PostImage = {
  __typename?: "PostImage";
  id: Scalars["ID"];
  image?: Maybe<CloudinaryImage_File_With_Exif>;
  altText?: Maybe<Scalars["String"]>;
  post?: Maybe<Post>;
  location?: Maybe<PostLocation>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
};

export type CloudinaryImage_File_With_Exif = {
  __typename?: "CloudinaryImage_File_With_EXIF";
  id?: Maybe<Scalars["ID"]>;
  filename?: Maybe<Scalars["String"]>;
  originalFilename?: Maybe<Scalars["String"]>;
  mimetype?: Maybe<Scalars["String"]>;
  encoding?: Maybe<Scalars["String"]>;
  small?: Maybe<Scalars["String"]>;
  medium?: Maybe<Scalars["String"]>;
  large?: Maybe<Scalars["String"]>;
  publicUrl?: Maybe<Scalars["String"]>;
  publicUrlTransformed?: Maybe<Scalars["String"]>;
  exif?: Maybe<Scalars["JSON"]>;
  bytes?: Maybe<Scalars["Int"]>;
  width?: Maybe<Scalars["Int"]>;
  height?: Maybe<Scalars["Int"]>;
};

export type CloudinaryImage_File_With_ExifPublicUrlTransformedArgs = {
  transformation?: InputMaybe<CloudinaryImageFormatWithExif>;
};

/**
 * Mirrors the formatting options [Cloudinary provides](https://cloudinary.com/documentation/image_transformation_reference).
 * All options are strings as they ultimately end up in a URL.
 */
export type CloudinaryImageFormatWithExif = {
  /** Rewrites the filename to be this pretty string. Do not include `/` or `.` */
  prettyName?: InputMaybe<Scalars["String"]>;
  width?: InputMaybe<Scalars["String"]>;
  height?: InputMaybe<Scalars["String"]>;
  crop?: InputMaybe<Scalars["String"]>;
  aspect_ratio?: InputMaybe<Scalars["String"]>;
  gravity?: InputMaybe<Scalars["String"]>;
  zoom?: InputMaybe<Scalars["String"]>;
  x?: InputMaybe<Scalars["String"]>;
  y?: InputMaybe<Scalars["String"]>;
  format?: InputMaybe<Scalars["String"]>;
  fetch_format?: InputMaybe<Scalars["String"]>;
  quality?: InputMaybe<Scalars["String"]>;
  radius?: InputMaybe<Scalars["String"]>;
  angle?: InputMaybe<Scalars["String"]>;
  effect?: InputMaybe<Scalars["String"]>;
  opacity?: InputMaybe<Scalars["String"]>;
  border?: InputMaybe<Scalars["String"]>;
  background?: InputMaybe<Scalars["String"]>;
  overlay?: InputMaybe<Scalars["String"]>;
  underlay?: InputMaybe<Scalars["String"]>;
  default_image?: InputMaybe<Scalars["String"]>;
  delay?: InputMaybe<Scalars["String"]>;
  color?: InputMaybe<Scalars["String"]>;
  color_space?: InputMaybe<Scalars["String"]>;
  dpr?: InputMaybe<Scalars["String"]>;
  page?: InputMaybe<Scalars["String"]>;
  density?: InputMaybe<Scalars["String"]>;
  flags?: InputMaybe<Scalars["String"]>;
  transformation?: InputMaybe<Scalars["String"]>;
};

export type PostImageWhereUniqueInput = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type PostImageWhereInput = {
  AND?: InputMaybe<Array<PostImageWhereInput>>;
  OR?: InputMaybe<Array<PostImageWhereInput>>;
  NOT?: InputMaybe<Array<PostImageWhereInput>>;
  id?: InputMaybe<IdFilter>;
  altText?: InputMaybe<StringFilter>;
  post?: InputMaybe<PostWhereInput>;
  location?: InputMaybe<PostLocationWhereInput>;
  updatedAt?: InputMaybe<DateTimeNullableFilter>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
};

export type PostImageOrderByInput = {
  id?: InputMaybe<OrderDirection>;
  altText?: InputMaybe<OrderDirection>;
  updatedAt?: InputMaybe<OrderDirection>;
  createdAt?: InputMaybe<OrderDirection>;
};

export type PostImageUpdateInput = {
  image?: InputMaybe<Scalars["Upload"]>;
  altText?: InputMaybe<Scalars["String"]>;
  post?: InputMaybe<PostRelateToOneForUpdateInput>;
  location?: InputMaybe<PostLocationRelateToOneForUpdateInput>;
};

export type PostLocationRelateToOneForUpdateInput = {
  create?: InputMaybe<PostLocationCreateInput>;
  connect?: InputMaybe<PostLocationWhereUniqueInput>;
  disconnect?: InputMaybe<Scalars["Boolean"]>;
};

export type PostImageUpdateArgs = {
  where: PostImageWhereUniqueInput;
  data: PostImageUpdateInput;
};

export type PostImageCreateInput = {
  image?: InputMaybe<Scalars["Upload"]>;
  altText?: InputMaybe<Scalars["String"]>;
  post?: InputMaybe<PostRelateToOneForCreateInput>;
  location?: InputMaybe<PostLocationRelateToOneForCreateInput>;
};

export type PostLocationRelateToOneForCreateInput = {
  create?: InputMaybe<PostLocationCreateInput>;
  connect?: InputMaybe<PostLocationWhereUniqueInput>;
};

export type PostLocation = {
  __typename?: "PostLocation";
  id: Scalars["ID"];
  image?: Maybe<PostImage>;
  locationName?: Maybe<Scalars["String"]>;
  coordinate?: Maybe<Scalars["JSON"]>;
  raw?: Maybe<Scalars["JSON"]>;
};

export type PostLocationWhereUniqueInput = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type PostLocationWhereInput = {
  AND?: InputMaybe<Array<PostLocationWhereInput>>;
  OR?: InputMaybe<Array<PostLocationWhereInput>>;
  NOT?: InputMaybe<Array<PostLocationWhereInput>>;
  id?: InputMaybe<IdFilter>;
  image?: InputMaybe<PostImageWhereInput>;
  locationName?: InputMaybe<StringFilter>;
};

export type PostLocationOrderByInput = {
  id?: InputMaybe<OrderDirection>;
  locationName?: InputMaybe<OrderDirection>;
};

export type PostLocationUpdateInput = {
  image?: InputMaybe<PostImageRelateToOneForUpdateInput>;
  locationName?: InputMaybe<Scalars["String"]>;
  coordinate?: InputMaybe<Scalars["JSON"]>;
  raw?: InputMaybe<Scalars["JSON"]>;
};

export type PostLocationUpdateArgs = {
  where: PostLocationWhereUniqueInput;
  data: PostLocationUpdateInput;
};

export type PostLocationCreateInput = {
  image?: InputMaybe<PostImageRelateToOneForCreateInput>;
  locationName?: InputMaybe<Scalars["String"]>;
  coordinate?: InputMaybe<Scalars["JSON"]>;
  raw?: InputMaybe<Scalars["JSON"]>;
};

export type Collection = {
  __typename?: "Collection";
  id: Scalars["ID"];
  slug?: Maybe<Scalars["String"]>;
  posts?: Maybe<Array<Post>>;
  postsCount?: Maybe<Scalars["Int"]>;
  name?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  isPrivate?: Maybe<Scalars["Boolean"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  user?: Maybe<User>;
};

export type CollectionPostsArgs = {
  where?: PostWhereInput;
  orderBy?: Array<PostOrderByInput>;
  take?: InputMaybe<Scalars["Int"]>;
  skip?: Scalars["Int"];
};

export type CollectionPostsCountArgs = {
  where?: PostWhereInput;
};

export type CollectionWhereUniqueInput = {
  id?: InputMaybe<Scalars["ID"]>;
  slug?: InputMaybe<Scalars["String"]>;
};

export type CollectionWhereInput = {
  AND?: InputMaybe<Array<CollectionWhereInput>>;
  OR?: InputMaybe<Array<CollectionWhereInput>>;
  NOT?: InputMaybe<Array<CollectionWhereInput>>;
  id?: InputMaybe<IdFilter>;
  slug?: InputMaybe<StringFilter>;
  posts?: InputMaybe<PostManyRelationFilter>;
  name?: InputMaybe<StringFilter>;
  description?: InputMaybe<StringFilter>;
  isPrivate?: InputMaybe<BooleanFilter>;
  updatedAt?: InputMaybe<DateTimeNullableFilter>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  user?: InputMaybe<UserWhereInput>;
};

export type PostManyRelationFilter = {
  every?: InputMaybe<PostWhereInput>;
  some?: InputMaybe<PostWhereInput>;
  none?: InputMaybe<PostWhereInput>;
};

export type CollectionOrderByInput = {
  id?: InputMaybe<OrderDirection>;
  slug?: InputMaybe<OrderDirection>;
  name?: InputMaybe<OrderDirection>;
  description?: InputMaybe<OrderDirection>;
  isPrivate?: InputMaybe<OrderDirection>;
  updatedAt?: InputMaybe<OrderDirection>;
  createdAt?: InputMaybe<OrderDirection>;
};

export type CollectionUpdateInput = {
  slug?: InputMaybe<Scalars["String"]>;
  posts?: InputMaybe<PostRelateToManyForUpdateInput>;
  name?: InputMaybe<Scalars["String"]>;
  description?: InputMaybe<Scalars["String"]>;
  isPrivate?: InputMaybe<Scalars["Boolean"]>;
};

export type PostRelateToManyForUpdateInput = {
  disconnect?: InputMaybe<Array<PostWhereUniqueInput>>;
  set?: InputMaybe<Array<PostWhereUniqueInput>>;
  create?: InputMaybe<Array<PostCreateInput>>;
  connect?: InputMaybe<Array<PostWhereUniqueInput>>;
};

export type CollectionUpdateArgs = {
  where: CollectionWhereUniqueInput;
  data: CollectionUpdateInput;
};

export type CollectionCreateInput = {
  slug?: InputMaybe<Scalars["String"]>;
  posts?: InputMaybe<PostRelateToManyForCreateInput>;
  name?: InputMaybe<Scalars["String"]>;
  description?: InputMaybe<Scalars["String"]>;
  isPrivate?: InputMaybe<Scalars["Boolean"]>;
};

export type PostRelateToManyForCreateInput = {
  create?: InputMaybe<Array<PostCreateInput>>;
  connect?: InputMaybe<Array<PostWhereUniqueInput>>;
};

export type Label = {
  __typename?: "Label";
  id: Scalars["ID"];
  name?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  posts?: Maybe<Array<Post>>;
  postsCount?: Maybe<Scalars["Int"]>;
  images?: Maybe<Scalars["JSON"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
};

export type LabelPostsArgs = {
  where?: PostWhereInput;
  orderBy?: Array<PostOrderByInput>;
  take?: InputMaybe<Scalars["Int"]>;
  skip?: Scalars["Int"];
};

export type LabelPostsCountArgs = {
  where?: PostWhereInput;
};

export type LabelWhereUniqueInput = {
  id?: InputMaybe<Scalars["ID"]>;
  name?: InputMaybe<Scalars["String"]>;
};

export type LabelWhereInput = {
  AND?: InputMaybe<Array<LabelWhereInput>>;
  OR?: InputMaybe<Array<LabelWhereInput>>;
  NOT?: InputMaybe<Array<LabelWhereInput>>;
  id?: InputMaybe<IdFilter>;
  name?: InputMaybe<StringFilter>;
  description?: InputMaybe<StringFilter>;
  posts?: InputMaybe<PostManyRelationFilter>;
  updatedAt?: InputMaybe<DateTimeNullableFilter>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
};

export type LabelOrderByInput = {
  id?: InputMaybe<OrderDirection>;
  name?: InputMaybe<OrderDirection>;
  description?: InputMaybe<OrderDirection>;
  updatedAt?: InputMaybe<OrderDirection>;
  createdAt?: InputMaybe<OrderDirection>;
};

export type LabelUpdateInput = {
  name?: InputMaybe<Scalars["String"]>;
  description?: InputMaybe<Scalars["String"]>;
  posts?: InputMaybe<PostRelateToManyForUpdateInput>;
};

export type LabelUpdateArgs = {
  where: LabelWhereUniqueInput;
  data: LabelUpdateInput;
};

export type LabelCreateInput = {
  name?: InputMaybe<Scalars["String"]>;
  description?: InputMaybe<Scalars["String"]>;
  posts?: InputMaybe<PostRelateToManyForCreateInput>;
};

export type User = {
  __typename?: "User";
  id: Scalars["ID"];
  firstName?: Maybe<Scalars["String"]>;
  lastName?: Maybe<Scalars["String"]>;
  email?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  username?: Maybe<Scalars["String"]>;
  password?: Maybe<PasswordState>;
  role?: Maybe<Role>;
  posts?: Maybe<Array<Post>>;
  postsCount?: Maybe<Scalars["Int"]>;
  avatar?: Maybe<CloudinaryImage_File>;
  website?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  postLikes?: Maybe<Array<PostLike>>;
  postLikesCount?: Maybe<Scalars["Int"]>;
  allowMessage?: Maybe<Scalars["Boolean"]>;
  collection?: Maybe<Array<Collection>>;
  collectionCount?: Maybe<Scalars["Int"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  passwordResetToken?: Maybe<PasswordState>;
  passwordResetIssuedAt?: Maybe<Scalars["DateTime"]>;
  passwordResetRedeemedAt?: Maybe<Scalars["DateTime"]>;
  magicAuthToken?: Maybe<PasswordState>;
  magicAuthIssuedAt?: Maybe<Scalars["DateTime"]>;
  magicAuthRedeemedAt?: Maybe<Scalars["DateTime"]>;
};

export type UserPostsArgs = {
  where?: PostWhereInput;
  orderBy?: Array<PostOrderByInput>;
  take?: InputMaybe<Scalars["Int"]>;
  skip?: Scalars["Int"];
};

export type UserPostsCountArgs = {
  where?: PostWhereInput;
};

export type UserPostLikesArgs = {
  where?: PostLikeWhereInput;
  orderBy?: Array<PostLikeOrderByInput>;
  take?: InputMaybe<Scalars["Int"]>;
  skip?: Scalars["Int"];
};

export type UserPostLikesCountArgs = {
  where?: PostLikeWhereInput;
};

export type UserCollectionArgs = {
  where?: CollectionWhereInput;
  orderBy?: Array<CollectionOrderByInput>;
  take?: InputMaybe<Scalars["Int"]>;
  skip?: Scalars["Int"];
};

export type UserCollectionCountArgs = {
  where?: CollectionWhereInput;
};

export type PasswordState = {
  __typename?: "PasswordState";
  isSet: Scalars["Boolean"];
};

export type CloudinaryImage_File = {
  __typename?: "CloudinaryImage_File";
  id?: Maybe<Scalars["ID"]>;
  filename?: Maybe<Scalars["String"]>;
  originalFilename?: Maybe<Scalars["String"]>;
  mimetype?: Maybe<Scalars["String"]>;
  encoding?: Maybe<Scalars["String"]>;
  publicUrl?: Maybe<Scalars["String"]>;
  publicUrlTransformed?: Maybe<Scalars["String"]>;
};

export type CloudinaryImage_FilePublicUrlTransformedArgs = {
  transformation?: InputMaybe<CloudinaryImageFormat>;
};

/**
 * Mirrors the formatting options [Cloudinary provides](https://cloudinary.com/documentation/image_transformation_reference).
 * All options are strings as they ultimately end up in a URL.
 */
export type CloudinaryImageFormat = {
  /** Rewrites the filename to be this pretty string. Do not include `/` or `.` */
  prettyName?: InputMaybe<Scalars["String"]>;
  width?: InputMaybe<Scalars["String"]>;
  height?: InputMaybe<Scalars["String"]>;
  crop?: InputMaybe<Scalars["String"]>;
  aspect_ratio?: InputMaybe<Scalars["String"]>;
  gravity?: InputMaybe<Scalars["String"]>;
  zoom?: InputMaybe<Scalars["String"]>;
  x?: InputMaybe<Scalars["String"]>;
  y?: InputMaybe<Scalars["String"]>;
  format?: InputMaybe<Scalars["String"]>;
  fetch_format?: InputMaybe<Scalars["String"]>;
  quality?: InputMaybe<Scalars["String"]>;
  radius?: InputMaybe<Scalars["String"]>;
  angle?: InputMaybe<Scalars["String"]>;
  effect?: InputMaybe<Scalars["String"]>;
  opacity?: InputMaybe<Scalars["String"]>;
  border?: InputMaybe<Scalars["String"]>;
  background?: InputMaybe<Scalars["String"]>;
  overlay?: InputMaybe<Scalars["String"]>;
  underlay?: InputMaybe<Scalars["String"]>;
  default_image?: InputMaybe<Scalars["String"]>;
  delay?: InputMaybe<Scalars["String"]>;
  color?: InputMaybe<Scalars["String"]>;
  color_space?: InputMaybe<Scalars["String"]>;
  dpr?: InputMaybe<Scalars["String"]>;
  page?: InputMaybe<Scalars["String"]>;
  density?: InputMaybe<Scalars["String"]>;
  flags?: InputMaybe<Scalars["String"]>;
  transformation?: InputMaybe<Scalars["String"]>;
};

export type UserWhereUniqueInput = {
  id?: InputMaybe<Scalars["ID"]>;
  email?: InputMaybe<Scalars["String"]>;
  username?: InputMaybe<Scalars["String"]>;
};

export type UserWhereInput = {
  AND?: InputMaybe<Array<UserWhereInput>>;
  OR?: InputMaybe<Array<UserWhereInput>>;
  NOT?: InputMaybe<Array<UserWhereInput>>;
  id?: InputMaybe<IdFilter>;
  firstName?: InputMaybe<StringFilter>;
  lastName?: InputMaybe<StringFilter>;
  email?: InputMaybe<StringFilter>;
  username?: InputMaybe<StringFilter>;
  password?: InputMaybe<PasswordFilter>;
  role?: InputMaybe<RoleWhereInput>;
  posts?: InputMaybe<PostManyRelationFilter>;
  website?: InputMaybe<StringFilter>;
  description?: InputMaybe<StringFilter>;
  postLikes?: InputMaybe<PostLikeManyRelationFilter>;
  allowMessage?: InputMaybe<BooleanFilter>;
  collection?: InputMaybe<CollectionManyRelationFilter>;
  updatedAt?: InputMaybe<DateTimeNullableFilter>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  passwordResetToken?: InputMaybe<PasswordFilter>;
  passwordResetIssuedAt?: InputMaybe<DateTimeNullableFilter>;
  passwordResetRedeemedAt?: InputMaybe<DateTimeNullableFilter>;
  magicAuthToken?: InputMaybe<PasswordFilter>;
  magicAuthIssuedAt?: InputMaybe<DateTimeNullableFilter>;
  magicAuthRedeemedAt?: InputMaybe<DateTimeNullableFilter>;
};

export type PasswordFilter = {
  isSet: Scalars["Boolean"];
};

export type PostLikeManyRelationFilter = {
  every?: InputMaybe<PostLikeWhereInput>;
  some?: InputMaybe<PostLikeWhereInput>;
  none?: InputMaybe<PostLikeWhereInput>;
};

export type CollectionManyRelationFilter = {
  every?: InputMaybe<CollectionWhereInput>;
  some?: InputMaybe<CollectionWhereInput>;
  none?: InputMaybe<CollectionWhereInput>;
};

export type UserOrderByInput = {
  id?: InputMaybe<OrderDirection>;
  firstName?: InputMaybe<OrderDirection>;
  lastName?: InputMaybe<OrderDirection>;
  email?: InputMaybe<OrderDirection>;
  username?: InputMaybe<OrderDirection>;
  website?: InputMaybe<OrderDirection>;
  description?: InputMaybe<OrderDirection>;
  allowMessage?: InputMaybe<OrderDirection>;
  updatedAt?: InputMaybe<OrderDirection>;
  createdAt?: InputMaybe<OrderDirection>;
  passwordResetIssuedAt?: InputMaybe<OrderDirection>;
  passwordResetRedeemedAt?: InputMaybe<OrderDirection>;
  magicAuthIssuedAt?: InputMaybe<OrderDirection>;
  magicAuthRedeemedAt?: InputMaybe<OrderDirection>;
};

export type UserUpdateInput = {
  firstName?: InputMaybe<Scalars["String"]>;
  lastName?: InputMaybe<Scalars["String"]>;
  email?: InputMaybe<Scalars["String"]>;
  username?: InputMaybe<Scalars["String"]>;
  password?: InputMaybe<Scalars["String"]>;
  role?: InputMaybe<RoleRelateToOneForUpdateInput>;
  posts?: InputMaybe<PostRelateToManyForUpdateInput>;
  avatar?: InputMaybe<Scalars["Upload"]>;
  website?: InputMaybe<Scalars["String"]>;
  description?: InputMaybe<Scalars["String"]>;
  postLikes?: InputMaybe<PostLikeRelateToManyForUpdateInput>;
  allowMessage?: InputMaybe<Scalars["Boolean"]>;
  collection?: InputMaybe<CollectionRelateToManyForUpdateInput>;
  passwordResetToken?: InputMaybe<Scalars["String"]>;
  passwordResetIssuedAt?: InputMaybe<Scalars["DateTime"]>;
  passwordResetRedeemedAt?: InputMaybe<Scalars["DateTime"]>;
  magicAuthToken?: InputMaybe<Scalars["String"]>;
  magicAuthIssuedAt?: InputMaybe<Scalars["DateTime"]>;
  magicAuthRedeemedAt?: InputMaybe<Scalars["DateTime"]>;
};

export type RoleRelateToOneForUpdateInput = {
  create?: InputMaybe<RoleCreateInput>;
  connect?: InputMaybe<RoleWhereUniqueInput>;
  disconnect?: InputMaybe<Scalars["Boolean"]>;
};

export type PostLikeRelateToManyForUpdateInput = {
  disconnect?: InputMaybe<Array<PostLikeWhereUniqueInput>>;
  set?: InputMaybe<Array<PostLikeWhereUniqueInput>>;
  create?: InputMaybe<Array<PostLikeCreateInput>>;
  connect?: InputMaybe<Array<PostLikeWhereUniqueInput>>;
};

export type CollectionRelateToManyForUpdateInput = {
  disconnect?: InputMaybe<Array<CollectionWhereUniqueInput>>;
  set?: InputMaybe<Array<CollectionWhereUniqueInput>>;
  create?: InputMaybe<Array<CollectionCreateInput>>;
  connect?: InputMaybe<Array<CollectionWhereUniqueInput>>;
};

export type UserUpdateArgs = {
  where: UserWhereUniqueInput;
  data: UserUpdateInput;
};

export type UserCreateInput = {
  firstName?: InputMaybe<Scalars["String"]>;
  lastName?: InputMaybe<Scalars["String"]>;
  email?: InputMaybe<Scalars["String"]>;
  username?: InputMaybe<Scalars["String"]>;
  password?: InputMaybe<Scalars["String"]>;
  role?: InputMaybe<RoleRelateToOneForCreateInput>;
  posts?: InputMaybe<PostRelateToManyForCreateInput>;
  avatar?: InputMaybe<Scalars["Upload"]>;
  website?: InputMaybe<Scalars["String"]>;
  description?: InputMaybe<Scalars["String"]>;
  postLikes?: InputMaybe<PostLikeRelateToManyForCreateInput>;
  allowMessage?: InputMaybe<Scalars["Boolean"]>;
  collection?: InputMaybe<CollectionRelateToManyForCreateInput>;
  passwordResetToken?: InputMaybe<Scalars["String"]>;
  passwordResetIssuedAt?: InputMaybe<Scalars["DateTime"]>;
  passwordResetRedeemedAt?: InputMaybe<Scalars["DateTime"]>;
  magicAuthToken?: InputMaybe<Scalars["String"]>;
  magicAuthIssuedAt?: InputMaybe<Scalars["DateTime"]>;
  magicAuthRedeemedAt?: InputMaybe<Scalars["DateTime"]>;
};

export type RoleRelateToOneForCreateInput = {
  create?: InputMaybe<RoleCreateInput>;
  connect?: InputMaybe<RoleWhereUniqueInput>;
};

export type PostLikeRelateToManyForCreateInput = {
  create?: InputMaybe<Array<PostLikeCreateInput>>;
  connect?: InputMaybe<Array<PostLikeWhereUniqueInput>>;
};

export type CollectionRelateToManyForCreateInput = {
  create?: InputMaybe<Array<CollectionCreateInput>>;
  connect?: InputMaybe<Array<CollectionWhereUniqueInput>>;
};

export type Role = {
  __typename?: "Role";
  id: Scalars["ID"];
  name?: Maybe<Scalars["String"]>;
  canManageContent?: Maybe<Scalars["Boolean"]>;
  canManageUsers?: Maybe<Scalars["Boolean"]>;
  users?: Maybe<Array<User>>;
  usersCount?: Maybe<Scalars["Int"]>;
};

export type RoleUsersArgs = {
  where?: UserWhereInput;
  orderBy?: Array<UserOrderByInput>;
  take?: InputMaybe<Scalars["Int"]>;
  skip?: Scalars["Int"];
};

export type RoleUsersCountArgs = {
  where?: UserWhereInput;
};

export type RoleWhereUniqueInput = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type RoleWhereInput = {
  AND?: InputMaybe<Array<RoleWhereInput>>;
  OR?: InputMaybe<Array<RoleWhereInput>>;
  NOT?: InputMaybe<Array<RoleWhereInput>>;
  id?: InputMaybe<IdFilter>;
  name?: InputMaybe<StringFilter>;
  canManageContent?: InputMaybe<BooleanFilter>;
  canManageUsers?: InputMaybe<BooleanFilter>;
  users?: InputMaybe<UserManyRelationFilter>;
};

export type UserManyRelationFilter = {
  every?: InputMaybe<UserWhereInput>;
  some?: InputMaybe<UserWhereInput>;
  none?: InputMaybe<UserWhereInput>;
};

export type RoleOrderByInput = {
  id?: InputMaybe<OrderDirection>;
  name?: InputMaybe<OrderDirection>;
  canManageContent?: InputMaybe<OrderDirection>;
  canManageUsers?: InputMaybe<OrderDirection>;
};

export type RoleUpdateInput = {
  name?: InputMaybe<Scalars["String"]>;
  canManageContent?: InputMaybe<Scalars["Boolean"]>;
  canManageUsers?: InputMaybe<Scalars["Boolean"]>;
  users?: InputMaybe<UserRelateToManyForUpdateInput>;
};

export type UserRelateToManyForUpdateInput = {
  disconnect?: InputMaybe<Array<UserWhereUniqueInput>>;
  set?: InputMaybe<Array<UserWhereUniqueInput>>;
  create?: InputMaybe<Array<UserCreateInput>>;
  connect?: InputMaybe<Array<UserWhereUniqueInput>>;
};

export type RoleUpdateArgs = {
  where: RoleWhereUniqueInput;
  data: RoleUpdateInput;
};

export type RoleCreateInput = {
  name?: InputMaybe<Scalars["String"]>;
  canManageContent?: InputMaybe<Scalars["Boolean"]>;
  canManageUsers?: InputMaybe<Scalars["Boolean"]>;
  users?: InputMaybe<UserRelateToManyForCreateInput>;
};

export type UserRelateToManyForCreateInput = {
  create?: InputMaybe<Array<UserCreateInput>>;
  connect?: InputMaybe<Array<UserWhereUniqueInput>>;
};

export type Mutation = {
  __typename?: "Mutation";
  createPost?: Maybe<Post>;
  createPosts?: Maybe<Array<Maybe<Post>>>;
  updatePost?: Maybe<Post>;
  updatePosts?: Maybe<Array<Maybe<Post>>>;
  deletePost?: Maybe<Post>;
  deletePosts?: Maybe<Array<Maybe<Post>>>;
  createPostLike?: Maybe<PostLike>;
  createPostLikes?: Maybe<Array<Maybe<PostLike>>>;
  updatePostLike?: Maybe<PostLike>;
  updatePostLikes?: Maybe<Array<Maybe<PostLike>>>;
  deletePostLike?: Maybe<PostLike>;
  deletePostLikes?: Maybe<Array<Maybe<PostLike>>>;
  createPostImage?: Maybe<PostImage>;
  createPostImages?: Maybe<Array<Maybe<PostImage>>>;
  updatePostImage?: Maybe<PostImage>;
  updatePostImages?: Maybe<Array<Maybe<PostImage>>>;
  deletePostImage?: Maybe<PostImage>;
  deletePostImages?: Maybe<Array<Maybe<PostImage>>>;
  createPostLocation?: Maybe<PostLocation>;
  createPostLocations?: Maybe<Array<Maybe<PostLocation>>>;
  updatePostLocation?: Maybe<PostLocation>;
  updatePostLocations?: Maybe<Array<Maybe<PostLocation>>>;
  deletePostLocation?: Maybe<PostLocation>;
  deletePostLocations?: Maybe<Array<Maybe<PostLocation>>>;
  createCollection?: Maybe<Collection>;
  createCollections?: Maybe<Array<Maybe<Collection>>>;
  updateCollection?: Maybe<Collection>;
  updateCollections?: Maybe<Array<Maybe<Collection>>>;
  deleteCollection?: Maybe<Collection>;
  deleteCollections?: Maybe<Array<Maybe<Collection>>>;
  createLabel?: Maybe<Label>;
  createLabels?: Maybe<Array<Maybe<Label>>>;
  updateLabel?: Maybe<Label>;
  updateLabels?: Maybe<Array<Maybe<Label>>>;
  deleteLabel?: Maybe<Label>;
  deleteLabels?: Maybe<Array<Maybe<Label>>>;
  createUser?: Maybe<User>;
  createUsers?: Maybe<Array<Maybe<User>>>;
  updateUser?: Maybe<User>;
  updateUsers?: Maybe<Array<Maybe<User>>>;
  deleteUser?: Maybe<User>;
  deleteUsers?: Maybe<Array<Maybe<User>>>;
  createRole?: Maybe<Role>;
  createRoles?: Maybe<Array<Maybe<Role>>>;
  updateRole?: Maybe<Role>;
  updateRoles?: Maybe<Array<Maybe<Role>>>;
  deleteRole?: Maybe<Role>;
  deleteRoles?: Maybe<Array<Maybe<Role>>>;
  endSession: Scalars["Boolean"];
  authenticateUserWithPassword?: Maybe<UserAuthenticationWithPasswordResult>;
  createInitialUser: UserAuthenticationWithPasswordSuccess;
  sendUserPasswordResetLink: Scalars["Boolean"];
  redeemUserPasswordResetToken?: Maybe<RedeemUserPasswordResetTokenResult>;
  sendUserMagicAuthLink: Scalars["Boolean"];
  redeemUserMagicAuthToken: RedeemUserMagicAuthTokenResult;
};

export type MutationCreatePostArgs = {
  data: PostCreateInput;
};

export type MutationCreatePostsArgs = {
  data: Array<PostCreateInput>;
};

export type MutationUpdatePostArgs = {
  where: PostWhereUniqueInput;
  data: PostUpdateInput;
};

export type MutationUpdatePostsArgs = {
  data: Array<PostUpdateArgs>;
};

export type MutationDeletePostArgs = {
  where: PostWhereUniqueInput;
};

export type MutationDeletePostsArgs = {
  where: Array<PostWhereUniqueInput>;
};

export type MutationCreatePostLikeArgs = {
  data: PostLikeCreateInput;
};

export type MutationCreatePostLikesArgs = {
  data: Array<PostLikeCreateInput>;
};

export type MutationUpdatePostLikeArgs = {
  where: PostLikeWhereUniqueInput;
  data: PostLikeUpdateInput;
};

export type MutationUpdatePostLikesArgs = {
  data: Array<PostLikeUpdateArgs>;
};

export type MutationDeletePostLikeArgs = {
  where: PostLikeWhereUniqueInput;
};

export type MutationDeletePostLikesArgs = {
  where: Array<PostLikeWhereUniqueInput>;
};

export type MutationCreatePostImageArgs = {
  data: PostImageCreateInput;
};

export type MutationCreatePostImagesArgs = {
  data: Array<PostImageCreateInput>;
};

export type MutationUpdatePostImageArgs = {
  where: PostImageWhereUniqueInput;
  data: PostImageUpdateInput;
};

export type MutationUpdatePostImagesArgs = {
  data: Array<PostImageUpdateArgs>;
};

export type MutationDeletePostImageArgs = {
  where: PostImageWhereUniqueInput;
};

export type MutationDeletePostImagesArgs = {
  where: Array<PostImageWhereUniqueInput>;
};

export type MutationCreatePostLocationArgs = {
  data: PostLocationCreateInput;
};

export type MutationCreatePostLocationsArgs = {
  data: Array<PostLocationCreateInput>;
};

export type MutationUpdatePostLocationArgs = {
  where: PostLocationWhereUniqueInput;
  data: PostLocationUpdateInput;
};

export type MutationUpdatePostLocationsArgs = {
  data: Array<PostLocationUpdateArgs>;
};

export type MutationDeletePostLocationArgs = {
  where: PostLocationWhereUniqueInput;
};

export type MutationDeletePostLocationsArgs = {
  where: Array<PostLocationWhereUniqueInput>;
};

export type MutationCreateCollectionArgs = {
  data: CollectionCreateInput;
};

export type MutationCreateCollectionsArgs = {
  data: Array<CollectionCreateInput>;
};

export type MutationUpdateCollectionArgs = {
  where: CollectionWhereUniqueInput;
  data: CollectionUpdateInput;
};

export type MutationUpdateCollectionsArgs = {
  data: Array<CollectionUpdateArgs>;
};

export type MutationDeleteCollectionArgs = {
  where: CollectionWhereUniqueInput;
};

export type MutationDeleteCollectionsArgs = {
  where: Array<CollectionWhereUniqueInput>;
};

export type MutationCreateLabelArgs = {
  data: LabelCreateInput;
};

export type MutationCreateLabelsArgs = {
  data: Array<LabelCreateInput>;
};

export type MutationUpdateLabelArgs = {
  where: LabelWhereUniqueInput;
  data: LabelUpdateInput;
};

export type MutationUpdateLabelsArgs = {
  data: Array<LabelUpdateArgs>;
};

export type MutationDeleteLabelArgs = {
  where: LabelWhereUniqueInput;
};

export type MutationDeleteLabelsArgs = {
  where: Array<LabelWhereUniqueInput>;
};

export type MutationCreateUserArgs = {
  data: UserCreateInput;
};

export type MutationCreateUsersArgs = {
  data: Array<UserCreateInput>;
};

export type MutationUpdateUserArgs = {
  where: UserWhereUniqueInput;
  data: UserUpdateInput;
};

export type MutationUpdateUsersArgs = {
  data: Array<UserUpdateArgs>;
};

export type MutationDeleteUserArgs = {
  where: UserWhereUniqueInput;
};

export type MutationDeleteUsersArgs = {
  where: Array<UserWhereUniqueInput>;
};

export type MutationCreateRoleArgs = {
  data: RoleCreateInput;
};

export type MutationCreateRolesArgs = {
  data: Array<RoleCreateInput>;
};

export type MutationUpdateRoleArgs = {
  where: RoleWhereUniqueInput;
  data: RoleUpdateInput;
};

export type MutationUpdateRolesArgs = {
  data: Array<RoleUpdateArgs>;
};

export type MutationDeleteRoleArgs = {
  where: RoleWhereUniqueInput;
};

export type MutationDeleteRolesArgs = {
  where: Array<RoleWhereUniqueInput>;
};

export type MutationAuthenticateUserWithPasswordArgs = {
  email: Scalars["String"];
  password: Scalars["String"];
};

export type MutationCreateInitialUserArgs = {
  data: CreateInitialUserInput;
};

export type MutationSendUserPasswordResetLinkArgs = {
  email: Scalars["String"];
};

export type MutationRedeemUserPasswordResetTokenArgs = {
  email: Scalars["String"];
  token: Scalars["String"];
  password: Scalars["String"];
};

export type MutationSendUserMagicAuthLinkArgs = {
  email: Scalars["String"];
};

export type MutationRedeemUserMagicAuthTokenArgs = {
  email: Scalars["String"];
  token: Scalars["String"];
};

export type UserAuthenticationWithPasswordResult =
  | UserAuthenticationWithPasswordSuccess
  | UserAuthenticationWithPasswordFailure;

export type UserAuthenticationWithPasswordSuccess = {
  __typename?: "UserAuthenticationWithPasswordSuccess";
  sessionToken: Scalars["String"];
  item: User;
};

export type UserAuthenticationWithPasswordFailure = {
  __typename?: "UserAuthenticationWithPasswordFailure";
  message: Scalars["String"];
};

export type CreateInitialUserInput = {
  firstName?: InputMaybe<Scalars["String"]>;
  lastName?: InputMaybe<Scalars["String"]>;
  email?: InputMaybe<Scalars["String"]>;
  password?: InputMaybe<Scalars["String"]>;
};

export type RedeemUserPasswordResetTokenResult = {
  __typename?: "RedeemUserPasswordResetTokenResult";
  code: PasswordResetRedemptionErrorCode;
  message: Scalars["String"];
};

export enum PasswordResetRedemptionErrorCode {
  Failure = "FAILURE",
  TokenExpired = "TOKEN_EXPIRED",
  TokenRedeemed = "TOKEN_REDEEMED",
}

export type RedeemUserMagicAuthTokenResult =
  | RedeemUserMagicAuthTokenSuccess
  | RedeemUserMagicAuthTokenFailure;

export type RedeemUserMagicAuthTokenSuccess = {
  __typename?: "RedeemUserMagicAuthTokenSuccess";
  token: Scalars["String"];
  item: User;
};

export type RedeemUserMagicAuthTokenFailure = {
  __typename?: "RedeemUserMagicAuthTokenFailure";
  code: MagicLinkRedemptionErrorCode;
  message: Scalars["String"];
};

export enum MagicLinkRedemptionErrorCode {
  Failure = "FAILURE",
  TokenExpired = "TOKEN_EXPIRED",
  TokenRedeemed = "TOKEN_REDEEMED",
}

export type Query = {
  __typename?: "Query";
  posts?: Maybe<Array<Post>>;
  post?: Maybe<Post>;
  postsCount?: Maybe<Scalars["Int"]>;
  postLikes?: Maybe<Array<PostLike>>;
  postLike?: Maybe<PostLike>;
  postLikesCount?: Maybe<Scalars["Int"]>;
  postImages?: Maybe<Array<PostImage>>;
  postImage?: Maybe<PostImage>;
  postImagesCount?: Maybe<Scalars["Int"]>;
  postLocations?: Maybe<Array<PostLocation>>;
  postLocation?: Maybe<PostLocation>;
  postLocationsCount?: Maybe<Scalars["Int"]>;
  collections?: Maybe<Array<Collection>>;
  collection?: Maybe<Collection>;
  collectionsCount?: Maybe<Scalars["Int"]>;
  labels?: Maybe<Array<Label>>;
  label?: Maybe<Label>;
  labelsCount?: Maybe<Scalars["Int"]>;
  users?: Maybe<Array<User>>;
  user?: Maybe<User>;
  usersCount?: Maybe<Scalars["Int"]>;
  roles?: Maybe<Array<Role>>;
  role?: Maybe<Role>;
  rolesCount?: Maybe<Scalars["Int"]>;
  keystone: KeystoneMeta;
  authenticatedItem?: Maybe<AuthenticatedItem>;
  validateUserPasswordResetToken?: Maybe<ValidateUserPasswordResetTokenResult>;
};

export type QueryPostsArgs = {
  where?: PostWhereInput;
  orderBy?: Array<PostOrderByInput>;
  take?: InputMaybe<Scalars["Int"]>;
  skip?: Scalars["Int"];
};

export type QueryPostArgs = {
  where: PostWhereUniqueInput;
};

export type QueryPostsCountArgs = {
  where?: PostWhereInput;
};

export type QueryPostLikesArgs = {
  where?: PostLikeWhereInput;
  orderBy?: Array<PostLikeOrderByInput>;
  take?: InputMaybe<Scalars["Int"]>;
  skip?: Scalars["Int"];
};

export type QueryPostLikeArgs = {
  where: PostLikeWhereUniqueInput;
};

export type QueryPostLikesCountArgs = {
  where?: PostLikeWhereInput;
};

export type QueryPostImagesArgs = {
  where?: PostImageWhereInput;
  orderBy?: Array<PostImageOrderByInput>;
  take?: InputMaybe<Scalars["Int"]>;
  skip?: Scalars["Int"];
};

export type QueryPostImageArgs = {
  where: PostImageWhereUniqueInput;
};

export type QueryPostImagesCountArgs = {
  where?: PostImageWhereInput;
};

export type QueryPostLocationsArgs = {
  where?: PostLocationWhereInput;
  orderBy?: Array<PostLocationOrderByInput>;
  take?: InputMaybe<Scalars["Int"]>;
  skip?: Scalars["Int"];
};

export type QueryPostLocationArgs = {
  where: PostLocationWhereUniqueInput;
};

export type QueryPostLocationsCountArgs = {
  where?: PostLocationWhereInput;
};

export type QueryCollectionsArgs = {
  where?: CollectionWhereInput;
  orderBy?: Array<CollectionOrderByInput>;
  take?: InputMaybe<Scalars["Int"]>;
  skip?: Scalars["Int"];
};

export type QueryCollectionArgs = {
  where: CollectionWhereUniqueInput;
};

export type QueryCollectionsCountArgs = {
  where?: CollectionWhereInput;
};

export type QueryLabelsArgs = {
  where?: LabelWhereInput;
  orderBy?: Array<LabelOrderByInput>;
  take?: InputMaybe<Scalars["Int"]>;
  skip?: Scalars["Int"];
};

export type QueryLabelArgs = {
  where: LabelWhereUniqueInput;
};

export type QueryLabelsCountArgs = {
  where?: LabelWhereInput;
};

export type QueryUsersArgs = {
  where?: UserWhereInput;
  orderBy?: Array<UserOrderByInput>;
  take?: InputMaybe<Scalars["Int"]>;
  skip?: Scalars["Int"];
};

export type QueryUserArgs = {
  where: UserWhereUniqueInput;
};

export type QueryUsersCountArgs = {
  where?: UserWhereInput;
};

export type QueryRolesArgs = {
  where?: RoleWhereInput;
  orderBy?: Array<RoleOrderByInput>;
  take?: InputMaybe<Scalars["Int"]>;
  skip?: Scalars["Int"];
};

export type QueryRoleArgs = {
  where: RoleWhereUniqueInput;
};

export type QueryRolesCountArgs = {
  where?: RoleWhereInput;
};

export type QueryValidateUserPasswordResetTokenArgs = {
  email: Scalars["String"];
  token: Scalars["String"];
};

export type AuthenticatedItem = User;

export type ValidateUserPasswordResetTokenResult = {
  __typename?: "ValidateUserPasswordResetTokenResult";
  code: PasswordResetRedemptionErrorCode;
  message: Scalars["String"];
};

export type KeystoneMeta = {
  __typename?: "KeystoneMeta";
  adminMeta: KeystoneAdminMeta;
};

export type KeystoneAdminMeta = {
  __typename?: "KeystoneAdminMeta";
  enableSignout: Scalars["Boolean"];
  enableSessionItem: Scalars["Boolean"];
  lists: Array<KeystoneAdminUiListMeta>;
  list?: Maybe<KeystoneAdminUiListMeta>;
};

export type KeystoneAdminMetaListArgs = {
  key: Scalars["String"];
};

export type KeystoneAdminUiListMeta = {
  __typename?: "KeystoneAdminUIListMeta";
  key: Scalars["String"];
  itemQueryName: Scalars["String"];
  listQueryName: Scalars["String"];
  hideCreate: Scalars["Boolean"];
  hideDelete: Scalars["Boolean"];
  path: Scalars["String"];
  label: Scalars["String"];
  singular: Scalars["String"];
  plural: Scalars["String"];
  description?: Maybe<Scalars["String"]>;
  initialColumns: Array<Scalars["String"]>;
  pageSize: Scalars["Int"];
  labelField: Scalars["String"];
  fields: Array<KeystoneAdminUiFieldMeta>;
  initialSort?: Maybe<KeystoneAdminUiSort>;
  isHidden: Scalars["Boolean"];
};

export type KeystoneAdminUiFieldMeta = {
  __typename?: "KeystoneAdminUIFieldMeta";
  path: Scalars["String"];
  label: Scalars["String"];
  isOrderable: Scalars["Boolean"];
  isFilterable: Scalars["Boolean"];
  fieldMeta?: Maybe<Scalars["JSON"]>;
  viewsIndex: Scalars["Int"];
  customViewsIndex?: Maybe<Scalars["Int"]>;
  createView: KeystoneAdminUiFieldMetaCreateView;
  listView: KeystoneAdminUiFieldMetaListView;
  itemView?: Maybe<KeystoneAdminUiFieldMetaItemView>;
  search?: Maybe<QueryMode>;
};

export type KeystoneAdminUiFieldMetaItemViewArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type KeystoneAdminUiFieldMetaCreateView = {
  __typename?: "KeystoneAdminUIFieldMetaCreateView";
  fieldMode: KeystoneAdminUiFieldMetaCreateViewFieldMode;
};

export enum KeystoneAdminUiFieldMetaCreateViewFieldMode {
  Edit = "edit",
  Hidden = "hidden",
}

export type KeystoneAdminUiFieldMetaListView = {
  __typename?: "KeystoneAdminUIFieldMetaListView";
  fieldMode: KeystoneAdminUiFieldMetaListViewFieldMode;
};

export enum KeystoneAdminUiFieldMetaListViewFieldMode {
  Read = "read",
  Hidden = "hidden",
}

export type KeystoneAdminUiFieldMetaItemView = {
  __typename?: "KeystoneAdminUIFieldMetaItemView";
  fieldMode?: Maybe<KeystoneAdminUiFieldMetaItemViewFieldMode>;
};

export enum KeystoneAdminUiFieldMetaItemViewFieldMode {
  Edit = "edit",
  Read = "read",
  Hidden = "hidden",
}

export type KeystoneAdminUiSort = {
  __typename?: "KeystoneAdminUISort";
  field: Scalars["String"];
  direction: KeystoneAdminUiSortDirection;
};

export enum KeystoneAdminUiSortDirection {
  Asc = "ASC",
  Desc = "DESC",
}
