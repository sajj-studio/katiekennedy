export type Maybe<T> = T | null
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> }
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  /** A date string, such as 2007-12-03, compliant with the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: any
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any
}

export type BlurredOptions = {
  /** Width of the generated low-res preview. Default is 20px */
  width?: Maybe<Scalars['Int']>
  /**
   * Force the output format for the low-res preview. Default is to use the same
   * format as the input. You should rarely need to change this
   */
  toFormat?: Maybe<ImageFormat>
}

export type BooleanQueryOperatorInput = {
  eq?: Maybe<Scalars['Boolean']>
  ne?: Maybe<Scalars['Boolean']>
  in?: Maybe<Array<Maybe<Scalars['Boolean']>>>
  nin?: Maybe<Array<Maybe<Scalars['Boolean']>>>
}

export type ContentfulAsset = ContentfulReference &
  Node & {
    __typename?: 'ContentfulAsset'
    contentful_id: Scalars['String']
    id: Scalars['ID']
    spaceId?: Maybe<Scalars['String']>
    createdAt?: Maybe<Scalars['Date']>
    updatedAt?: Maybe<Scalars['Date']>
    file?: Maybe<ContentfulAssetFile>
    title?: Maybe<Scalars['String']>
    description?: Maybe<Scalars['String']>
    node_locale?: Maybe<Scalars['String']>
    sys?: Maybe<ContentfulAssetSys>
    localFile?: Maybe<File>
    fixed?: Maybe<ContentfulFixed>
    /** @deprecated Resolutions was deprecated in Gatsby v2. It's been renamed to "fixed" https://example.com/write-docs-and-fix-this-example-link */
    resolutions?: Maybe<ContentfulResolutions>
    fluid?: Maybe<ContentfulFluid>
    /** @deprecated Sizes was deprecated in Gatsby v2. It's been renamed to "fluid" https://example.com/write-docs-and-fix-this-example-link */
    sizes?: Maybe<ContentfulSizes>
    resize?: Maybe<ContentfulResize>
    parent?: Maybe<Node>
    children: Array<Node>
    internal: Internal
  }

export type ContentfulAssetCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type ContentfulAssetUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type ContentfulAssetFixedArgs = {
  width?: Maybe<Scalars['Int']>
  height?: Maybe<Scalars['Int']>
  quality?: Maybe<Scalars['Int']>
  toFormat?: Maybe<ContentfulImageFormat>
  resizingBehavior?: Maybe<ImageResizingBehavior>
  cropFocus?: Maybe<ContentfulImageCropFocus>
  background?: Maybe<Scalars['String']>
}

export type ContentfulAssetResolutionsArgs = {
  width?: Maybe<Scalars['Int']>
  height?: Maybe<Scalars['Int']>
  quality?: Maybe<Scalars['Int']>
  toFormat?: Maybe<ContentfulImageFormat>
  resizingBehavior?: Maybe<ImageResizingBehavior>
  cropFocus?: Maybe<ContentfulImageCropFocus>
  background?: Maybe<Scalars['String']>
}

export type ContentfulAssetFluidArgs = {
  maxWidth?: Maybe<Scalars['Int']>
  maxHeight?: Maybe<Scalars['Int']>
  quality?: Maybe<Scalars['Int']>
  toFormat?: Maybe<ContentfulImageFormat>
  resizingBehavior?: Maybe<ImageResizingBehavior>
  cropFocus?: Maybe<ContentfulImageCropFocus>
  background?: Maybe<Scalars['String']>
  sizes?: Maybe<Scalars['String']>
}

export type ContentfulAssetSizesArgs = {
  maxWidth?: Maybe<Scalars['Int']>
  maxHeight?: Maybe<Scalars['Int']>
  quality?: Maybe<Scalars['Int']>
  toFormat?: Maybe<ContentfulImageFormat>
  resizingBehavior?: Maybe<ImageResizingBehavior>
  cropFocus?: Maybe<ContentfulImageCropFocus>
  background?: Maybe<Scalars['String']>
  sizes?: Maybe<Scalars['String']>
}

export type ContentfulAssetResizeArgs = {
  width?: Maybe<Scalars['Int']>
  height?: Maybe<Scalars['Int']>
  quality?: Maybe<Scalars['Int']>
  jpegProgressive?: Maybe<Scalars['Boolean']>
  resizingBehavior?: Maybe<ImageResizingBehavior>
  toFormat?: Maybe<ContentfulImageFormat>
  cropFocus?: Maybe<ContentfulImageCropFocus>
  background?: Maybe<Scalars['String']>
}

export type ContentfulAssetConnection = {
  __typename?: 'ContentfulAssetConnection'
  totalCount: Scalars['Int']
  edges: Array<ContentfulAssetEdge>
  nodes: Array<ContentfulAsset>
  pageInfo: PageInfo
  distinct: Array<Scalars['String']>
  group: Array<ContentfulAssetGroupConnection>
}

export type ContentfulAssetConnectionDistinctArgs = {
  field: ContentfulAssetFieldsEnum
}

export type ContentfulAssetConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  field: ContentfulAssetFieldsEnum
}

export type ContentfulAssetEdge = {
  __typename?: 'ContentfulAssetEdge'
  next?: Maybe<ContentfulAsset>
  node: ContentfulAsset
  previous?: Maybe<ContentfulAsset>
}

export enum ContentfulAssetFieldsEnum {
  ContentfulId = 'contentful_id',
  Id = 'id',
  SpaceId = 'spaceId',
  CreatedAt = 'createdAt',
  UpdatedAt = 'updatedAt',
  FileUrl = 'file___url',
  FileDetailsSize = 'file___details___size',
  FileDetailsImageWidth = 'file___details___image___width',
  FileDetailsImageHeight = 'file___details___image___height',
  FileFileName = 'file___fileName',
  FileContentType = 'file___contentType',
  Title = 'title',
  Description = 'description',
  NodeLocale = 'node_locale',
  SysType = 'sys___type',
  SysRevision = 'sys___revision',
  LocalFileSourceInstanceName = 'localFile___sourceInstanceName',
  LocalFileAbsolutePath = 'localFile___absolutePath',
  LocalFileRelativePath = 'localFile___relativePath',
  LocalFileExtension = 'localFile___extension',
  LocalFileSize = 'localFile___size',
  LocalFilePrettySize = 'localFile___prettySize',
  LocalFileModifiedTime = 'localFile___modifiedTime',
  LocalFileAccessTime = 'localFile___accessTime',
  LocalFileChangeTime = 'localFile___changeTime',
  LocalFileBirthTime = 'localFile___birthTime',
  LocalFileRoot = 'localFile___root',
  LocalFileDir = 'localFile___dir',
  LocalFileBase = 'localFile___base',
  LocalFileExt = 'localFile___ext',
  LocalFileName = 'localFile___name',
  LocalFileRelativeDirectory = 'localFile___relativeDirectory',
  LocalFileDev = 'localFile___dev',
  LocalFileMode = 'localFile___mode',
  LocalFileNlink = 'localFile___nlink',
  LocalFileUid = 'localFile___uid',
  LocalFileGid = 'localFile___gid',
  LocalFileRdev = 'localFile___rdev',
  LocalFileIno = 'localFile___ino',
  LocalFileAtimeMs = 'localFile___atimeMs',
  LocalFileMtimeMs = 'localFile___mtimeMs',
  LocalFileCtimeMs = 'localFile___ctimeMs',
  LocalFileAtime = 'localFile___atime',
  LocalFileMtime = 'localFile___mtime',
  LocalFileCtime = 'localFile___ctime',
  LocalFileBirthtime = 'localFile___birthtime',
  LocalFileBirthtimeMs = 'localFile___birthtimeMs',
  LocalFileBlksize = 'localFile___blksize',
  LocalFileBlocks = 'localFile___blocks',
  LocalFileUrl = 'localFile___url',
  LocalFilePublicUrl = 'localFile___publicURL',
  LocalFileChildImageSharpFixedBase64 = 'localFile___childImageSharp___fixed___base64',
  LocalFileChildImageSharpFixedTracedSvg = 'localFile___childImageSharp___fixed___tracedSVG',
  LocalFileChildImageSharpFixedAspectRatio = 'localFile___childImageSharp___fixed___aspectRatio',
  LocalFileChildImageSharpFixedWidth = 'localFile___childImageSharp___fixed___width',
  LocalFileChildImageSharpFixedHeight = 'localFile___childImageSharp___fixed___height',
  LocalFileChildImageSharpFixedSrc = 'localFile___childImageSharp___fixed___src',
  LocalFileChildImageSharpFixedSrcSet = 'localFile___childImageSharp___fixed___srcSet',
  LocalFileChildImageSharpFixedSrcWebp = 'localFile___childImageSharp___fixed___srcWebp',
  LocalFileChildImageSharpFixedSrcSetWebp = 'localFile___childImageSharp___fixed___srcSetWebp',
  LocalFileChildImageSharpFixedOriginalName = 'localFile___childImageSharp___fixed___originalName',
  LocalFileChildImageSharpResolutionsBase64 = 'localFile___childImageSharp___resolutions___base64',
  LocalFileChildImageSharpResolutionsTracedSvg = 'localFile___childImageSharp___resolutions___tracedSVG',
  LocalFileChildImageSharpResolutionsAspectRatio = 'localFile___childImageSharp___resolutions___aspectRatio',
  LocalFileChildImageSharpResolutionsWidth = 'localFile___childImageSharp___resolutions___width',
  LocalFileChildImageSharpResolutionsHeight = 'localFile___childImageSharp___resolutions___height',
  LocalFileChildImageSharpResolutionsSrc = 'localFile___childImageSharp___resolutions___src',
  LocalFileChildImageSharpResolutionsSrcSet = 'localFile___childImageSharp___resolutions___srcSet',
  LocalFileChildImageSharpResolutionsSrcWebp = 'localFile___childImageSharp___resolutions___srcWebp',
  LocalFileChildImageSharpResolutionsSrcSetWebp = 'localFile___childImageSharp___resolutions___srcSetWebp',
  LocalFileChildImageSharpResolutionsOriginalName = 'localFile___childImageSharp___resolutions___originalName',
  LocalFileChildImageSharpFluidBase64 = 'localFile___childImageSharp___fluid___base64',
  LocalFileChildImageSharpFluidTracedSvg = 'localFile___childImageSharp___fluid___tracedSVG',
  LocalFileChildImageSharpFluidAspectRatio = 'localFile___childImageSharp___fluid___aspectRatio',
  LocalFileChildImageSharpFluidSrc = 'localFile___childImageSharp___fluid___src',
  LocalFileChildImageSharpFluidSrcSet = 'localFile___childImageSharp___fluid___srcSet',
  LocalFileChildImageSharpFluidSrcWebp = 'localFile___childImageSharp___fluid___srcWebp',
  LocalFileChildImageSharpFluidSrcSetWebp = 'localFile___childImageSharp___fluid___srcSetWebp',
  LocalFileChildImageSharpFluidSizes = 'localFile___childImageSharp___fluid___sizes',
  LocalFileChildImageSharpFluidOriginalImg = 'localFile___childImageSharp___fluid___originalImg',
  LocalFileChildImageSharpFluidOriginalName = 'localFile___childImageSharp___fluid___originalName',
  LocalFileChildImageSharpFluidPresentationWidth = 'localFile___childImageSharp___fluid___presentationWidth',
  LocalFileChildImageSharpFluidPresentationHeight = 'localFile___childImageSharp___fluid___presentationHeight',
  LocalFileChildImageSharpSizesBase64 = 'localFile___childImageSharp___sizes___base64',
  LocalFileChildImageSharpSizesTracedSvg = 'localFile___childImageSharp___sizes___tracedSVG',
  LocalFileChildImageSharpSizesAspectRatio = 'localFile___childImageSharp___sizes___aspectRatio',
  LocalFileChildImageSharpSizesSrc = 'localFile___childImageSharp___sizes___src',
  LocalFileChildImageSharpSizesSrcSet = 'localFile___childImageSharp___sizes___srcSet',
  LocalFileChildImageSharpSizesSrcWebp = 'localFile___childImageSharp___sizes___srcWebp',
  LocalFileChildImageSharpSizesSrcSetWebp = 'localFile___childImageSharp___sizes___srcSetWebp',
  LocalFileChildImageSharpSizesSizes = 'localFile___childImageSharp___sizes___sizes',
  LocalFileChildImageSharpSizesOriginalImg = 'localFile___childImageSharp___sizes___originalImg',
  LocalFileChildImageSharpSizesOriginalName = 'localFile___childImageSharp___sizes___originalName',
  LocalFileChildImageSharpSizesPresentationWidth = 'localFile___childImageSharp___sizes___presentationWidth',
  LocalFileChildImageSharpSizesPresentationHeight = 'localFile___childImageSharp___sizes___presentationHeight',
  LocalFileChildImageSharpGatsbyImageData = 'localFile___childImageSharp___gatsbyImageData',
  LocalFileChildImageSharpOriginalWidth = 'localFile___childImageSharp___original___width',
  LocalFileChildImageSharpOriginalHeight = 'localFile___childImageSharp___original___height',
  LocalFileChildImageSharpOriginalSrc = 'localFile___childImageSharp___original___src',
  LocalFileChildImageSharpResizeSrc = 'localFile___childImageSharp___resize___src',
  LocalFileChildImageSharpResizeTracedSvg = 'localFile___childImageSharp___resize___tracedSVG',
  LocalFileChildImageSharpResizeWidth = 'localFile___childImageSharp___resize___width',
  LocalFileChildImageSharpResizeHeight = 'localFile___childImageSharp___resize___height',
  LocalFileChildImageSharpResizeAspectRatio = 'localFile___childImageSharp___resize___aspectRatio',
  LocalFileChildImageSharpResizeOriginalName = 'localFile___childImageSharp___resize___originalName',
  LocalFileChildImageSharpId = 'localFile___childImageSharp___id',
  LocalFileChildImageSharpParentId = 'localFile___childImageSharp___parent___id',
  LocalFileChildImageSharpParentChildren = 'localFile___childImageSharp___parent___children',
  LocalFileChildImageSharpChildren = 'localFile___childImageSharp___children',
  LocalFileChildImageSharpChildrenId = 'localFile___childImageSharp___children___id',
  LocalFileChildImageSharpChildrenChildren = 'localFile___childImageSharp___children___children',
  LocalFileChildImageSharpInternalContent = 'localFile___childImageSharp___internal___content',
  LocalFileChildImageSharpInternalContentDigest = 'localFile___childImageSharp___internal___contentDigest',
  LocalFileChildImageSharpInternalDescription = 'localFile___childImageSharp___internal___description',
  LocalFileChildImageSharpInternalFieldOwners = 'localFile___childImageSharp___internal___fieldOwners',
  LocalFileChildImageSharpInternalIgnoreType = 'localFile___childImageSharp___internal___ignoreType',
  LocalFileChildImageSharpInternalMediaType = 'localFile___childImageSharp___internal___mediaType',
  LocalFileChildImageSharpInternalOwner = 'localFile___childImageSharp___internal___owner',
  LocalFileChildImageSharpInternalType = 'localFile___childImageSharp___internal___type',
  LocalFileId = 'localFile___id',
  LocalFileParentId = 'localFile___parent___id',
  LocalFileParentParentId = 'localFile___parent___parent___id',
  LocalFileParentParentChildren = 'localFile___parent___parent___children',
  LocalFileParentChildren = 'localFile___parent___children',
  LocalFileParentChildrenId = 'localFile___parent___children___id',
  LocalFileParentChildrenChildren = 'localFile___parent___children___children',
  LocalFileParentInternalContent = 'localFile___parent___internal___content',
  LocalFileParentInternalContentDigest = 'localFile___parent___internal___contentDigest',
  LocalFileParentInternalDescription = 'localFile___parent___internal___description',
  LocalFileParentInternalFieldOwners = 'localFile___parent___internal___fieldOwners',
  LocalFileParentInternalIgnoreType = 'localFile___parent___internal___ignoreType',
  LocalFileParentInternalMediaType = 'localFile___parent___internal___mediaType',
  LocalFileParentInternalOwner = 'localFile___parent___internal___owner',
  LocalFileParentInternalType = 'localFile___parent___internal___type',
  LocalFileChildren = 'localFile___children',
  LocalFileChildrenId = 'localFile___children___id',
  LocalFileChildrenParentId = 'localFile___children___parent___id',
  LocalFileChildrenParentChildren = 'localFile___children___parent___children',
  LocalFileChildrenChildren = 'localFile___children___children',
  LocalFileChildrenChildrenId = 'localFile___children___children___id',
  LocalFileChildrenChildrenChildren = 'localFile___children___children___children',
  LocalFileChildrenInternalContent = 'localFile___children___internal___content',
  LocalFileChildrenInternalContentDigest = 'localFile___children___internal___contentDigest',
  LocalFileChildrenInternalDescription = 'localFile___children___internal___description',
  LocalFileChildrenInternalFieldOwners = 'localFile___children___internal___fieldOwners',
  LocalFileChildrenInternalIgnoreType = 'localFile___children___internal___ignoreType',
  LocalFileChildrenInternalMediaType = 'localFile___children___internal___mediaType',
  LocalFileChildrenInternalOwner = 'localFile___children___internal___owner',
  LocalFileChildrenInternalType = 'localFile___children___internal___type',
  LocalFileInternalContent = 'localFile___internal___content',
  LocalFileInternalContentDigest = 'localFile___internal___contentDigest',
  LocalFileInternalDescription = 'localFile___internal___description',
  LocalFileInternalFieldOwners = 'localFile___internal___fieldOwners',
  LocalFileInternalIgnoreType = 'localFile___internal___ignoreType',
  LocalFileInternalMediaType = 'localFile___internal___mediaType',
  LocalFileInternalOwner = 'localFile___internal___owner',
  LocalFileInternalType = 'localFile___internal___type',
  FixedBase64 = 'fixed___base64',
  FixedTracedSvg = 'fixed___tracedSVG',
  FixedAspectRatio = 'fixed___aspectRatio',
  FixedWidth = 'fixed___width',
  FixedHeight = 'fixed___height',
  FixedSrc = 'fixed___src',
  FixedSrcSet = 'fixed___srcSet',
  FixedSrcWebp = 'fixed___srcWebp',
  FixedSrcSetWebp = 'fixed___srcSetWebp',
  ResolutionsBase64 = 'resolutions___base64',
  ResolutionsTracedSvg = 'resolutions___tracedSVG',
  ResolutionsAspectRatio = 'resolutions___aspectRatio',
  ResolutionsWidth = 'resolutions___width',
  ResolutionsHeight = 'resolutions___height',
  ResolutionsSrc = 'resolutions___src',
  ResolutionsSrcSet = 'resolutions___srcSet',
  ResolutionsSrcWebp = 'resolutions___srcWebp',
  ResolutionsSrcSetWebp = 'resolutions___srcSetWebp',
  FluidBase64 = 'fluid___base64',
  FluidTracedSvg = 'fluid___tracedSVG',
  FluidAspectRatio = 'fluid___aspectRatio',
  FluidSrc = 'fluid___src',
  FluidSrcSet = 'fluid___srcSet',
  FluidSrcWebp = 'fluid___srcWebp',
  FluidSrcSetWebp = 'fluid___srcSetWebp',
  FluidSizes = 'fluid___sizes',
  SizesBase64 = 'sizes___base64',
  SizesTracedSvg = 'sizes___tracedSVG',
  SizesAspectRatio = 'sizes___aspectRatio',
  SizesSrc = 'sizes___src',
  SizesSrcSet = 'sizes___srcSet',
  SizesSrcWebp = 'sizes___srcWebp',
  SizesSrcSetWebp = 'sizes___srcSetWebp',
  SizesSizes = 'sizes___sizes',
  ResizeBase64 = 'resize___base64',
  ResizeTracedSvg = 'resize___tracedSVG',
  ResizeSrc = 'resize___src',
  ResizeWidth = 'resize___width',
  ResizeHeight = 'resize___height',
  ResizeAspectRatio = 'resize___aspectRatio',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
}

export type ContentfulAssetFile = {
  __typename?: 'ContentfulAssetFile'
  url?: Maybe<Scalars['String']>
  details?: Maybe<ContentfulAssetFileDetails>
  fileName?: Maybe<Scalars['String']>
  contentType?: Maybe<Scalars['String']>
}

export type ContentfulAssetFileDetails = {
  __typename?: 'ContentfulAssetFileDetails'
  size?: Maybe<Scalars['Int']>
  image?: Maybe<ContentfulAssetFileDetailsImage>
}

export type ContentfulAssetFileDetailsFilterInput = {
  size?: Maybe<IntQueryOperatorInput>
  image?: Maybe<ContentfulAssetFileDetailsImageFilterInput>
}

export type ContentfulAssetFileDetailsImage = {
  __typename?: 'ContentfulAssetFileDetailsImage'
  width?: Maybe<Scalars['Int']>
  height?: Maybe<Scalars['Int']>
}

export type ContentfulAssetFileDetailsImageFilterInput = {
  width?: Maybe<IntQueryOperatorInput>
  height?: Maybe<IntQueryOperatorInput>
}

export type ContentfulAssetFileFilterInput = {
  url?: Maybe<StringQueryOperatorInput>
  details?: Maybe<ContentfulAssetFileDetailsFilterInput>
  fileName?: Maybe<StringQueryOperatorInput>
  contentType?: Maybe<StringQueryOperatorInput>
}

export type ContentfulAssetFilterInput = {
  contentful_id?: Maybe<StringQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  spaceId?: Maybe<StringQueryOperatorInput>
  createdAt?: Maybe<DateQueryOperatorInput>
  updatedAt?: Maybe<DateQueryOperatorInput>
  file?: Maybe<ContentfulAssetFileFilterInput>
  title?: Maybe<StringQueryOperatorInput>
  description?: Maybe<StringQueryOperatorInput>
  node_locale?: Maybe<StringQueryOperatorInput>
  sys?: Maybe<ContentfulAssetSysFilterInput>
  localFile?: Maybe<FileFilterInput>
  fixed?: Maybe<ContentfulFixedFilterInput>
  resolutions?: Maybe<ContentfulResolutionsFilterInput>
  fluid?: Maybe<ContentfulFluidFilterInput>
  sizes?: Maybe<ContentfulSizesFilterInput>
  resize?: Maybe<ContentfulResizeFilterInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type ContentfulAssetFilterListInput = {
  elemMatch?: Maybe<ContentfulAssetFilterInput>
}

export type ContentfulAssetGroupConnection = {
  __typename?: 'ContentfulAssetGroupConnection'
  totalCount: Scalars['Int']
  edges: Array<ContentfulAssetEdge>
  nodes: Array<ContentfulAsset>
  pageInfo: PageInfo
  field: Scalars['String']
  fieldValue?: Maybe<Scalars['String']>
}

export type ContentfulAssetSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulAssetFieldsEnum>>>
  order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type ContentfulAssetSys = {
  __typename?: 'ContentfulAssetSys'
  type?: Maybe<Scalars['String']>
  revision?: Maybe<Scalars['Int']>
}

export type ContentfulAssetSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>
  revision?: Maybe<IntQueryOperatorInput>
}

export type ContentfulContactInfo = ContentfulReference &
  ContentfulEntry &
  Node & {
    __typename?: 'ContentfulContactInfo'
    contentful_id: Scalars['String']
    id: Scalars['ID']
    node_locale: Scalars['String']
    facebookPage?: Maybe<Scalars['String']>
    instagramPage?: Maybe<Scalars['String']>
    email?: Maybe<Scalars['String']>
    phoneNumber?: Maybe<Scalars['String']>
    spaceId?: Maybe<Scalars['String']>
    createdAt?: Maybe<Scalars['Date']>
    updatedAt?: Maybe<Scalars['Date']>
    sys?: Maybe<ContentfulContactInfoSys>
    parent?: Maybe<Node>
    children: Array<Node>
    internal: Internal
  }

export type ContentfulContactInfoCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type ContentfulContactInfoUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type ContentfulContactInfoConnection = {
  __typename?: 'ContentfulContactInfoConnection'
  totalCount: Scalars['Int']
  edges: Array<ContentfulContactInfoEdge>
  nodes: Array<ContentfulContactInfo>
  pageInfo: PageInfo
  distinct: Array<Scalars['String']>
  group: Array<ContentfulContactInfoGroupConnection>
}

export type ContentfulContactInfoConnectionDistinctArgs = {
  field: ContentfulContactInfoFieldsEnum
}

export type ContentfulContactInfoConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  field: ContentfulContactInfoFieldsEnum
}

export type ContentfulContactInfoEdge = {
  __typename?: 'ContentfulContactInfoEdge'
  next?: Maybe<ContentfulContactInfo>
  node: ContentfulContactInfo
  previous?: Maybe<ContentfulContactInfo>
}

export enum ContentfulContactInfoFieldsEnum {
  ContentfulId = 'contentful_id',
  Id = 'id',
  NodeLocale = 'node_locale',
  FacebookPage = 'facebookPage',
  InstagramPage = 'instagramPage',
  Email = 'email',
  PhoneNumber = 'phoneNumber',
  SpaceId = 'spaceId',
  CreatedAt = 'createdAt',
  UpdatedAt = 'updatedAt',
  SysType = 'sys___type',
  SysRevision = 'sys___revision',
  SysContentTypeSysType = 'sys___contentType___sys___type',
  SysContentTypeSysLinkType = 'sys___contentType___sys___linkType',
  SysContentTypeSysId = 'sys___contentType___sys___id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
}

export type ContentfulContactInfoFilterInput = {
  contentful_id?: Maybe<StringQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  node_locale?: Maybe<StringQueryOperatorInput>
  facebookPage?: Maybe<StringQueryOperatorInput>
  instagramPage?: Maybe<StringQueryOperatorInput>
  email?: Maybe<StringQueryOperatorInput>
  phoneNumber?: Maybe<StringQueryOperatorInput>
  spaceId?: Maybe<StringQueryOperatorInput>
  createdAt?: Maybe<DateQueryOperatorInput>
  updatedAt?: Maybe<DateQueryOperatorInput>
  sys?: Maybe<ContentfulContactInfoSysFilterInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type ContentfulContactInfoGroupConnection = {
  __typename?: 'ContentfulContactInfoGroupConnection'
  totalCount: Scalars['Int']
  edges: Array<ContentfulContactInfoEdge>
  nodes: Array<ContentfulContactInfo>
  pageInfo: PageInfo
  field: Scalars['String']
  fieldValue?: Maybe<Scalars['String']>
}

export type ContentfulContactInfoSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulContactInfoFieldsEnum>>>
  order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type ContentfulContactInfoSys = {
  __typename?: 'ContentfulContactInfoSys'
  type?: Maybe<Scalars['String']>
  revision?: Maybe<Scalars['Int']>
  contentType?: Maybe<ContentfulContactInfoSysContentType>
}

export type ContentfulContactInfoSysContentType = {
  __typename?: 'ContentfulContactInfoSysContentType'
  sys?: Maybe<ContentfulContactInfoSysContentTypeSys>
}

export type ContentfulContactInfoSysContentTypeFilterInput = {
  sys?: Maybe<ContentfulContactInfoSysContentTypeSysFilterInput>
}

export type ContentfulContactInfoSysContentTypeSys = {
  __typename?: 'ContentfulContactInfoSysContentTypeSys'
  type?: Maybe<Scalars['String']>
  linkType?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['String']>
}

export type ContentfulContactInfoSysContentTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>
  linkType?: Maybe<StringQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
}

export type ContentfulContactInfoSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>
  revision?: Maybe<IntQueryOperatorInput>
  contentType?: Maybe<ContentfulContactInfoSysContentTypeFilterInput>
}

export type ContentfulContentType = Node & {
  __typename?: 'ContentfulContentType'
  id: Scalars['ID']
  parent?: Maybe<Node>
  children: Array<Node>
  internal: Internal
  name?: Maybe<Scalars['String']>
  displayField?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
  sys?: Maybe<ContentfulContentTypeSys>
}

export type ContentfulContentTypeConnection = {
  __typename?: 'ContentfulContentTypeConnection'
  totalCount: Scalars['Int']
  edges: Array<ContentfulContentTypeEdge>
  nodes: Array<ContentfulContentType>
  pageInfo: PageInfo
  distinct: Array<Scalars['String']>
  group: Array<ContentfulContentTypeGroupConnection>
}

export type ContentfulContentTypeConnectionDistinctArgs = {
  field: ContentfulContentTypeFieldsEnum
}

export type ContentfulContentTypeConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  field: ContentfulContentTypeFieldsEnum
}

export type ContentfulContentTypeEdge = {
  __typename?: 'ContentfulContentTypeEdge'
  next?: Maybe<ContentfulContentType>
  node: ContentfulContentType
  previous?: Maybe<ContentfulContentType>
}

export enum ContentfulContentTypeFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  Name = 'name',
  DisplayField = 'displayField',
  Description = 'description',
  SysType = 'sys___type',
}

export type ContentfulContentTypeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
  name?: Maybe<StringQueryOperatorInput>
  displayField?: Maybe<StringQueryOperatorInput>
  description?: Maybe<StringQueryOperatorInput>
  sys?: Maybe<ContentfulContentTypeSysFilterInput>
}

export type ContentfulContentTypeGroupConnection = {
  __typename?: 'ContentfulContentTypeGroupConnection'
  totalCount: Scalars['Int']
  edges: Array<ContentfulContentTypeEdge>
  nodes: Array<ContentfulContentType>
  pageInfo: PageInfo
  field: Scalars['String']
  fieldValue?: Maybe<Scalars['String']>
}

export type ContentfulContentTypeSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulContentTypeFieldsEnum>>>
  order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type ContentfulContentTypeSys = {
  __typename?: 'ContentfulContentTypeSys'
  type?: Maybe<Scalars['String']>
}

export type ContentfulContentTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>
}

export type ContentfulEntry = {
  contentful_id: Scalars['String']
  id: Scalars['ID']
  node_locale: Scalars['String']
}

export type ContentfulEntryConnection = {
  __typename?: 'ContentfulEntryConnection'
  totalCount: Scalars['Int']
  edges: Array<ContentfulEntryEdge>
  nodes: Array<ContentfulEntry>
  pageInfo: PageInfo
  distinct: Array<Scalars['String']>
  group: Array<ContentfulEntryGroupConnection>
}

export type ContentfulEntryConnectionDistinctArgs = {
  field: ContentfulEntryFieldsEnum
}

export type ContentfulEntryConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  field: ContentfulEntryFieldsEnum
}

export type ContentfulEntryEdge = {
  __typename?: 'ContentfulEntryEdge'
  next?: Maybe<ContentfulEntry>
  node: ContentfulEntry
  previous?: Maybe<ContentfulEntry>
}

export enum ContentfulEntryFieldsEnum {
  ContentfulId = 'contentful_id',
  Id = 'id',
  NodeLocale = 'node_locale',
}

export type ContentfulEntryFilterInput = {
  contentful_id?: Maybe<StringQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  node_locale?: Maybe<StringQueryOperatorInput>
}

export type ContentfulEntryGroupConnection = {
  __typename?: 'ContentfulEntryGroupConnection'
  totalCount: Scalars['Int']
  edges: Array<ContentfulEntryEdge>
  nodes: Array<ContentfulEntry>
  pageInfo: PageInfo
  field: Scalars['String']
  fieldValue?: Maybe<Scalars['String']>
}

export type ContentfulEntrySortInput = {
  fields?: Maybe<Array<Maybe<ContentfulEntryFieldsEnum>>>
  order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type ContentfulFixed = {
  __typename?: 'ContentfulFixed'
  base64?: Maybe<Scalars['String']>
  tracedSVG?: Maybe<Scalars['String']>
  aspectRatio?: Maybe<Scalars['Float']>
  width: Scalars['Float']
  height: Scalars['Float']
  src: Scalars['String']
  srcSet: Scalars['String']
  srcWebp?: Maybe<Scalars['String']>
  srcSetWebp?: Maybe<Scalars['String']>
}

export type ContentfulFixedFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>
  tracedSVG?: Maybe<StringQueryOperatorInput>
  aspectRatio?: Maybe<FloatQueryOperatorInput>
  width?: Maybe<FloatQueryOperatorInput>
  height?: Maybe<FloatQueryOperatorInput>
  src?: Maybe<StringQueryOperatorInput>
  srcSet?: Maybe<StringQueryOperatorInput>
  srcWebp?: Maybe<StringQueryOperatorInput>
  srcSetWebp?: Maybe<StringQueryOperatorInput>
}

export type ContentfulFluid = {
  __typename?: 'ContentfulFluid'
  base64?: Maybe<Scalars['String']>
  tracedSVG?: Maybe<Scalars['String']>
  aspectRatio: Scalars['Float']
  src: Scalars['String']
  srcSet: Scalars['String']
  srcWebp?: Maybe<Scalars['String']>
  srcSetWebp?: Maybe<Scalars['String']>
  sizes: Scalars['String']
}

export type ContentfulFluidFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>
  tracedSVG?: Maybe<StringQueryOperatorInput>
  aspectRatio?: Maybe<FloatQueryOperatorInput>
  src?: Maybe<StringQueryOperatorInput>
  srcSet?: Maybe<StringQueryOperatorInput>
  srcWebp?: Maybe<StringQueryOperatorInput>
  srcSetWebp?: Maybe<StringQueryOperatorInput>
  sizes?: Maybe<StringQueryOperatorInput>
}

export type ContentfulHomepageAboutMe = ContentfulReference &
  ContentfulEntry &
  Node & {
    __typename?: 'ContentfulHomepageAboutMe'
    contentful_id: Scalars['String']
    id: Scalars['ID']
    node_locale: Scalars['String']
    text?: Maybe<ContentfulHomepageAboutMeText>
    image?: Maybe<ContentfulAsset>
    spaceId?: Maybe<Scalars['String']>
    createdAt?: Maybe<Scalars['Date']>
    updatedAt?: Maybe<Scalars['Date']>
    sys?: Maybe<ContentfulHomepageAboutMeSys>
    parent?: Maybe<Node>
    children: Array<Node>
    internal: Internal
  }

export type ContentfulHomepageAboutMeCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type ContentfulHomepageAboutMeUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type ContentfulHomepageAboutMeConnection = {
  __typename?: 'ContentfulHomepageAboutMeConnection'
  totalCount: Scalars['Int']
  edges: Array<ContentfulHomepageAboutMeEdge>
  nodes: Array<ContentfulHomepageAboutMe>
  pageInfo: PageInfo
  distinct: Array<Scalars['String']>
  group: Array<ContentfulHomepageAboutMeGroupConnection>
}

export type ContentfulHomepageAboutMeConnectionDistinctArgs = {
  field: ContentfulHomepageAboutMeFieldsEnum
}

export type ContentfulHomepageAboutMeConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  field: ContentfulHomepageAboutMeFieldsEnum
}

export type ContentfulHomepageAboutMeEdge = {
  __typename?: 'ContentfulHomepageAboutMeEdge'
  next?: Maybe<ContentfulHomepageAboutMe>
  node: ContentfulHomepageAboutMe
  previous?: Maybe<ContentfulHomepageAboutMe>
}

export enum ContentfulHomepageAboutMeFieldsEnum {
  ContentfulId = 'contentful_id',
  Id = 'id',
  NodeLocale = 'node_locale',
  TextRaw = 'text___raw',
  ImageContentfulId = 'image___contentful_id',
  ImageId = 'image___id',
  ImageSpaceId = 'image___spaceId',
  ImageCreatedAt = 'image___createdAt',
  ImageUpdatedAt = 'image___updatedAt',
  ImageFileUrl = 'image___file___url',
  ImageFileDetailsSize = 'image___file___details___size',
  ImageFileFileName = 'image___file___fileName',
  ImageFileContentType = 'image___file___contentType',
  ImageTitle = 'image___title',
  ImageDescription = 'image___description',
  ImageNodeLocale = 'image___node_locale',
  ImageSysType = 'image___sys___type',
  ImageSysRevision = 'image___sys___revision',
  ImageLocalFileSourceInstanceName = 'image___localFile___sourceInstanceName',
  ImageLocalFileAbsolutePath = 'image___localFile___absolutePath',
  ImageLocalFileRelativePath = 'image___localFile___relativePath',
  ImageLocalFileExtension = 'image___localFile___extension',
  ImageLocalFileSize = 'image___localFile___size',
  ImageLocalFilePrettySize = 'image___localFile___prettySize',
  ImageLocalFileModifiedTime = 'image___localFile___modifiedTime',
  ImageLocalFileAccessTime = 'image___localFile___accessTime',
  ImageLocalFileChangeTime = 'image___localFile___changeTime',
  ImageLocalFileBirthTime = 'image___localFile___birthTime',
  ImageLocalFileRoot = 'image___localFile___root',
  ImageLocalFileDir = 'image___localFile___dir',
  ImageLocalFileBase = 'image___localFile___base',
  ImageLocalFileExt = 'image___localFile___ext',
  ImageLocalFileName = 'image___localFile___name',
  ImageLocalFileRelativeDirectory = 'image___localFile___relativeDirectory',
  ImageLocalFileDev = 'image___localFile___dev',
  ImageLocalFileMode = 'image___localFile___mode',
  ImageLocalFileNlink = 'image___localFile___nlink',
  ImageLocalFileUid = 'image___localFile___uid',
  ImageLocalFileGid = 'image___localFile___gid',
  ImageLocalFileRdev = 'image___localFile___rdev',
  ImageLocalFileIno = 'image___localFile___ino',
  ImageLocalFileAtimeMs = 'image___localFile___atimeMs',
  ImageLocalFileMtimeMs = 'image___localFile___mtimeMs',
  ImageLocalFileCtimeMs = 'image___localFile___ctimeMs',
  ImageLocalFileAtime = 'image___localFile___atime',
  ImageLocalFileMtime = 'image___localFile___mtime',
  ImageLocalFileCtime = 'image___localFile___ctime',
  ImageLocalFileBirthtime = 'image___localFile___birthtime',
  ImageLocalFileBirthtimeMs = 'image___localFile___birthtimeMs',
  ImageLocalFileBlksize = 'image___localFile___blksize',
  ImageLocalFileBlocks = 'image___localFile___blocks',
  ImageLocalFileUrl = 'image___localFile___url',
  ImageLocalFilePublicUrl = 'image___localFile___publicURL',
  ImageLocalFileChildImageSharpGatsbyImageData = 'image___localFile___childImageSharp___gatsbyImageData',
  ImageLocalFileChildImageSharpId = 'image___localFile___childImageSharp___id',
  ImageLocalFileChildImageSharpChildren = 'image___localFile___childImageSharp___children',
  ImageLocalFileId = 'image___localFile___id',
  ImageLocalFileParentId = 'image___localFile___parent___id',
  ImageLocalFileParentChildren = 'image___localFile___parent___children',
  ImageLocalFileChildren = 'image___localFile___children',
  ImageLocalFileChildrenId = 'image___localFile___children___id',
  ImageLocalFileChildrenChildren = 'image___localFile___children___children',
  ImageLocalFileInternalContent = 'image___localFile___internal___content',
  ImageLocalFileInternalContentDigest = 'image___localFile___internal___contentDigest',
  ImageLocalFileInternalDescription = 'image___localFile___internal___description',
  ImageLocalFileInternalFieldOwners = 'image___localFile___internal___fieldOwners',
  ImageLocalFileInternalIgnoreType = 'image___localFile___internal___ignoreType',
  ImageLocalFileInternalMediaType = 'image___localFile___internal___mediaType',
  ImageLocalFileInternalOwner = 'image___localFile___internal___owner',
  ImageLocalFileInternalType = 'image___localFile___internal___type',
  ImageFixedBase64 = 'image___fixed___base64',
  ImageFixedTracedSvg = 'image___fixed___tracedSVG',
  ImageFixedAspectRatio = 'image___fixed___aspectRatio',
  ImageFixedWidth = 'image___fixed___width',
  ImageFixedHeight = 'image___fixed___height',
  ImageFixedSrc = 'image___fixed___src',
  ImageFixedSrcSet = 'image___fixed___srcSet',
  ImageFixedSrcWebp = 'image___fixed___srcWebp',
  ImageFixedSrcSetWebp = 'image___fixed___srcSetWebp',
  ImageResolutionsBase64 = 'image___resolutions___base64',
  ImageResolutionsTracedSvg = 'image___resolutions___tracedSVG',
  ImageResolutionsAspectRatio = 'image___resolutions___aspectRatio',
  ImageResolutionsWidth = 'image___resolutions___width',
  ImageResolutionsHeight = 'image___resolutions___height',
  ImageResolutionsSrc = 'image___resolutions___src',
  ImageResolutionsSrcSet = 'image___resolutions___srcSet',
  ImageResolutionsSrcWebp = 'image___resolutions___srcWebp',
  ImageResolutionsSrcSetWebp = 'image___resolutions___srcSetWebp',
  ImageFluidBase64 = 'image___fluid___base64',
  ImageFluidTracedSvg = 'image___fluid___tracedSVG',
  ImageFluidAspectRatio = 'image___fluid___aspectRatio',
  ImageFluidSrc = 'image___fluid___src',
  ImageFluidSrcSet = 'image___fluid___srcSet',
  ImageFluidSrcWebp = 'image___fluid___srcWebp',
  ImageFluidSrcSetWebp = 'image___fluid___srcSetWebp',
  ImageFluidSizes = 'image___fluid___sizes',
  ImageSizesBase64 = 'image___sizes___base64',
  ImageSizesTracedSvg = 'image___sizes___tracedSVG',
  ImageSizesAspectRatio = 'image___sizes___aspectRatio',
  ImageSizesSrc = 'image___sizes___src',
  ImageSizesSrcSet = 'image___sizes___srcSet',
  ImageSizesSrcWebp = 'image___sizes___srcWebp',
  ImageSizesSrcSetWebp = 'image___sizes___srcSetWebp',
  ImageSizesSizes = 'image___sizes___sizes',
  ImageResizeBase64 = 'image___resize___base64',
  ImageResizeTracedSvg = 'image___resize___tracedSVG',
  ImageResizeSrc = 'image___resize___src',
  ImageResizeWidth = 'image___resize___width',
  ImageResizeHeight = 'image___resize___height',
  ImageResizeAspectRatio = 'image___resize___aspectRatio',
  ImageParentId = 'image___parent___id',
  ImageParentParentId = 'image___parent___parent___id',
  ImageParentParentChildren = 'image___parent___parent___children',
  ImageParentChildren = 'image___parent___children',
  ImageParentChildrenId = 'image___parent___children___id',
  ImageParentChildrenChildren = 'image___parent___children___children',
  ImageParentInternalContent = 'image___parent___internal___content',
  ImageParentInternalContentDigest = 'image___parent___internal___contentDigest',
  ImageParentInternalDescription = 'image___parent___internal___description',
  ImageParentInternalFieldOwners = 'image___parent___internal___fieldOwners',
  ImageParentInternalIgnoreType = 'image___parent___internal___ignoreType',
  ImageParentInternalMediaType = 'image___parent___internal___mediaType',
  ImageParentInternalOwner = 'image___parent___internal___owner',
  ImageParentInternalType = 'image___parent___internal___type',
  ImageChildren = 'image___children',
  ImageChildrenId = 'image___children___id',
  ImageChildrenParentId = 'image___children___parent___id',
  ImageChildrenParentChildren = 'image___children___parent___children',
  ImageChildrenChildren = 'image___children___children',
  ImageChildrenChildrenId = 'image___children___children___id',
  ImageChildrenChildrenChildren = 'image___children___children___children',
  ImageChildrenInternalContent = 'image___children___internal___content',
  ImageChildrenInternalContentDigest = 'image___children___internal___contentDigest',
  ImageChildrenInternalDescription = 'image___children___internal___description',
  ImageChildrenInternalFieldOwners = 'image___children___internal___fieldOwners',
  ImageChildrenInternalIgnoreType = 'image___children___internal___ignoreType',
  ImageChildrenInternalMediaType = 'image___children___internal___mediaType',
  ImageChildrenInternalOwner = 'image___children___internal___owner',
  ImageChildrenInternalType = 'image___children___internal___type',
  ImageInternalContent = 'image___internal___content',
  ImageInternalContentDigest = 'image___internal___contentDigest',
  ImageInternalDescription = 'image___internal___description',
  ImageInternalFieldOwners = 'image___internal___fieldOwners',
  ImageInternalIgnoreType = 'image___internal___ignoreType',
  ImageInternalMediaType = 'image___internal___mediaType',
  ImageInternalOwner = 'image___internal___owner',
  ImageInternalType = 'image___internal___type',
  SpaceId = 'spaceId',
  CreatedAt = 'createdAt',
  UpdatedAt = 'updatedAt',
  SysType = 'sys___type',
  SysRevision = 'sys___revision',
  SysContentTypeSysType = 'sys___contentType___sys___type',
  SysContentTypeSysLinkType = 'sys___contentType___sys___linkType',
  SysContentTypeSysId = 'sys___contentType___sys___id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
}

export type ContentfulHomepageAboutMeFilterInput = {
  contentful_id?: Maybe<StringQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  node_locale?: Maybe<StringQueryOperatorInput>
  text?: Maybe<ContentfulHomepageAboutMeTextFilterInput>
  image?: Maybe<ContentfulAssetFilterInput>
  spaceId?: Maybe<StringQueryOperatorInput>
  createdAt?: Maybe<DateQueryOperatorInput>
  updatedAt?: Maybe<DateQueryOperatorInput>
  sys?: Maybe<ContentfulHomepageAboutMeSysFilterInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type ContentfulHomepageAboutMeGroupConnection = {
  __typename?: 'ContentfulHomepageAboutMeGroupConnection'
  totalCount: Scalars['Int']
  edges: Array<ContentfulHomepageAboutMeEdge>
  nodes: Array<ContentfulHomepageAboutMe>
  pageInfo: PageInfo
  field: Scalars['String']
  fieldValue?: Maybe<Scalars['String']>
}

export type ContentfulHomepageAboutMeSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulHomepageAboutMeFieldsEnum>>>
  order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type ContentfulHomepageAboutMeSys = {
  __typename?: 'ContentfulHomepageAboutMeSys'
  type?: Maybe<Scalars['String']>
  revision?: Maybe<Scalars['Int']>
  contentType?: Maybe<ContentfulHomepageAboutMeSysContentType>
}

export type ContentfulHomepageAboutMeSysContentType = {
  __typename?: 'ContentfulHomepageAboutMeSysContentType'
  sys?: Maybe<ContentfulHomepageAboutMeSysContentTypeSys>
}

export type ContentfulHomepageAboutMeSysContentTypeFilterInput = {
  sys?: Maybe<ContentfulHomepageAboutMeSysContentTypeSysFilterInput>
}

export type ContentfulHomepageAboutMeSysContentTypeSys = {
  __typename?: 'ContentfulHomepageAboutMeSysContentTypeSys'
  type?: Maybe<Scalars['String']>
  linkType?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['String']>
}

export type ContentfulHomepageAboutMeSysContentTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>
  linkType?: Maybe<StringQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
}

export type ContentfulHomepageAboutMeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>
  revision?: Maybe<IntQueryOperatorInput>
  contentType?: Maybe<ContentfulHomepageAboutMeSysContentTypeFilterInput>
}

export type ContentfulHomepageAboutMeText = {
  __typename?: 'ContentfulHomepageAboutMeText'
  raw?: Maybe<Scalars['String']>
}

export type ContentfulHomepageAboutMeTextFilterInput = {
  raw?: Maybe<StringQueryOperatorInput>
}

export type ContentfulHomepageFeatured = ContentfulReference &
  ContentfulEntry &
  Node & {
    __typename?: 'ContentfulHomepageFeatured'
    contentful_id: Scalars['String']
    id: Scalars['ID']
    node_locale: Scalars['String']
    themes?: Maybe<Array<Maybe<ContentfulTheme>>>
    projects?: Maybe<Array<Maybe<ContentfulProject>>>
    spaceId?: Maybe<Scalars['String']>
    createdAt?: Maybe<Scalars['Date']>
    updatedAt?: Maybe<Scalars['Date']>
    sys?: Maybe<ContentfulHomepageFeaturedSys>
    parent?: Maybe<Node>
    children: Array<Node>
    internal: Internal
  }

export type ContentfulHomepageFeaturedCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type ContentfulHomepageFeaturedUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type ContentfulHomepageFeaturedConnection = {
  __typename?: 'ContentfulHomepageFeaturedConnection'
  totalCount: Scalars['Int']
  edges: Array<ContentfulHomepageFeaturedEdge>
  nodes: Array<ContentfulHomepageFeatured>
  pageInfo: PageInfo
  distinct: Array<Scalars['String']>
  group: Array<ContentfulHomepageFeaturedGroupConnection>
}

export type ContentfulHomepageFeaturedConnectionDistinctArgs = {
  field: ContentfulHomepageFeaturedFieldsEnum
}

export type ContentfulHomepageFeaturedConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  field: ContentfulHomepageFeaturedFieldsEnum
}

export type ContentfulHomepageFeaturedEdge = {
  __typename?: 'ContentfulHomepageFeaturedEdge'
  next?: Maybe<ContentfulHomepageFeatured>
  node: ContentfulHomepageFeatured
  previous?: Maybe<ContentfulHomepageFeatured>
}

export enum ContentfulHomepageFeaturedFieldsEnum {
  ContentfulId = 'contentful_id',
  Id = 'id',
  NodeLocale = 'node_locale',
  Themes = 'themes',
  ThemesContentfulId = 'themes___contentful_id',
  ThemesId = 'themes___id',
  ThemesNodeLocale = 'themes___node_locale',
  ThemesTitle = 'themes___title',
  ThemesSlug = 'themes___slug',
  ThemesCoverImageContentfulId = 'themes___coverImage___contentful_id',
  ThemesCoverImageId = 'themes___coverImage___id',
  ThemesCoverImageSpaceId = 'themes___coverImage___spaceId',
  ThemesCoverImageCreatedAt = 'themes___coverImage___createdAt',
  ThemesCoverImageUpdatedAt = 'themes___coverImage___updatedAt',
  ThemesCoverImageFileUrl = 'themes___coverImage___file___url',
  ThemesCoverImageFileFileName = 'themes___coverImage___file___fileName',
  ThemesCoverImageFileContentType = 'themes___coverImage___file___contentType',
  ThemesCoverImageTitle = 'themes___coverImage___title',
  ThemesCoverImageDescription = 'themes___coverImage___description',
  ThemesCoverImageNodeLocale = 'themes___coverImage___node_locale',
  ThemesCoverImageSysType = 'themes___coverImage___sys___type',
  ThemesCoverImageSysRevision = 'themes___coverImage___sys___revision',
  ThemesCoverImageLocalFileSourceInstanceName = 'themes___coverImage___localFile___sourceInstanceName',
  ThemesCoverImageLocalFileAbsolutePath = 'themes___coverImage___localFile___absolutePath',
  ThemesCoverImageLocalFileRelativePath = 'themes___coverImage___localFile___relativePath',
  ThemesCoverImageLocalFileExtension = 'themes___coverImage___localFile___extension',
  ThemesCoverImageLocalFileSize = 'themes___coverImage___localFile___size',
  ThemesCoverImageLocalFilePrettySize = 'themes___coverImage___localFile___prettySize',
  ThemesCoverImageLocalFileModifiedTime = 'themes___coverImage___localFile___modifiedTime',
  ThemesCoverImageLocalFileAccessTime = 'themes___coverImage___localFile___accessTime',
  ThemesCoverImageLocalFileChangeTime = 'themes___coverImage___localFile___changeTime',
  ThemesCoverImageLocalFileBirthTime = 'themes___coverImage___localFile___birthTime',
  ThemesCoverImageLocalFileRoot = 'themes___coverImage___localFile___root',
  ThemesCoverImageLocalFileDir = 'themes___coverImage___localFile___dir',
  ThemesCoverImageLocalFileBase = 'themes___coverImage___localFile___base',
  ThemesCoverImageLocalFileExt = 'themes___coverImage___localFile___ext',
  ThemesCoverImageLocalFileName = 'themes___coverImage___localFile___name',
  ThemesCoverImageLocalFileRelativeDirectory = 'themes___coverImage___localFile___relativeDirectory',
  ThemesCoverImageLocalFileDev = 'themes___coverImage___localFile___dev',
  ThemesCoverImageLocalFileMode = 'themes___coverImage___localFile___mode',
  ThemesCoverImageLocalFileNlink = 'themes___coverImage___localFile___nlink',
  ThemesCoverImageLocalFileUid = 'themes___coverImage___localFile___uid',
  ThemesCoverImageLocalFileGid = 'themes___coverImage___localFile___gid',
  ThemesCoverImageLocalFileRdev = 'themes___coverImage___localFile___rdev',
  ThemesCoverImageLocalFileIno = 'themes___coverImage___localFile___ino',
  ThemesCoverImageLocalFileAtimeMs = 'themes___coverImage___localFile___atimeMs',
  ThemesCoverImageLocalFileMtimeMs = 'themes___coverImage___localFile___mtimeMs',
  ThemesCoverImageLocalFileCtimeMs = 'themes___coverImage___localFile___ctimeMs',
  ThemesCoverImageLocalFileAtime = 'themes___coverImage___localFile___atime',
  ThemesCoverImageLocalFileMtime = 'themes___coverImage___localFile___mtime',
  ThemesCoverImageLocalFileCtime = 'themes___coverImage___localFile___ctime',
  ThemesCoverImageLocalFileBirthtime = 'themes___coverImage___localFile___birthtime',
  ThemesCoverImageLocalFileBirthtimeMs = 'themes___coverImage___localFile___birthtimeMs',
  ThemesCoverImageLocalFileBlksize = 'themes___coverImage___localFile___blksize',
  ThemesCoverImageLocalFileBlocks = 'themes___coverImage___localFile___blocks',
  ThemesCoverImageLocalFileUrl = 'themes___coverImage___localFile___url',
  ThemesCoverImageLocalFilePublicUrl = 'themes___coverImage___localFile___publicURL',
  ThemesCoverImageLocalFileId = 'themes___coverImage___localFile___id',
  ThemesCoverImageLocalFileChildren = 'themes___coverImage___localFile___children',
  ThemesCoverImageFixedBase64 = 'themes___coverImage___fixed___base64',
  ThemesCoverImageFixedTracedSvg = 'themes___coverImage___fixed___tracedSVG',
  ThemesCoverImageFixedAspectRatio = 'themes___coverImage___fixed___aspectRatio',
  ThemesCoverImageFixedWidth = 'themes___coverImage___fixed___width',
  ThemesCoverImageFixedHeight = 'themes___coverImage___fixed___height',
  ThemesCoverImageFixedSrc = 'themes___coverImage___fixed___src',
  ThemesCoverImageFixedSrcSet = 'themes___coverImage___fixed___srcSet',
  ThemesCoverImageFixedSrcWebp = 'themes___coverImage___fixed___srcWebp',
  ThemesCoverImageFixedSrcSetWebp = 'themes___coverImage___fixed___srcSetWebp',
  ThemesCoverImageResolutionsBase64 = 'themes___coverImage___resolutions___base64',
  ThemesCoverImageResolutionsTracedSvg = 'themes___coverImage___resolutions___tracedSVG',
  ThemesCoverImageResolutionsAspectRatio = 'themes___coverImage___resolutions___aspectRatio',
  ThemesCoverImageResolutionsWidth = 'themes___coverImage___resolutions___width',
  ThemesCoverImageResolutionsHeight = 'themes___coverImage___resolutions___height',
  ThemesCoverImageResolutionsSrc = 'themes___coverImage___resolutions___src',
  ThemesCoverImageResolutionsSrcSet = 'themes___coverImage___resolutions___srcSet',
  ThemesCoverImageResolutionsSrcWebp = 'themes___coverImage___resolutions___srcWebp',
  ThemesCoverImageResolutionsSrcSetWebp = 'themes___coverImage___resolutions___srcSetWebp',
  ThemesCoverImageFluidBase64 = 'themes___coverImage___fluid___base64',
  ThemesCoverImageFluidTracedSvg = 'themes___coverImage___fluid___tracedSVG',
  ThemesCoverImageFluidAspectRatio = 'themes___coverImage___fluid___aspectRatio',
  ThemesCoverImageFluidSrc = 'themes___coverImage___fluid___src',
  ThemesCoverImageFluidSrcSet = 'themes___coverImage___fluid___srcSet',
  ThemesCoverImageFluidSrcWebp = 'themes___coverImage___fluid___srcWebp',
  ThemesCoverImageFluidSrcSetWebp = 'themes___coverImage___fluid___srcSetWebp',
  ThemesCoverImageFluidSizes = 'themes___coverImage___fluid___sizes',
  ThemesCoverImageSizesBase64 = 'themes___coverImage___sizes___base64',
  ThemesCoverImageSizesTracedSvg = 'themes___coverImage___sizes___tracedSVG',
  ThemesCoverImageSizesAspectRatio = 'themes___coverImage___sizes___aspectRatio',
  ThemesCoverImageSizesSrc = 'themes___coverImage___sizes___src',
  ThemesCoverImageSizesSrcSet = 'themes___coverImage___sizes___srcSet',
  ThemesCoverImageSizesSrcWebp = 'themes___coverImage___sizes___srcWebp',
  ThemesCoverImageSizesSrcSetWebp = 'themes___coverImage___sizes___srcSetWebp',
  ThemesCoverImageSizesSizes = 'themes___coverImage___sizes___sizes',
  ThemesCoverImageResizeBase64 = 'themes___coverImage___resize___base64',
  ThemesCoverImageResizeTracedSvg = 'themes___coverImage___resize___tracedSVG',
  ThemesCoverImageResizeSrc = 'themes___coverImage___resize___src',
  ThemesCoverImageResizeWidth = 'themes___coverImage___resize___width',
  ThemesCoverImageResizeHeight = 'themes___coverImage___resize___height',
  ThemesCoverImageResizeAspectRatio = 'themes___coverImage___resize___aspectRatio',
  ThemesCoverImageParentId = 'themes___coverImage___parent___id',
  ThemesCoverImageParentChildren = 'themes___coverImage___parent___children',
  ThemesCoverImageChildren = 'themes___coverImage___children',
  ThemesCoverImageChildrenId = 'themes___coverImage___children___id',
  ThemesCoverImageChildrenChildren = 'themes___coverImage___children___children',
  ThemesCoverImageInternalContent = 'themes___coverImage___internal___content',
  ThemesCoverImageInternalContentDigest = 'themes___coverImage___internal___contentDigest',
  ThemesCoverImageInternalDescription = 'themes___coverImage___internal___description',
  ThemesCoverImageInternalFieldOwners = 'themes___coverImage___internal___fieldOwners',
  ThemesCoverImageInternalIgnoreType = 'themes___coverImage___internal___ignoreType',
  ThemesCoverImageInternalMediaType = 'themes___coverImage___internal___mediaType',
  ThemesCoverImageInternalOwner = 'themes___coverImage___internal___owner',
  ThemesCoverImageInternalType = 'themes___coverImage___internal___type',
  ThemesFeaturedPhotos = 'themes___featuredPhotos',
  ThemesFeaturedPhotosContentfulId = 'themes___featuredPhotos___contentful_id',
  ThemesFeaturedPhotosId = 'themes___featuredPhotos___id',
  ThemesFeaturedPhotosSpaceId = 'themes___featuredPhotos___spaceId',
  ThemesFeaturedPhotosCreatedAt = 'themes___featuredPhotos___createdAt',
  ThemesFeaturedPhotosUpdatedAt = 'themes___featuredPhotos___updatedAt',
  ThemesFeaturedPhotosFileUrl = 'themes___featuredPhotos___file___url',
  ThemesFeaturedPhotosFileFileName = 'themes___featuredPhotos___file___fileName',
  ThemesFeaturedPhotosFileContentType = 'themes___featuredPhotos___file___contentType',
  ThemesFeaturedPhotosTitle = 'themes___featuredPhotos___title',
  ThemesFeaturedPhotosDescription = 'themes___featuredPhotos___description',
  ThemesFeaturedPhotosNodeLocale = 'themes___featuredPhotos___node_locale',
  ThemesFeaturedPhotosSysType = 'themes___featuredPhotos___sys___type',
  ThemesFeaturedPhotosSysRevision = 'themes___featuredPhotos___sys___revision',
  ThemesFeaturedPhotosLocalFileSourceInstanceName = 'themes___featuredPhotos___localFile___sourceInstanceName',
  ThemesFeaturedPhotosLocalFileAbsolutePath = 'themes___featuredPhotos___localFile___absolutePath',
  ThemesFeaturedPhotosLocalFileRelativePath = 'themes___featuredPhotos___localFile___relativePath',
  ThemesFeaturedPhotosLocalFileExtension = 'themes___featuredPhotos___localFile___extension',
  ThemesFeaturedPhotosLocalFileSize = 'themes___featuredPhotos___localFile___size',
  ThemesFeaturedPhotosLocalFilePrettySize = 'themes___featuredPhotos___localFile___prettySize',
  ThemesFeaturedPhotosLocalFileModifiedTime = 'themes___featuredPhotos___localFile___modifiedTime',
  ThemesFeaturedPhotosLocalFileAccessTime = 'themes___featuredPhotos___localFile___accessTime',
  ThemesFeaturedPhotosLocalFileChangeTime = 'themes___featuredPhotos___localFile___changeTime',
  ThemesFeaturedPhotosLocalFileBirthTime = 'themes___featuredPhotos___localFile___birthTime',
  ThemesFeaturedPhotosLocalFileRoot = 'themes___featuredPhotos___localFile___root',
  ThemesFeaturedPhotosLocalFileDir = 'themes___featuredPhotos___localFile___dir',
  ThemesFeaturedPhotosLocalFileBase = 'themes___featuredPhotos___localFile___base',
  ThemesFeaturedPhotosLocalFileExt = 'themes___featuredPhotos___localFile___ext',
  ThemesFeaturedPhotosLocalFileName = 'themes___featuredPhotos___localFile___name',
  ThemesFeaturedPhotosLocalFileRelativeDirectory = 'themes___featuredPhotos___localFile___relativeDirectory',
  ThemesFeaturedPhotosLocalFileDev = 'themes___featuredPhotos___localFile___dev',
  ThemesFeaturedPhotosLocalFileMode = 'themes___featuredPhotos___localFile___mode',
  ThemesFeaturedPhotosLocalFileNlink = 'themes___featuredPhotos___localFile___nlink',
  ThemesFeaturedPhotosLocalFileUid = 'themes___featuredPhotos___localFile___uid',
  ThemesFeaturedPhotosLocalFileGid = 'themes___featuredPhotos___localFile___gid',
  ThemesFeaturedPhotosLocalFileRdev = 'themes___featuredPhotos___localFile___rdev',
  ThemesFeaturedPhotosLocalFileIno = 'themes___featuredPhotos___localFile___ino',
  ThemesFeaturedPhotosLocalFileAtimeMs = 'themes___featuredPhotos___localFile___atimeMs',
  ThemesFeaturedPhotosLocalFileMtimeMs = 'themes___featuredPhotos___localFile___mtimeMs',
  ThemesFeaturedPhotosLocalFileCtimeMs = 'themes___featuredPhotos___localFile___ctimeMs',
  ThemesFeaturedPhotosLocalFileAtime = 'themes___featuredPhotos___localFile___atime',
  ThemesFeaturedPhotosLocalFileMtime = 'themes___featuredPhotos___localFile___mtime',
  ThemesFeaturedPhotosLocalFileCtime = 'themes___featuredPhotos___localFile___ctime',
  ThemesFeaturedPhotosLocalFileBirthtime = 'themes___featuredPhotos___localFile___birthtime',
  ThemesFeaturedPhotosLocalFileBirthtimeMs = 'themes___featuredPhotos___localFile___birthtimeMs',
  ThemesFeaturedPhotosLocalFileBlksize = 'themes___featuredPhotos___localFile___blksize',
  ThemesFeaturedPhotosLocalFileBlocks = 'themes___featuredPhotos___localFile___blocks',
  ThemesFeaturedPhotosLocalFileUrl = 'themes___featuredPhotos___localFile___url',
  ThemesFeaturedPhotosLocalFilePublicUrl = 'themes___featuredPhotos___localFile___publicURL',
  ThemesFeaturedPhotosLocalFileId = 'themes___featuredPhotos___localFile___id',
  ThemesFeaturedPhotosLocalFileChildren = 'themes___featuredPhotos___localFile___children',
  ThemesFeaturedPhotosFixedBase64 = 'themes___featuredPhotos___fixed___base64',
  ThemesFeaturedPhotosFixedTracedSvg = 'themes___featuredPhotos___fixed___tracedSVG',
  ThemesFeaturedPhotosFixedAspectRatio = 'themes___featuredPhotos___fixed___aspectRatio',
  ThemesFeaturedPhotosFixedWidth = 'themes___featuredPhotos___fixed___width',
  ThemesFeaturedPhotosFixedHeight = 'themes___featuredPhotos___fixed___height',
  ThemesFeaturedPhotosFixedSrc = 'themes___featuredPhotos___fixed___src',
  ThemesFeaturedPhotosFixedSrcSet = 'themes___featuredPhotos___fixed___srcSet',
  ThemesFeaturedPhotosFixedSrcWebp = 'themes___featuredPhotos___fixed___srcWebp',
  ThemesFeaturedPhotosFixedSrcSetWebp = 'themes___featuredPhotos___fixed___srcSetWebp',
  ThemesFeaturedPhotosResolutionsBase64 = 'themes___featuredPhotos___resolutions___base64',
  ThemesFeaturedPhotosResolutionsTracedSvg = 'themes___featuredPhotos___resolutions___tracedSVG',
  ThemesFeaturedPhotosResolutionsAspectRatio = 'themes___featuredPhotos___resolutions___aspectRatio',
  ThemesFeaturedPhotosResolutionsWidth = 'themes___featuredPhotos___resolutions___width',
  ThemesFeaturedPhotosResolutionsHeight = 'themes___featuredPhotos___resolutions___height',
  ThemesFeaturedPhotosResolutionsSrc = 'themes___featuredPhotos___resolutions___src',
  ThemesFeaturedPhotosResolutionsSrcSet = 'themes___featuredPhotos___resolutions___srcSet',
  ThemesFeaturedPhotosResolutionsSrcWebp = 'themes___featuredPhotos___resolutions___srcWebp',
  ThemesFeaturedPhotosResolutionsSrcSetWebp = 'themes___featuredPhotos___resolutions___srcSetWebp',
  ThemesFeaturedPhotosFluidBase64 = 'themes___featuredPhotos___fluid___base64',
  ThemesFeaturedPhotosFluidTracedSvg = 'themes___featuredPhotos___fluid___tracedSVG',
  ThemesFeaturedPhotosFluidAspectRatio = 'themes___featuredPhotos___fluid___aspectRatio',
  ThemesFeaturedPhotosFluidSrc = 'themes___featuredPhotos___fluid___src',
  ThemesFeaturedPhotosFluidSrcSet = 'themes___featuredPhotos___fluid___srcSet',
  ThemesFeaturedPhotosFluidSrcWebp = 'themes___featuredPhotos___fluid___srcWebp',
  ThemesFeaturedPhotosFluidSrcSetWebp = 'themes___featuredPhotos___fluid___srcSetWebp',
  ThemesFeaturedPhotosFluidSizes = 'themes___featuredPhotos___fluid___sizes',
  ThemesFeaturedPhotosSizesBase64 = 'themes___featuredPhotos___sizes___base64',
  ThemesFeaturedPhotosSizesTracedSvg = 'themes___featuredPhotos___sizes___tracedSVG',
  ThemesFeaturedPhotosSizesAspectRatio = 'themes___featuredPhotos___sizes___aspectRatio',
  ThemesFeaturedPhotosSizesSrc = 'themes___featuredPhotos___sizes___src',
  ThemesFeaturedPhotosSizesSrcSet = 'themes___featuredPhotos___sizes___srcSet',
  ThemesFeaturedPhotosSizesSrcWebp = 'themes___featuredPhotos___sizes___srcWebp',
  ThemesFeaturedPhotosSizesSrcSetWebp = 'themes___featuredPhotos___sizes___srcSetWebp',
  ThemesFeaturedPhotosSizesSizes = 'themes___featuredPhotos___sizes___sizes',
  ThemesFeaturedPhotosResizeBase64 = 'themes___featuredPhotos___resize___base64',
  ThemesFeaturedPhotosResizeTracedSvg = 'themes___featuredPhotos___resize___tracedSVG',
  ThemesFeaturedPhotosResizeSrc = 'themes___featuredPhotos___resize___src',
  ThemesFeaturedPhotosResizeWidth = 'themes___featuredPhotos___resize___width',
  ThemesFeaturedPhotosResizeHeight = 'themes___featuredPhotos___resize___height',
  ThemesFeaturedPhotosResizeAspectRatio = 'themes___featuredPhotos___resize___aspectRatio',
  ThemesFeaturedPhotosParentId = 'themes___featuredPhotos___parent___id',
  ThemesFeaturedPhotosParentChildren = 'themes___featuredPhotos___parent___children',
  ThemesFeaturedPhotosChildren = 'themes___featuredPhotos___children',
  ThemesFeaturedPhotosChildrenId = 'themes___featuredPhotos___children___id',
  ThemesFeaturedPhotosChildrenChildren = 'themes___featuredPhotos___children___children',
  ThemesFeaturedPhotosInternalContent = 'themes___featuredPhotos___internal___content',
  ThemesFeaturedPhotosInternalContentDigest = 'themes___featuredPhotos___internal___contentDigest',
  ThemesFeaturedPhotosInternalDescription = 'themes___featuredPhotos___internal___description',
  ThemesFeaturedPhotosInternalFieldOwners = 'themes___featuredPhotos___internal___fieldOwners',
  ThemesFeaturedPhotosInternalIgnoreType = 'themes___featuredPhotos___internal___ignoreType',
  ThemesFeaturedPhotosInternalMediaType = 'themes___featuredPhotos___internal___mediaType',
  ThemesFeaturedPhotosInternalOwner = 'themes___featuredPhotos___internal___owner',
  ThemesFeaturedPhotosInternalType = 'themes___featuredPhotos___internal___type',
  ThemesProject = 'themes___project',
  ThemesProjectContentfulId = 'themes___project___contentful_id',
  ThemesProjectId = 'themes___project___id',
  ThemesProjectNodeLocale = 'themes___project___node_locale',
  ThemesProjectTitle = 'themes___project___title',
  ThemesProjectSlug = 'themes___project___slug',
  ThemesProjectThemeContentfulId = 'themes___project___theme___contentful_id',
  ThemesProjectThemeId = 'themes___project___theme___id',
  ThemesProjectThemeNodeLocale = 'themes___project___theme___node_locale',
  ThemesProjectThemeTitle = 'themes___project___theme___title',
  ThemesProjectThemeSlug = 'themes___project___theme___slug',
  ThemesProjectThemeFeaturedPhotos = 'themes___project___theme___featuredPhotos',
  ThemesProjectThemeProject = 'themes___project___theme___project',
  ThemesProjectThemeHomepageFeatured = 'themes___project___theme___homepage___featured',
  ThemesProjectThemeSpaceId = 'themes___project___theme___spaceId',
  ThemesProjectThemeCreatedAt = 'themes___project___theme___createdAt',
  ThemesProjectThemeUpdatedAt = 'themes___project___theme___updatedAt',
  ThemesProjectThemeChildren = 'themes___project___theme___children',
  ThemesProjectCoverImageContentfulId = 'themes___project___coverImage___contentful_id',
  ThemesProjectCoverImageId = 'themes___project___coverImage___id',
  ThemesProjectCoverImageSpaceId = 'themes___project___coverImage___spaceId',
  ThemesProjectCoverImageCreatedAt = 'themes___project___coverImage___createdAt',
  ThemesProjectCoverImageUpdatedAt = 'themes___project___coverImage___updatedAt',
  ThemesProjectCoverImageTitle = 'themes___project___coverImage___title',
  ThemesProjectCoverImageDescription = 'themes___project___coverImage___description',
  ThemesProjectCoverImageNodeLocale = 'themes___project___coverImage___node_locale',
  ThemesProjectCoverImageChildren = 'themes___project___coverImage___children',
  ThemesProjectPhotos = 'themes___project___photos',
  ThemesProjectPhotosContentfulId = 'themes___project___photos___contentful_id',
  ThemesProjectPhotosId = 'themes___project___photos___id',
  ThemesProjectPhotosSpaceId = 'themes___project___photos___spaceId',
  ThemesProjectPhotosCreatedAt = 'themes___project___photos___createdAt',
  ThemesProjectPhotosUpdatedAt = 'themes___project___photos___updatedAt',
  ThemesProjectPhotosTitle = 'themes___project___photos___title',
  ThemesProjectPhotosDescription = 'themes___project___photos___description',
  ThemesProjectPhotosNodeLocale = 'themes___project___photos___node_locale',
  ThemesProjectPhotosChildren = 'themes___project___photos___children',
  ThemesProjectDescriptionId = 'themes___project___description___id',
  ThemesProjectDescriptionChildren = 'themes___project___description___children',
  ThemesProjectDescriptionDescription = 'themes___project___description___description',
  ThemesProjectSpaceId = 'themes___project___spaceId',
  ThemesProjectCreatedAt = 'themes___project___createdAt',
  ThemesProjectUpdatedAt = 'themes___project___updatedAt',
  ThemesProjectSysType = 'themes___project___sys___type',
  ThemesProjectSysRevision = 'themes___project___sys___revision',
  ThemesProjectHomepageFeatured = 'themes___project___homepage___featured',
  ThemesProjectHomepageFeaturedContentfulId = 'themes___project___homepage___featured___contentful_id',
  ThemesProjectHomepageFeaturedId = 'themes___project___homepage___featured___id',
  ThemesProjectHomepageFeaturedNodeLocale = 'themes___project___homepage___featured___node_locale',
  ThemesProjectHomepageFeaturedThemes = 'themes___project___homepage___featured___themes',
  ThemesProjectHomepageFeaturedProjects = 'themes___project___homepage___featured___projects',
  ThemesProjectHomepageFeaturedSpaceId = 'themes___project___homepage___featured___spaceId',
  ThemesProjectHomepageFeaturedCreatedAt = 'themes___project___homepage___featured___createdAt',
  ThemesProjectHomepageFeaturedUpdatedAt = 'themes___project___homepage___featured___updatedAt',
  ThemesProjectHomepageFeaturedChildren = 'themes___project___homepage___featured___children',
  ThemesProjectHomepageLatestWork = 'themes___project___homepage___latest_work',
  ThemesProjectHomepageLatestWorkContentfulId = 'themes___project___homepage___latest_work___contentful_id',
  ThemesProjectHomepageLatestWorkId = 'themes___project___homepage___latest_work___id',
  ThemesProjectHomepageLatestWorkNodeLocale = 'themes___project___homepage___latest_work___node_locale',
  ThemesProjectHomepageLatestWorkFeaturedPhotos = 'themes___project___homepage___latest_work___featuredPhotos',
  ThemesProjectHomepageLatestWorkSpaceId = 'themes___project___homepage___latest_work___spaceId',
  ThemesProjectHomepageLatestWorkCreatedAt = 'themes___project___homepage___latest_work___createdAt',
  ThemesProjectHomepageLatestWorkUpdatedAt = 'themes___project___homepage___latest_work___updatedAt',
  ThemesProjectHomepageLatestWorkChildren = 'themes___project___homepage___latest_work___children',
  ThemesProjectParentId = 'themes___project___parent___id',
  ThemesProjectParentChildren = 'themes___project___parent___children',
  ThemesProjectChildren = 'themes___project___children',
  ThemesProjectChildrenId = 'themes___project___children___id',
  ThemesProjectChildrenChildren = 'themes___project___children___children',
  ThemesProjectInternalContent = 'themes___project___internal___content',
  ThemesProjectInternalContentDigest = 'themes___project___internal___contentDigest',
  ThemesProjectInternalDescription = 'themes___project___internal___description',
  ThemesProjectInternalFieldOwners = 'themes___project___internal___fieldOwners',
  ThemesProjectInternalIgnoreType = 'themes___project___internal___ignoreType',
  ThemesProjectInternalMediaType = 'themes___project___internal___mediaType',
  ThemesProjectInternalOwner = 'themes___project___internal___owner',
  ThemesProjectInternalType = 'themes___project___internal___type',
  ThemesProjectChildContentfulProjectDescriptionTextNodeId = 'themes___project___childContentfulProjectDescriptionTextNode___id',
  ThemesProjectChildContentfulProjectDescriptionTextNodeChildren = 'themes___project___childContentfulProjectDescriptionTextNode___children',
  ThemesProjectChildContentfulProjectDescriptionTextNodeDescription = 'themes___project___childContentfulProjectDescriptionTextNode___description',
  ThemesHomepageFeatured = 'themes___homepage___featured',
  ThemesHomepageFeaturedContentfulId = 'themes___homepage___featured___contentful_id',
  ThemesHomepageFeaturedId = 'themes___homepage___featured___id',
  ThemesHomepageFeaturedNodeLocale = 'themes___homepage___featured___node_locale',
  ThemesHomepageFeaturedThemes = 'themes___homepage___featured___themes',
  ThemesHomepageFeaturedThemesContentfulId = 'themes___homepage___featured___themes___contentful_id',
  ThemesHomepageFeaturedThemesId = 'themes___homepage___featured___themes___id',
  ThemesHomepageFeaturedThemesNodeLocale = 'themes___homepage___featured___themes___node_locale',
  ThemesHomepageFeaturedThemesTitle = 'themes___homepage___featured___themes___title',
  ThemesHomepageFeaturedThemesSlug = 'themes___homepage___featured___themes___slug',
  ThemesHomepageFeaturedThemesFeaturedPhotos = 'themes___homepage___featured___themes___featuredPhotos',
  ThemesHomepageFeaturedThemesProject = 'themes___homepage___featured___themes___project',
  ThemesHomepageFeaturedThemesHomepageFeatured = 'themes___homepage___featured___themes___homepage___featured',
  ThemesHomepageFeaturedThemesSpaceId = 'themes___homepage___featured___themes___spaceId',
  ThemesHomepageFeaturedThemesCreatedAt = 'themes___homepage___featured___themes___createdAt',
  ThemesHomepageFeaturedThemesUpdatedAt = 'themes___homepage___featured___themes___updatedAt',
  ThemesHomepageFeaturedThemesChildren = 'themes___homepage___featured___themes___children',
  ThemesHomepageFeaturedProjects = 'themes___homepage___featured___projects',
  ThemesHomepageFeaturedProjectsContentfulId = 'themes___homepage___featured___projects___contentful_id',
  ThemesHomepageFeaturedProjectsId = 'themes___homepage___featured___projects___id',
  ThemesHomepageFeaturedProjectsNodeLocale = 'themes___homepage___featured___projects___node_locale',
  ThemesHomepageFeaturedProjectsTitle = 'themes___homepage___featured___projects___title',
  ThemesHomepageFeaturedProjectsSlug = 'themes___homepage___featured___projects___slug',
  ThemesHomepageFeaturedProjectsPhotos = 'themes___homepage___featured___projects___photos',
  ThemesHomepageFeaturedProjectsSpaceId = 'themes___homepage___featured___projects___spaceId',
  ThemesHomepageFeaturedProjectsCreatedAt = 'themes___homepage___featured___projects___createdAt',
  ThemesHomepageFeaturedProjectsUpdatedAt = 'themes___homepage___featured___projects___updatedAt',
  ThemesHomepageFeaturedProjectsHomepageFeatured = 'themes___homepage___featured___projects___homepage___featured',
  ThemesHomepageFeaturedProjectsHomepageLatestWork = 'themes___homepage___featured___projects___homepage___latest_work',
  ThemesHomepageFeaturedProjectsChildren = 'themes___homepage___featured___projects___children',
  ThemesHomepageFeaturedSpaceId = 'themes___homepage___featured___spaceId',
  ThemesHomepageFeaturedCreatedAt = 'themes___homepage___featured___createdAt',
  ThemesHomepageFeaturedUpdatedAt = 'themes___homepage___featured___updatedAt',
  ThemesHomepageFeaturedSysType = 'themes___homepage___featured___sys___type',
  ThemesHomepageFeaturedSysRevision = 'themes___homepage___featured___sys___revision',
  ThemesHomepageFeaturedParentId = 'themes___homepage___featured___parent___id',
  ThemesHomepageFeaturedParentChildren = 'themes___homepage___featured___parent___children',
  ThemesHomepageFeaturedChildren = 'themes___homepage___featured___children',
  ThemesHomepageFeaturedChildrenId = 'themes___homepage___featured___children___id',
  ThemesHomepageFeaturedChildrenChildren = 'themes___homepage___featured___children___children',
  ThemesHomepageFeaturedInternalContent = 'themes___homepage___featured___internal___content',
  ThemesHomepageFeaturedInternalContentDigest = 'themes___homepage___featured___internal___contentDigest',
  ThemesHomepageFeaturedInternalDescription = 'themes___homepage___featured___internal___description',
  ThemesHomepageFeaturedInternalFieldOwners = 'themes___homepage___featured___internal___fieldOwners',
  ThemesHomepageFeaturedInternalIgnoreType = 'themes___homepage___featured___internal___ignoreType',
  ThemesHomepageFeaturedInternalMediaType = 'themes___homepage___featured___internal___mediaType',
  ThemesHomepageFeaturedInternalOwner = 'themes___homepage___featured___internal___owner',
  ThemesHomepageFeaturedInternalType = 'themes___homepage___featured___internal___type',
  ThemesSpaceId = 'themes___spaceId',
  ThemesCreatedAt = 'themes___createdAt',
  ThemesUpdatedAt = 'themes___updatedAt',
  ThemesSysType = 'themes___sys___type',
  ThemesSysRevision = 'themes___sys___revision',
  ThemesParentId = 'themes___parent___id',
  ThemesParentParentId = 'themes___parent___parent___id',
  ThemesParentParentChildren = 'themes___parent___parent___children',
  ThemesParentChildren = 'themes___parent___children',
  ThemesParentChildrenId = 'themes___parent___children___id',
  ThemesParentChildrenChildren = 'themes___parent___children___children',
  ThemesParentInternalContent = 'themes___parent___internal___content',
  ThemesParentInternalContentDigest = 'themes___parent___internal___contentDigest',
  ThemesParentInternalDescription = 'themes___parent___internal___description',
  ThemesParentInternalFieldOwners = 'themes___parent___internal___fieldOwners',
  ThemesParentInternalIgnoreType = 'themes___parent___internal___ignoreType',
  ThemesParentInternalMediaType = 'themes___parent___internal___mediaType',
  ThemesParentInternalOwner = 'themes___parent___internal___owner',
  ThemesParentInternalType = 'themes___parent___internal___type',
  ThemesChildren = 'themes___children',
  ThemesChildrenId = 'themes___children___id',
  ThemesChildrenParentId = 'themes___children___parent___id',
  ThemesChildrenParentChildren = 'themes___children___parent___children',
  ThemesChildrenChildren = 'themes___children___children',
  ThemesChildrenChildrenId = 'themes___children___children___id',
  ThemesChildrenChildrenChildren = 'themes___children___children___children',
  ThemesChildrenInternalContent = 'themes___children___internal___content',
  ThemesChildrenInternalContentDigest = 'themes___children___internal___contentDigest',
  ThemesChildrenInternalDescription = 'themes___children___internal___description',
  ThemesChildrenInternalFieldOwners = 'themes___children___internal___fieldOwners',
  ThemesChildrenInternalIgnoreType = 'themes___children___internal___ignoreType',
  ThemesChildrenInternalMediaType = 'themes___children___internal___mediaType',
  ThemesChildrenInternalOwner = 'themes___children___internal___owner',
  ThemesChildrenInternalType = 'themes___children___internal___type',
  ThemesInternalContent = 'themes___internal___content',
  ThemesInternalContentDigest = 'themes___internal___contentDigest',
  ThemesInternalDescription = 'themes___internal___description',
  ThemesInternalFieldOwners = 'themes___internal___fieldOwners',
  ThemesInternalIgnoreType = 'themes___internal___ignoreType',
  ThemesInternalMediaType = 'themes___internal___mediaType',
  ThemesInternalOwner = 'themes___internal___owner',
  ThemesInternalType = 'themes___internal___type',
  Projects = 'projects',
  ProjectsContentfulId = 'projects___contentful_id',
  ProjectsId = 'projects___id',
  ProjectsNodeLocale = 'projects___node_locale',
  ProjectsTitle = 'projects___title',
  ProjectsSlug = 'projects___slug',
  ProjectsThemeContentfulId = 'projects___theme___contentful_id',
  ProjectsThemeId = 'projects___theme___id',
  ProjectsThemeNodeLocale = 'projects___theme___node_locale',
  ProjectsThemeTitle = 'projects___theme___title',
  ProjectsThemeSlug = 'projects___theme___slug',
  ProjectsThemeCoverImageContentfulId = 'projects___theme___coverImage___contentful_id',
  ProjectsThemeCoverImageId = 'projects___theme___coverImage___id',
  ProjectsThemeCoverImageSpaceId = 'projects___theme___coverImage___spaceId',
  ProjectsThemeCoverImageCreatedAt = 'projects___theme___coverImage___createdAt',
  ProjectsThemeCoverImageUpdatedAt = 'projects___theme___coverImage___updatedAt',
  ProjectsThemeCoverImageTitle = 'projects___theme___coverImage___title',
  ProjectsThemeCoverImageDescription = 'projects___theme___coverImage___description',
  ProjectsThemeCoverImageNodeLocale = 'projects___theme___coverImage___node_locale',
  ProjectsThemeCoverImageChildren = 'projects___theme___coverImage___children',
  ProjectsThemeFeaturedPhotos = 'projects___theme___featuredPhotos',
  ProjectsThemeFeaturedPhotosContentfulId = 'projects___theme___featuredPhotos___contentful_id',
  ProjectsThemeFeaturedPhotosId = 'projects___theme___featuredPhotos___id',
  ProjectsThemeFeaturedPhotosSpaceId = 'projects___theme___featuredPhotos___spaceId',
  ProjectsThemeFeaturedPhotosCreatedAt = 'projects___theme___featuredPhotos___createdAt',
  ProjectsThemeFeaturedPhotosUpdatedAt = 'projects___theme___featuredPhotos___updatedAt',
  ProjectsThemeFeaturedPhotosTitle = 'projects___theme___featuredPhotos___title',
  ProjectsThemeFeaturedPhotosDescription = 'projects___theme___featuredPhotos___description',
  ProjectsThemeFeaturedPhotosNodeLocale = 'projects___theme___featuredPhotos___node_locale',
  ProjectsThemeFeaturedPhotosChildren = 'projects___theme___featuredPhotos___children',
  ProjectsThemeProject = 'projects___theme___project',
  ProjectsThemeProjectContentfulId = 'projects___theme___project___contentful_id',
  ProjectsThemeProjectId = 'projects___theme___project___id',
  ProjectsThemeProjectNodeLocale = 'projects___theme___project___node_locale',
  ProjectsThemeProjectTitle = 'projects___theme___project___title',
  ProjectsThemeProjectSlug = 'projects___theme___project___slug',
  ProjectsThemeProjectPhotos = 'projects___theme___project___photos',
  ProjectsThemeProjectSpaceId = 'projects___theme___project___spaceId',
  ProjectsThemeProjectCreatedAt = 'projects___theme___project___createdAt',
  ProjectsThemeProjectUpdatedAt = 'projects___theme___project___updatedAt',
  ProjectsThemeProjectHomepageFeatured = 'projects___theme___project___homepage___featured',
  ProjectsThemeProjectHomepageLatestWork = 'projects___theme___project___homepage___latest_work',
  ProjectsThemeProjectChildren = 'projects___theme___project___children',
  ProjectsThemeHomepageFeatured = 'projects___theme___homepage___featured',
  ProjectsThemeHomepageFeaturedContentfulId = 'projects___theme___homepage___featured___contentful_id',
  ProjectsThemeHomepageFeaturedId = 'projects___theme___homepage___featured___id',
  ProjectsThemeHomepageFeaturedNodeLocale = 'projects___theme___homepage___featured___node_locale',
  ProjectsThemeHomepageFeaturedThemes = 'projects___theme___homepage___featured___themes',
  ProjectsThemeHomepageFeaturedProjects = 'projects___theme___homepage___featured___projects',
  ProjectsThemeHomepageFeaturedSpaceId = 'projects___theme___homepage___featured___spaceId',
  ProjectsThemeHomepageFeaturedCreatedAt = 'projects___theme___homepage___featured___createdAt',
  ProjectsThemeHomepageFeaturedUpdatedAt = 'projects___theme___homepage___featured___updatedAt',
  ProjectsThemeHomepageFeaturedChildren = 'projects___theme___homepage___featured___children',
  ProjectsThemeSpaceId = 'projects___theme___spaceId',
  ProjectsThemeCreatedAt = 'projects___theme___createdAt',
  ProjectsThemeUpdatedAt = 'projects___theme___updatedAt',
  ProjectsThemeSysType = 'projects___theme___sys___type',
  ProjectsThemeSysRevision = 'projects___theme___sys___revision',
  ProjectsThemeParentId = 'projects___theme___parent___id',
  ProjectsThemeParentChildren = 'projects___theme___parent___children',
  ProjectsThemeChildren = 'projects___theme___children',
  ProjectsThemeChildrenId = 'projects___theme___children___id',
  ProjectsThemeChildrenChildren = 'projects___theme___children___children',
  ProjectsThemeInternalContent = 'projects___theme___internal___content',
  ProjectsThemeInternalContentDigest = 'projects___theme___internal___contentDigest',
  ProjectsThemeInternalDescription = 'projects___theme___internal___description',
  ProjectsThemeInternalFieldOwners = 'projects___theme___internal___fieldOwners',
  ProjectsThemeInternalIgnoreType = 'projects___theme___internal___ignoreType',
  ProjectsThemeInternalMediaType = 'projects___theme___internal___mediaType',
  ProjectsThemeInternalOwner = 'projects___theme___internal___owner',
  ProjectsThemeInternalType = 'projects___theme___internal___type',
  ProjectsCoverImageContentfulId = 'projects___coverImage___contentful_id',
  ProjectsCoverImageId = 'projects___coverImage___id',
  ProjectsCoverImageSpaceId = 'projects___coverImage___spaceId',
  ProjectsCoverImageCreatedAt = 'projects___coverImage___createdAt',
  ProjectsCoverImageUpdatedAt = 'projects___coverImage___updatedAt',
  ProjectsCoverImageFileUrl = 'projects___coverImage___file___url',
  ProjectsCoverImageFileFileName = 'projects___coverImage___file___fileName',
  ProjectsCoverImageFileContentType = 'projects___coverImage___file___contentType',
  ProjectsCoverImageTitle = 'projects___coverImage___title',
  ProjectsCoverImageDescription = 'projects___coverImage___description',
  ProjectsCoverImageNodeLocale = 'projects___coverImage___node_locale',
  ProjectsCoverImageSysType = 'projects___coverImage___sys___type',
  ProjectsCoverImageSysRevision = 'projects___coverImage___sys___revision',
  ProjectsCoverImageLocalFileSourceInstanceName = 'projects___coverImage___localFile___sourceInstanceName',
  ProjectsCoverImageLocalFileAbsolutePath = 'projects___coverImage___localFile___absolutePath',
  ProjectsCoverImageLocalFileRelativePath = 'projects___coverImage___localFile___relativePath',
  ProjectsCoverImageLocalFileExtension = 'projects___coverImage___localFile___extension',
  ProjectsCoverImageLocalFileSize = 'projects___coverImage___localFile___size',
  ProjectsCoverImageLocalFilePrettySize = 'projects___coverImage___localFile___prettySize',
  ProjectsCoverImageLocalFileModifiedTime = 'projects___coverImage___localFile___modifiedTime',
  ProjectsCoverImageLocalFileAccessTime = 'projects___coverImage___localFile___accessTime',
  ProjectsCoverImageLocalFileChangeTime = 'projects___coverImage___localFile___changeTime',
  ProjectsCoverImageLocalFileBirthTime = 'projects___coverImage___localFile___birthTime',
  ProjectsCoverImageLocalFileRoot = 'projects___coverImage___localFile___root',
  ProjectsCoverImageLocalFileDir = 'projects___coverImage___localFile___dir',
  ProjectsCoverImageLocalFileBase = 'projects___coverImage___localFile___base',
  ProjectsCoverImageLocalFileExt = 'projects___coverImage___localFile___ext',
  ProjectsCoverImageLocalFileName = 'projects___coverImage___localFile___name',
  ProjectsCoverImageLocalFileRelativeDirectory = 'projects___coverImage___localFile___relativeDirectory',
  ProjectsCoverImageLocalFileDev = 'projects___coverImage___localFile___dev',
  ProjectsCoverImageLocalFileMode = 'projects___coverImage___localFile___mode',
  ProjectsCoverImageLocalFileNlink = 'projects___coverImage___localFile___nlink',
  ProjectsCoverImageLocalFileUid = 'projects___coverImage___localFile___uid',
  ProjectsCoverImageLocalFileGid = 'projects___coverImage___localFile___gid',
  ProjectsCoverImageLocalFileRdev = 'projects___coverImage___localFile___rdev',
  ProjectsCoverImageLocalFileIno = 'projects___coverImage___localFile___ino',
  ProjectsCoverImageLocalFileAtimeMs = 'projects___coverImage___localFile___atimeMs',
  ProjectsCoverImageLocalFileMtimeMs = 'projects___coverImage___localFile___mtimeMs',
  ProjectsCoverImageLocalFileCtimeMs = 'projects___coverImage___localFile___ctimeMs',
  ProjectsCoverImageLocalFileAtime = 'projects___coverImage___localFile___atime',
  ProjectsCoverImageLocalFileMtime = 'projects___coverImage___localFile___mtime',
  ProjectsCoverImageLocalFileCtime = 'projects___coverImage___localFile___ctime',
  ProjectsCoverImageLocalFileBirthtime = 'projects___coverImage___localFile___birthtime',
  ProjectsCoverImageLocalFileBirthtimeMs = 'projects___coverImage___localFile___birthtimeMs',
  ProjectsCoverImageLocalFileBlksize = 'projects___coverImage___localFile___blksize',
  ProjectsCoverImageLocalFileBlocks = 'projects___coverImage___localFile___blocks',
  ProjectsCoverImageLocalFileUrl = 'projects___coverImage___localFile___url',
  ProjectsCoverImageLocalFilePublicUrl = 'projects___coverImage___localFile___publicURL',
  ProjectsCoverImageLocalFileId = 'projects___coverImage___localFile___id',
  ProjectsCoverImageLocalFileChildren = 'projects___coverImage___localFile___children',
  ProjectsCoverImageFixedBase64 = 'projects___coverImage___fixed___base64',
  ProjectsCoverImageFixedTracedSvg = 'projects___coverImage___fixed___tracedSVG',
  ProjectsCoverImageFixedAspectRatio = 'projects___coverImage___fixed___aspectRatio',
  ProjectsCoverImageFixedWidth = 'projects___coverImage___fixed___width',
  ProjectsCoverImageFixedHeight = 'projects___coverImage___fixed___height',
  ProjectsCoverImageFixedSrc = 'projects___coverImage___fixed___src',
  ProjectsCoverImageFixedSrcSet = 'projects___coverImage___fixed___srcSet',
  ProjectsCoverImageFixedSrcWebp = 'projects___coverImage___fixed___srcWebp',
  ProjectsCoverImageFixedSrcSetWebp = 'projects___coverImage___fixed___srcSetWebp',
  ProjectsCoverImageResolutionsBase64 = 'projects___coverImage___resolutions___base64',
  ProjectsCoverImageResolutionsTracedSvg = 'projects___coverImage___resolutions___tracedSVG',
  ProjectsCoverImageResolutionsAspectRatio = 'projects___coverImage___resolutions___aspectRatio',
  ProjectsCoverImageResolutionsWidth = 'projects___coverImage___resolutions___width',
  ProjectsCoverImageResolutionsHeight = 'projects___coverImage___resolutions___height',
  ProjectsCoverImageResolutionsSrc = 'projects___coverImage___resolutions___src',
  ProjectsCoverImageResolutionsSrcSet = 'projects___coverImage___resolutions___srcSet',
  ProjectsCoverImageResolutionsSrcWebp = 'projects___coverImage___resolutions___srcWebp',
  ProjectsCoverImageResolutionsSrcSetWebp = 'projects___coverImage___resolutions___srcSetWebp',
  ProjectsCoverImageFluidBase64 = 'projects___coverImage___fluid___base64',
  ProjectsCoverImageFluidTracedSvg = 'projects___coverImage___fluid___tracedSVG',
  ProjectsCoverImageFluidAspectRatio = 'projects___coverImage___fluid___aspectRatio',
  ProjectsCoverImageFluidSrc = 'projects___coverImage___fluid___src',
  ProjectsCoverImageFluidSrcSet = 'projects___coverImage___fluid___srcSet',
  ProjectsCoverImageFluidSrcWebp = 'projects___coverImage___fluid___srcWebp',
  ProjectsCoverImageFluidSrcSetWebp = 'projects___coverImage___fluid___srcSetWebp',
  ProjectsCoverImageFluidSizes = 'projects___coverImage___fluid___sizes',
  ProjectsCoverImageSizesBase64 = 'projects___coverImage___sizes___base64',
  ProjectsCoverImageSizesTracedSvg = 'projects___coverImage___sizes___tracedSVG',
  ProjectsCoverImageSizesAspectRatio = 'projects___coverImage___sizes___aspectRatio',
  ProjectsCoverImageSizesSrc = 'projects___coverImage___sizes___src',
  ProjectsCoverImageSizesSrcSet = 'projects___coverImage___sizes___srcSet',
  ProjectsCoverImageSizesSrcWebp = 'projects___coverImage___sizes___srcWebp',
  ProjectsCoverImageSizesSrcSetWebp = 'projects___coverImage___sizes___srcSetWebp',
  ProjectsCoverImageSizesSizes = 'projects___coverImage___sizes___sizes',
  ProjectsCoverImageResizeBase64 = 'projects___coverImage___resize___base64',
  ProjectsCoverImageResizeTracedSvg = 'projects___coverImage___resize___tracedSVG',
  ProjectsCoverImageResizeSrc = 'projects___coverImage___resize___src',
  ProjectsCoverImageResizeWidth = 'projects___coverImage___resize___width',
  ProjectsCoverImageResizeHeight = 'projects___coverImage___resize___height',
  ProjectsCoverImageResizeAspectRatio = 'projects___coverImage___resize___aspectRatio',
  ProjectsCoverImageParentId = 'projects___coverImage___parent___id',
  ProjectsCoverImageParentChildren = 'projects___coverImage___parent___children',
  ProjectsCoverImageChildren = 'projects___coverImage___children',
  ProjectsCoverImageChildrenId = 'projects___coverImage___children___id',
  ProjectsCoverImageChildrenChildren = 'projects___coverImage___children___children',
  ProjectsCoverImageInternalContent = 'projects___coverImage___internal___content',
  ProjectsCoverImageInternalContentDigest = 'projects___coverImage___internal___contentDigest',
  ProjectsCoverImageInternalDescription = 'projects___coverImage___internal___description',
  ProjectsCoverImageInternalFieldOwners = 'projects___coverImage___internal___fieldOwners',
  ProjectsCoverImageInternalIgnoreType = 'projects___coverImage___internal___ignoreType',
  ProjectsCoverImageInternalMediaType = 'projects___coverImage___internal___mediaType',
  ProjectsCoverImageInternalOwner = 'projects___coverImage___internal___owner',
  ProjectsCoverImageInternalType = 'projects___coverImage___internal___type',
  ProjectsPhotos = 'projects___photos',
  ProjectsPhotosContentfulId = 'projects___photos___contentful_id',
  ProjectsPhotosId = 'projects___photos___id',
  ProjectsPhotosSpaceId = 'projects___photos___spaceId',
  ProjectsPhotosCreatedAt = 'projects___photos___createdAt',
  ProjectsPhotosUpdatedAt = 'projects___photos___updatedAt',
  ProjectsPhotosFileUrl = 'projects___photos___file___url',
  ProjectsPhotosFileFileName = 'projects___photos___file___fileName',
  ProjectsPhotosFileContentType = 'projects___photos___file___contentType',
  ProjectsPhotosTitle = 'projects___photos___title',
  ProjectsPhotosDescription = 'projects___photos___description',
  ProjectsPhotosNodeLocale = 'projects___photos___node_locale',
  ProjectsPhotosSysType = 'projects___photos___sys___type',
  ProjectsPhotosSysRevision = 'projects___photos___sys___revision',
  ProjectsPhotosLocalFileSourceInstanceName = 'projects___photos___localFile___sourceInstanceName',
  ProjectsPhotosLocalFileAbsolutePath = 'projects___photos___localFile___absolutePath',
  ProjectsPhotosLocalFileRelativePath = 'projects___photos___localFile___relativePath',
  ProjectsPhotosLocalFileExtension = 'projects___photos___localFile___extension',
  ProjectsPhotosLocalFileSize = 'projects___photos___localFile___size',
  ProjectsPhotosLocalFilePrettySize = 'projects___photos___localFile___prettySize',
  ProjectsPhotosLocalFileModifiedTime = 'projects___photos___localFile___modifiedTime',
  ProjectsPhotosLocalFileAccessTime = 'projects___photos___localFile___accessTime',
  ProjectsPhotosLocalFileChangeTime = 'projects___photos___localFile___changeTime',
  ProjectsPhotosLocalFileBirthTime = 'projects___photos___localFile___birthTime',
  ProjectsPhotosLocalFileRoot = 'projects___photos___localFile___root',
  ProjectsPhotosLocalFileDir = 'projects___photos___localFile___dir',
  ProjectsPhotosLocalFileBase = 'projects___photos___localFile___base',
  ProjectsPhotosLocalFileExt = 'projects___photos___localFile___ext',
  ProjectsPhotosLocalFileName = 'projects___photos___localFile___name',
  ProjectsPhotosLocalFileRelativeDirectory = 'projects___photos___localFile___relativeDirectory',
  ProjectsPhotosLocalFileDev = 'projects___photos___localFile___dev',
  ProjectsPhotosLocalFileMode = 'projects___photos___localFile___mode',
  ProjectsPhotosLocalFileNlink = 'projects___photos___localFile___nlink',
  ProjectsPhotosLocalFileUid = 'projects___photos___localFile___uid',
  ProjectsPhotosLocalFileGid = 'projects___photos___localFile___gid',
  ProjectsPhotosLocalFileRdev = 'projects___photos___localFile___rdev',
  ProjectsPhotosLocalFileIno = 'projects___photos___localFile___ino',
  ProjectsPhotosLocalFileAtimeMs = 'projects___photos___localFile___atimeMs',
  ProjectsPhotosLocalFileMtimeMs = 'projects___photos___localFile___mtimeMs',
  ProjectsPhotosLocalFileCtimeMs = 'projects___photos___localFile___ctimeMs',
  ProjectsPhotosLocalFileAtime = 'projects___photos___localFile___atime',
  ProjectsPhotosLocalFileMtime = 'projects___photos___localFile___mtime',
  ProjectsPhotosLocalFileCtime = 'projects___photos___localFile___ctime',
  ProjectsPhotosLocalFileBirthtime = 'projects___photos___localFile___birthtime',
  ProjectsPhotosLocalFileBirthtimeMs = 'projects___photos___localFile___birthtimeMs',
  ProjectsPhotosLocalFileBlksize = 'projects___photos___localFile___blksize',
  ProjectsPhotosLocalFileBlocks = 'projects___photos___localFile___blocks',
  ProjectsPhotosLocalFileUrl = 'projects___photos___localFile___url',
  ProjectsPhotosLocalFilePublicUrl = 'projects___photos___localFile___publicURL',
  ProjectsPhotosLocalFileId = 'projects___photos___localFile___id',
  ProjectsPhotosLocalFileChildren = 'projects___photos___localFile___children',
  ProjectsPhotosFixedBase64 = 'projects___photos___fixed___base64',
  ProjectsPhotosFixedTracedSvg = 'projects___photos___fixed___tracedSVG',
  ProjectsPhotosFixedAspectRatio = 'projects___photos___fixed___aspectRatio',
  ProjectsPhotosFixedWidth = 'projects___photos___fixed___width',
  ProjectsPhotosFixedHeight = 'projects___photos___fixed___height',
  ProjectsPhotosFixedSrc = 'projects___photos___fixed___src',
  ProjectsPhotosFixedSrcSet = 'projects___photos___fixed___srcSet',
  ProjectsPhotosFixedSrcWebp = 'projects___photos___fixed___srcWebp',
  ProjectsPhotosFixedSrcSetWebp = 'projects___photos___fixed___srcSetWebp',
  ProjectsPhotosResolutionsBase64 = 'projects___photos___resolutions___base64',
  ProjectsPhotosResolutionsTracedSvg = 'projects___photos___resolutions___tracedSVG',
  ProjectsPhotosResolutionsAspectRatio = 'projects___photos___resolutions___aspectRatio',
  ProjectsPhotosResolutionsWidth = 'projects___photos___resolutions___width',
  ProjectsPhotosResolutionsHeight = 'projects___photos___resolutions___height',
  ProjectsPhotosResolutionsSrc = 'projects___photos___resolutions___src',
  ProjectsPhotosResolutionsSrcSet = 'projects___photos___resolutions___srcSet',
  ProjectsPhotosResolutionsSrcWebp = 'projects___photos___resolutions___srcWebp',
  ProjectsPhotosResolutionsSrcSetWebp = 'projects___photos___resolutions___srcSetWebp',
  ProjectsPhotosFluidBase64 = 'projects___photos___fluid___base64',
  ProjectsPhotosFluidTracedSvg = 'projects___photos___fluid___tracedSVG',
  ProjectsPhotosFluidAspectRatio = 'projects___photos___fluid___aspectRatio',
  ProjectsPhotosFluidSrc = 'projects___photos___fluid___src',
  ProjectsPhotosFluidSrcSet = 'projects___photos___fluid___srcSet',
  ProjectsPhotosFluidSrcWebp = 'projects___photos___fluid___srcWebp',
  ProjectsPhotosFluidSrcSetWebp = 'projects___photos___fluid___srcSetWebp',
  ProjectsPhotosFluidSizes = 'projects___photos___fluid___sizes',
  ProjectsPhotosSizesBase64 = 'projects___photos___sizes___base64',
  ProjectsPhotosSizesTracedSvg = 'projects___photos___sizes___tracedSVG',
  ProjectsPhotosSizesAspectRatio = 'projects___photos___sizes___aspectRatio',
  ProjectsPhotosSizesSrc = 'projects___photos___sizes___src',
  ProjectsPhotosSizesSrcSet = 'projects___photos___sizes___srcSet',
  ProjectsPhotosSizesSrcWebp = 'projects___photos___sizes___srcWebp',
  ProjectsPhotosSizesSrcSetWebp = 'projects___photos___sizes___srcSetWebp',
  ProjectsPhotosSizesSizes = 'projects___photos___sizes___sizes',
  ProjectsPhotosResizeBase64 = 'projects___photos___resize___base64',
  ProjectsPhotosResizeTracedSvg = 'projects___photos___resize___tracedSVG',
  ProjectsPhotosResizeSrc = 'projects___photos___resize___src',
  ProjectsPhotosResizeWidth = 'projects___photos___resize___width',
  ProjectsPhotosResizeHeight = 'projects___photos___resize___height',
  ProjectsPhotosResizeAspectRatio = 'projects___photos___resize___aspectRatio',
  ProjectsPhotosParentId = 'projects___photos___parent___id',
  ProjectsPhotosParentChildren = 'projects___photos___parent___children',
  ProjectsPhotosChildren = 'projects___photos___children',
  ProjectsPhotosChildrenId = 'projects___photos___children___id',
  ProjectsPhotosChildrenChildren = 'projects___photos___children___children',
  ProjectsPhotosInternalContent = 'projects___photos___internal___content',
  ProjectsPhotosInternalContentDigest = 'projects___photos___internal___contentDigest',
  ProjectsPhotosInternalDescription = 'projects___photos___internal___description',
  ProjectsPhotosInternalFieldOwners = 'projects___photos___internal___fieldOwners',
  ProjectsPhotosInternalIgnoreType = 'projects___photos___internal___ignoreType',
  ProjectsPhotosInternalMediaType = 'projects___photos___internal___mediaType',
  ProjectsPhotosInternalOwner = 'projects___photos___internal___owner',
  ProjectsPhotosInternalType = 'projects___photos___internal___type',
  ProjectsDescriptionId = 'projects___description___id',
  ProjectsDescriptionParentId = 'projects___description___parent___id',
  ProjectsDescriptionParentChildren = 'projects___description___parent___children',
  ProjectsDescriptionChildren = 'projects___description___children',
  ProjectsDescriptionChildrenId = 'projects___description___children___id',
  ProjectsDescriptionChildrenChildren = 'projects___description___children___children',
  ProjectsDescriptionInternalContent = 'projects___description___internal___content',
  ProjectsDescriptionInternalContentDigest = 'projects___description___internal___contentDigest',
  ProjectsDescriptionInternalDescription = 'projects___description___internal___description',
  ProjectsDescriptionInternalFieldOwners = 'projects___description___internal___fieldOwners',
  ProjectsDescriptionInternalIgnoreType = 'projects___description___internal___ignoreType',
  ProjectsDescriptionInternalMediaType = 'projects___description___internal___mediaType',
  ProjectsDescriptionInternalOwner = 'projects___description___internal___owner',
  ProjectsDescriptionInternalType = 'projects___description___internal___type',
  ProjectsDescriptionDescription = 'projects___description___description',
  ProjectsDescriptionSysType = 'projects___description___sys___type',
  ProjectsSpaceId = 'projects___spaceId',
  ProjectsCreatedAt = 'projects___createdAt',
  ProjectsUpdatedAt = 'projects___updatedAt',
  ProjectsSysType = 'projects___sys___type',
  ProjectsSysRevision = 'projects___sys___revision',
  ProjectsHomepageFeatured = 'projects___homepage___featured',
  ProjectsHomepageFeaturedContentfulId = 'projects___homepage___featured___contentful_id',
  ProjectsHomepageFeaturedId = 'projects___homepage___featured___id',
  ProjectsHomepageFeaturedNodeLocale = 'projects___homepage___featured___node_locale',
  ProjectsHomepageFeaturedThemes = 'projects___homepage___featured___themes',
  ProjectsHomepageFeaturedThemesContentfulId = 'projects___homepage___featured___themes___contentful_id',
  ProjectsHomepageFeaturedThemesId = 'projects___homepage___featured___themes___id',
  ProjectsHomepageFeaturedThemesNodeLocale = 'projects___homepage___featured___themes___node_locale',
  ProjectsHomepageFeaturedThemesTitle = 'projects___homepage___featured___themes___title',
  ProjectsHomepageFeaturedThemesSlug = 'projects___homepage___featured___themes___slug',
  ProjectsHomepageFeaturedThemesFeaturedPhotos = 'projects___homepage___featured___themes___featuredPhotos',
  ProjectsHomepageFeaturedThemesProject = 'projects___homepage___featured___themes___project',
  ProjectsHomepageFeaturedThemesHomepageFeatured = 'projects___homepage___featured___themes___homepage___featured',
  ProjectsHomepageFeaturedThemesSpaceId = 'projects___homepage___featured___themes___spaceId',
  ProjectsHomepageFeaturedThemesCreatedAt = 'projects___homepage___featured___themes___createdAt',
  ProjectsHomepageFeaturedThemesUpdatedAt = 'projects___homepage___featured___themes___updatedAt',
  ProjectsHomepageFeaturedThemesChildren = 'projects___homepage___featured___themes___children',
  ProjectsHomepageFeaturedProjects = 'projects___homepage___featured___projects',
  ProjectsHomepageFeaturedProjectsContentfulId = 'projects___homepage___featured___projects___contentful_id',
  ProjectsHomepageFeaturedProjectsId = 'projects___homepage___featured___projects___id',
  ProjectsHomepageFeaturedProjectsNodeLocale = 'projects___homepage___featured___projects___node_locale',
  ProjectsHomepageFeaturedProjectsTitle = 'projects___homepage___featured___projects___title',
  ProjectsHomepageFeaturedProjectsSlug = 'projects___homepage___featured___projects___slug',
  ProjectsHomepageFeaturedProjectsPhotos = 'projects___homepage___featured___projects___photos',
  ProjectsHomepageFeaturedProjectsSpaceId = 'projects___homepage___featured___projects___spaceId',
  ProjectsHomepageFeaturedProjectsCreatedAt = 'projects___homepage___featured___projects___createdAt',
  ProjectsHomepageFeaturedProjectsUpdatedAt = 'projects___homepage___featured___projects___updatedAt',
  ProjectsHomepageFeaturedProjectsHomepageFeatured = 'projects___homepage___featured___projects___homepage___featured',
  ProjectsHomepageFeaturedProjectsHomepageLatestWork = 'projects___homepage___featured___projects___homepage___latest_work',
  ProjectsHomepageFeaturedProjectsChildren = 'projects___homepage___featured___projects___children',
  ProjectsHomepageFeaturedSpaceId = 'projects___homepage___featured___spaceId',
  ProjectsHomepageFeaturedCreatedAt = 'projects___homepage___featured___createdAt',
  ProjectsHomepageFeaturedUpdatedAt = 'projects___homepage___featured___updatedAt',
  ProjectsHomepageFeaturedSysType = 'projects___homepage___featured___sys___type',
  ProjectsHomepageFeaturedSysRevision = 'projects___homepage___featured___sys___revision',
  ProjectsHomepageFeaturedParentId = 'projects___homepage___featured___parent___id',
  ProjectsHomepageFeaturedParentChildren = 'projects___homepage___featured___parent___children',
  ProjectsHomepageFeaturedChildren = 'projects___homepage___featured___children',
  ProjectsHomepageFeaturedChildrenId = 'projects___homepage___featured___children___id',
  ProjectsHomepageFeaturedChildrenChildren = 'projects___homepage___featured___children___children',
  ProjectsHomepageFeaturedInternalContent = 'projects___homepage___featured___internal___content',
  ProjectsHomepageFeaturedInternalContentDigest = 'projects___homepage___featured___internal___contentDigest',
  ProjectsHomepageFeaturedInternalDescription = 'projects___homepage___featured___internal___description',
  ProjectsHomepageFeaturedInternalFieldOwners = 'projects___homepage___featured___internal___fieldOwners',
  ProjectsHomepageFeaturedInternalIgnoreType = 'projects___homepage___featured___internal___ignoreType',
  ProjectsHomepageFeaturedInternalMediaType = 'projects___homepage___featured___internal___mediaType',
  ProjectsHomepageFeaturedInternalOwner = 'projects___homepage___featured___internal___owner',
  ProjectsHomepageFeaturedInternalType = 'projects___homepage___featured___internal___type',
  ProjectsHomepageLatestWork = 'projects___homepage___latest_work',
  ProjectsHomepageLatestWorkContentfulId = 'projects___homepage___latest_work___contentful_id',
  ProjectsHomepageLatestWorkId = 'projects___homepage___latest_work___id',
  ProjectsHomepageLatestWorkNodeLocale = 'projects___homepage___latest_work___node_locale',
  ProjectsHomepageLatestWorkProjectContentfulId = 'projects___homepage___latest_work___project___contentful_id',
  ProjectsHomepageLatestWorkProjectId = 'projects___homepage___latest_work___project___id',
  ProjectsHomepageLatestWorkProjectNodeLocale = 'projects___homepage___latest_work___project___node_locale',
  ProjectsHomepageLatestWorkProjectTitle = 'projects___homepage___latest_work___project___title',
  ProjectsHomepageLatestWorkProjectSlug = 'projects___homepage___latest_work___project___slug',
  ProjectsHomepageLatestWorkProjectPhotos = 'projects___homepage___latest_work___project___photos',
  ProjectsHomepageLatestWorkProjectSpaceId = 'projects___homepage___latest_work___project___spaceId',
  ProjectsHomepageLatestWorkProjectCreatedAt = 'projects___homepage___latest_work___project___createdAt',
  ProjectsHomepageLatestWorkProjectUpdatedAt = 'projects___homepage___latest_work___project___updatedAt',
  ProjectsHomepageLatestWorkProjectHomepageFeatured = 'projects___homepage___latest_work___project___homepage___featured',
  ProjectsHomepageLatestWorkProjectHomepageLatestWork = 'projects___homepage___latest_work___project___homepage___latest_work',
  ProjectsHomepageLatestWorkProjectChildren = 'projects___homepage___latest_work___project___children',
  ProjectsHomepageLatestWorkFeaturedPhotos = 'projects___homepage___latest_work___featuredPhotos',
  ProjectsHomepageLatestWorkFeaturedPhotosContentfulId = 'projects___homepage___latest_work___featuredPhotos___contentful_id',
  ProjectsHomepageLatestWorkFeaturedPhotosId = 'projects___homepage___latest_work___featuredPhotos___id',
  ProjectsHomepageLatestWorkFeaturedPhotosSpaceId = 'projects___homepage___latest_work___featuredPhotos___spaceId',
  ProjectsHomepageLatestWorkFeaturedPhotosCreatedAt = 'projects___homepage___latest_work___featuredPhotos___createdAt',
  ProjectsHomepageLatestWorkFeaturedPhotosUpdatedAt = 'projects___homepage___latest_work___featuredPhotos___updatedAt',
  ProjectsHomepageLatestWorkFeaturedPhotosTitle = 'projects___homepage___latest_work___featuredPhotos___title',
  ProjectsHomepageLatestWorkFeaturedPhotosDescription = 'projects___homepage___latest_work___featuredPhotos___description',
  ProjectsHomepageLatestWorkFeaturedPhotosNodeLocale = 'projects___homepage___latest_work___featuredPhotos___node_locale',
  ProjectsHomepageLatestWorkFeaturedPhotosChildren = 'projects___homepage___latest_work___featuredPhotos___children',
  ProjectsHomepageLatestWorkSpaceId = 'projects___homepage___latest_work___spaceId',
  ProjectsHomepageLatestWorkCreatedAt = 'projects___homepage___latest_work___createdAt',
  ProjectsHomepageLatestWorkUpdatedAt = 'projects___homepage___latest_work___updatedAt',
  ProjectsHomepageLatestWorkSysType = 'projects___homepage___latest_work___sys___type',
  ProjectsHomepageLatestWorkSysRevision = 'projects___homepage___latest_work___sys___revision',
  ProjectsHomepageLatestWorkParentId = 'projects___homepage___latest_work___parent___id',
  ProjectsHomepageLatestWorkParentChildren = 'projects___homepage___latest_work___parent___children',
  ProjectsHomepageLatestWorkChildren = 'projects___homepage___latest_work___children',
  ProjectsHomepageLatestWorkChildrenId = 'projects___homepage___latest_work___children___id',
  ProjectsHomepageLatestWorkChildrenChildren = 'projects___homepage___latest_work___children___children',
  ProjectsHomepageLatestWorkInternalContent = 'projects___homepage___latest_work___internal___content',
  ProjectsHomepageLatestWorkInternalContentDigest = 'projects___homepage___latest_work___internal___contentDigest',
  ProjectsHomepageLatestWorkInternalDescription = 'projects___homepage___latest_work___internal___description',
  ProjectsHomepageLatestWorkInternalFieldOwners = 'projects___homepage___latest_work___internal___fieldOwners',
  ProjectsHomepageLatestWorkInternalIgnoreType = 'projects___homepage___latest_work___internal___ignoreType',
  ProjectsHomepageLatestWorkInternalMediaType = 'projects___homepage___latest_work___internal___mediaType',
  ProjectsHomepageLatestWorkInternalOwner = 'projects___homepage___latest_work___internal___owner',
  ProjectsHomepageLatestWorkInternalType = 'projects___homepage___latest_work___internal___type',
  ProjectsParentId = 'projects___parent___id',
  ProjectsParentParentId = 'projects___parent___parent___id',
  ProjectsParentParentChildren = 'projects___parent___parent___children',
  ProjectsParentChildren = 'projects___parent___children',
  ProjectsParentChildrenId = 'projects___parent___children___id',
  ProjectsParentChildrenChildren = 'projects___parent___children___children',
  ProjectsParentInternalContent = 'projects___parent___internal___content',
  ProjectsParentInternalContentDigest = 'projects___parent___internal___contentDigest',
  ProjectsParentInternalDescription = 'projects___parent___internal___description',
  ProjectsParentInternalFieldOwners = 'projects___parent___internal___fieldOwners',
  ProjectsParentInternalIgnoreType = 'projects___parent___internal___ignoreType',
  ProjectsParentInternalMediaType = 'projects___parent___internal___mediaType',
  ProjectsParentInternalOwner = 'projects___parent___internal___owner',
  ProjectsParentInternalType = 'projects___parent___internal___type',
  ProjectsChildren = 'projects___children',
  ProjectsChildrenId = 'projects___children___id',
  ProjectsChildrenParentId = 'projects___children___parent___id',
  ProjectsChildrenParentChildren = 'projects___children___parent___children',
  ProjectsChildrenChildren = 'projects___children___children',
  ProjectsChildrenChildrenId = 'projects___children___children___id',
  ProjectsChildrenChildrenChildren = 'projects___children___children___children',
  ProjectsChildrenInternalContent = 'projects___children___internal___content',
  ProjectsChildrenInternalContentDigest = 'projects___children___internal___contentDigest',
  ProjectsChildrenInternalDescription = 'projects___children___internal___description',
  ProjectsChildrenInternalFieldOwners = 'projects___children___internal___fieldOwners',
  ProjectsChildrenInternalIgnoreType = 'projects___children___internal___ignoreType',
  ProjectsChildrenInternalMediaType = 'projects___children___internal___mediaType',
  ProjectsChildrenInternalOwner = 'projects___children___internal___owner',
  ProjectsChildrenInternalType = 'projects___children___internal___type',
  ProjectsInternalContent = 'projects___internal___content',
  ProjectsInternalContentDigest = 'projects___internal___contentDigest',
  ProjectsInternalDescription = 'projects___internal___description',
  ProjectsInternalFieldOwners = 'projects___internal___fieldOwners',
  ProjectsInternalIgnoreType = 'projects___internal___ignoreType',
  ProjectsInternalMediaType = 'projects___internal___mediaType',
  ProjectsInternalOwner = 'projects___internal___owner',
  ProjectsInternalType = 'projects___internal___type',
  ProjectsChildContentfulProjectDescriptionTextNodeId = 'projects___childContentfulProjectDescriptionTextNode___id',
  ProjectsChildContentfulProjectDescriptionTextNodeParentId = 'projects___childContentfulProjectDescriptionTextNode___parent___id',
  ProjectsChildContentfulProjectDescriptionTextNodeParentChildren = 'projects___childContentfulProjectDescriptionTextNode___parent___children',
  ProjectsChildContentfulProjectDescriptionTextNodeChildren = 'projects___childContentfulProjectDescriptionTextNode___children',
  ProjectsChildContentfulProjectDescriptionTextNodeChildrenId = 'projects___childContentfulProjectDescriptionTextNode___children___id',
  ProjectsChildContentfulProjectDescriptionTextNodeChildrenChildren = 'projects___childContentfulProjectDescriptionTextNode___children___children',
  ProjectsChildContentfulProjectDescriptionTextNodeInternalContent = 'projects___childContentfulProjectDescriptionTextNode___internal___content',
  ProjectsChildContentfulProjectDescriptionTextNodeInternalContentDigest = 'projects___childContentfulProjectDescriptionTextNode___internal___contentDigest',
  ProjectsChildContentfulProjectDescriptionTextNodeInternalDescription = 'projects___childContentfulProjectDescriptionTextNode___internal___description',
  ProjectsChildContentfulProjectDescriptionTextNodeInternalFieldOwners = 'projects___childContentfulProjectDescriptionTextNode___internal___fieldOwners',
  ProjectsChildContentfulProjectDescriptionTextNodeInternalIgnoreType = 'projects___childContentfulProjectDescriptionTextNode___internal___ignoreType',
  ProjectsChildContentfulProjectDescriptionTextNodeInternalMediaType = 'projects___childContentfulProjectDescriptionTextNode___internal___mediaType',
  ProjectsChildContentfulProjectDescriptionTextNodeInternalOwner = 'projects___childContentfulProjectDescriptionTextNode___internal___owner',
  ProjectsChildContentfulProjectDescriptionTextNodeInternalType = 'projects___childContentfulProjectDescriptionTextNode___internal___type',
  ProjectsChildContentfulProjectDescriptionTextNodeDescription = 'projects___childContentfulProjectDescriptionTextNode___description',
  ProjectsChildContentfulProjectDescriptionTextNodeSysType = 'projects___childContentfulProjectDescriptionTextNode___sys___type',
  SpaceId = 'spaceId',
  CreatedAt = 'createdAt',
  UpdatedAt = 'updatedAt',
  SysType = 'sys___type',
  SysRevision = 'sys___revision',
  SysContentTypeSysType = 'sys___contentType___sys___type',
  SysContentTypeSysLinkType = 'sys___contentType___sys___linkType',
  SysContentTypeSysId = 'sys___contentType___sys___id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
}

export type ContentfulHomepageFeaturedFilterInput = {
  contentful_id?: Maybe<StringQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  node_locale?: Maybe<StringQueryOperatorInput>
  themes?: Maybe<ContentfulThemeFilterListInput>
  projects?: Maybe<ContentfulProjectFilterListInput>
  spaceId?: Maybe<StringQueryOperatorInput>
  createdAt?: Maybe<DateQueryOperatorInput>
  updatedAt?: Maybe<DateQueryOperatorInput>
  sys?: Maybe<ContentfulHomepageFeaturedSysFilterInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type ContentfulHomepageFeaturedFilterListInput = {
  elemMatch?: Maybe<ContentfulHomepageFeaturedFilterInput>
}

export type ContentfulHomepageFeaturedGroupConnection = {
  __typename?: 'ContentfulHomepageFeaturedGroupConnection'
  totalCount: Scalars['Int']
  edges: Array<ContentfulHomepageFeaturedEdge>
  nodes: Array<ContentfulHomepageFeatured>
  pageInfo: PageInfo
  field: Scalars['String']
  fieldValue?: Maybe<Scalars['String']>
}

export type ContentfulHomepageFeaturedSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulHomepageFeaturedFieldsEnum>>>
  order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type ContentfulHomepageFeaturedSys = {
  __typename?: 'ContentfulHomepageFeaturedSys'
  type?: Maybe<Scalars['String']>
  revision?: Maybe<Scalars['Int']>
  contentType?: Maybe<ContentfulHomepageFeaturedSysContentType>
}

export type ContentfulHomepageFeaturedSysContentType = {
  __typename?: 'ContentfulHomepageFeaturedSysContentType'
  sys?: Maybe<ContentfulHomepageFeaturedSysContentTypeSys>
}

export type ContentfulHomepageFeaturedSysContentTypeFilterInput = {
  sys?: Maybe<ContentfulHomepageFeaturedSysContentTypeSysFilterInput>
}

export type ContentfulHomepageFeaturedSysContentTypeSys = {
  __typename?: 'ContentfulHomepageFeaturedSysContentTypeSys'
  type?: Maybe<Scalars['String']>
  linkType?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['String']>
}

export type ContentfulHomepageFeaturedSysContentTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>
  linkType?: Maybe<StringQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
}

export type ContentfulHomepageFeaturedSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>
  revision?: Maybe<IntQueryOperatorInput>
  contentType?: Maybe<ContentfulHomepageFeaturedSysContentTypeFilterInput>
}

export type ContentfulHomepageJumbotron = ContentfulReference &
  ContentfulEntry &
  Node & {
    __typename?: 'ContentfulHomepageJumbotron'
    contentful_id: Scalars['String']
    id: Scalars['ID']
    node_locale: Scalars['String']
    text?: Maybe<Scalars['String']>
    image?: Maybe<ContentfulAsset>
    spaceId?: Maybe<Scalars['String']>
    createdAt?: Maybe<Scalars['Date']>
    updatedAt?: Maybe<Scalars['Date']>
    sys?: Maybe<ContentfulHomepageJumbotronSys>
    parent?: Maybe<Node>
    children: Array<Node>
    internal: Internal
  }

export type ContentfulHomepageJumbotronCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type ContentfulHomepageJumbotronUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type ContentfulHomepageJumbotronConnection = {
  __typename?: 'ContentfulHomepageJumbotronConnection'
  totalCount: Scalars['Int']
  edges: Array<ContentfulHomepageJumbotronEdge>
  nodes: Array<ContentfulHomepageJumbotron>
  pageInfo: PageInfo
  distinct: Array<Scalars['String']>
  group: Array<ContentfulHomepageJumbotronGroupConnection>
}

export type ContentfulHomepageJumbotronConnectionDistinctArgs = {
  field: ContentfulHomepageJumbotronFieldsEnum
}

export type ContentfulHomepageJumbotronConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  field: ContentfulHomepageJumbotronFieldsEnum
}

export type ContentfulHomepageJumbotronEdge = {
  __typename?: 'ContentfulHomepageJumbotronEdge'
  next?: Maybe<ContentfulHomepageJumbotron>
  node: ContentfulHomepageJumbotron
  previous?: Maybe<ContentfulHomepageJumbotron>
}

export enum ContentfulHomepageJumbotronFieldsEnum {
  ContentfulId = 'contentful_id',
  Id = 'id',
  NodeLocale = 'node_locale',
  Text = 'text',
  ImageContentfulId = 'image___contentful_id',
  ImageId = 'image___id',
  ImageSpaceId = 'image___spaceId',
  ImageCreatedAt = 'image___createdAt',
  ImageUpdatedAt = 'image___updatedAt',
  ImageFileUrl = 'image___file___url',
  ImageFileDetailsSize = 'image___file___details___size',
  ImageFileFileName = 'image___file___fileName',
  ImageFileContentType = 'image___file___contentType',
  ImageTitle = 'image___title',
  ImageDescription = 'image___description',
  ImageNodeLocale = 'image___node_locale',
  ImageSysType = 'image___sys___type',
  ImageSysRevision = 'image___sys___revision',
  ImageLocalFileSourceInstanceName = 'image___localFile___sourceInstanceName',
  ImageLocalFileAbsolutePath = 'image___localFile___absolutePath',
  ImageLocalFileRelativePath = 'image___localFile___relativePath',
  ImageLocalFileExtension = 'image___localFile___extension',
  ImageLocalFileSize = 'image___localFile___size',
  ImageLocalFilePrettySize = 'image___localFile___prettySize',
  ImageLocalFileModifiedTime = 'image___localFile___modifiedTime',
  ImageLocalFileAccessTime = 'image___localFile___accessTime',
  ImageLocalFileChangeTime = 'image___localFile___changeTime',
  ImageLocalFileBirthTime = 'image___localFile___birthTime',
  ImageLocalFileRoot = 'image___localFile___root',
  ImageLocalFileDir = 'image___localFile___dir',
  ImageLocalFileBase = 'image___localFile___base',
  ImageLocalFileExt = 'image___localFile___ext',
  ImageLocalFileName = 'image___localFile___name',
  ImageLocalFileRelativeDirectory = 'image___localFile___relativeDirectory',
  ImageLocalFileDev = 'image___localFile___dev',
  ImageLocalFileMode = 'image___localFile___mode',
  ImageLocalFileNlink = 'image___localFile___nlink',
  ImageLocalFileUid = 'image___localFile___uid',
  ImageLocalFileGid = 'image___localFile___gid',
  ImageLocalFileRdev = 'image___localFile___rdev',
  ImageLocalFileIno = 'image___localFile___ino',
  ImageLocalFileAtimeMs = 'image___localFile___atimeMs',
  ImageLocalFileMtimeMs = 'image___localFile___mtimeMs',
  ImageLocalFileCtimeMs = 'image___localFile___ctimeMs',
  ImageLocalFileAtime = 'image___localFile___atime',
  ImageLocalFileMtime = 'image___localFile___mtime',
  ImageLocalFileCtime = 'image___localFile___ctime',
  ImageLocalFileBirthtime = 'image___localFile___birthtime',
  ImageLocalFileBirthtimeMs = 'image___localFile___birthtimeMs',
  ImageLocalFileBlksize = 'image___localFile___blksize',
  ImageLocalFileBlocks = 'image___localFile___blocks',
  ImageLocalFileUrl = 'image___localFile___url',
  ImageLocalFilePublicUrl = 'image___localFile___publicURL',
  ImageLocalFileChildImageSharpGatsbyImageData = 'image___localFile___childImageSharp___gatsbyImageData',
  ImageLocalFileChildImageSharpId = 'image___localFile___childImageSharp___id',
  ImageLocalFileChildImageSharpChildren = 'image___localFile___childImageSharp___children',
  ImageLocalFileId = 'image___localFile___id',
  ImageLocalFileParentId = 'image___localFile___parent___id',
  ImageLocalFileParentChildren = 'image___localFile___parent___children',
  ImageLocalFileChildren = 'image___localFile___children',
  ImageLocalFileChildrenId = 'image___localFile___children___id',
  ImageLocalFileChildrenChildren = 'image___localFile___children___children',
  ImageLocalFileInternalContent = 'image___localFile___internal___content',
  ImageLocalFileInternalContentDigest = 'image___localFile___internal___contentDigest',
  ImageLocalFileInternalDescription = 'image___localFile___internal___description',
  ImageLocalFileInternalFieldOwners = 'image___localFile___internal___fieldOwners',
  ImageLocalFileInternalIgnoreType = 'image___localFile___internal___ignoreType',
  ImageLocalFileInternalMediaType = 'image___localFile___internal___mediaType',
  ImageLocalFileInternalOwner = 'image___localFile___internal___owner',
  ImageLocalFileInternalType = 'image___localFile___internal___type',
  ImageFixedBase64 = 'image___fixed___base64',
  ImageFixedTracedSvg = 'image___fixed___tracedSVG',
  ImageFixedAspectRatio = 'image___fixed___aspectRatio',
  ImageFixedWidth = 'image___fixed___width',
  ImageFixedHeight = 'image___fixed___height',
  ImageFixedSrc = 'image___fixed___src',
  ImageFixedSrcSet = 'image___fixed___srcSet',
  ImageFixedSrcWebp = 'image___fixed___srcWebp',
  ImageFixedSrcSetWebp = 'image___fixed___srcSetWebp',
  ImageResolutionsBase64 = 'image___resolutions___base64',
  ImageResolutionsTracedSvg = 'image___resolutions___tracedSVG',
  ImageResolutionsAspectRatio = 'image___resolutions___aspectRatio',
  ImageResolutionsWidth = 'image___resolutions___width',
  ImageResolutionsHeight = 'image___resolutions___height',
  ImageResolutionsSrc = 'image___resolutions___src',
  ImageResolutionsSrcSet = 'image___resolutions___srcSet',
  ImageResolutionsSrcWebp = 'image___resolutions___srcWebp',
  ImageResolutionsSrcSetWebp = 'image___resolutions___srcSetWebp',
  ImageFluidBase64 = 'image___fluid___base64',
  ImageFluidTracedSvg = 'image___fluid___tracedSVG',
  ImageFluidAspectRatio = 'image___fluid___aspectRatio',
  ImageFluidSrc = 'image___fluid___src',
  ImageFluidSrcSet = 'image___fluid___srcSet',
  ImageFluidSrcWebp = 'image___fluid___srcWebp',
  ImageFluidSrcSetWebp = 'image___fluid___srcSetWebp',
  ImageFluidSizes = 'image___fluid___sizes',
  ImageSizesBase64 = 'image___sizes___base64',
  ImageSizesTracedSvg = 'image___sizes___tracedSVG',
  ImageSizesAspectRatio = 'image___sizes___aspectRatio',
  ImageSizesSrc = 'image___sizes___src',
  ImageSizesSrcSet = 'image___sizes___srcSet',
  ImageSizesSrcWebp = 'image___sizes___srcWebp',
  ImageSizesSrcSetWebp = 'image___sizes___srcSetWebp',
  ImageSizesSizes = 'image___sizes___sizes',
  ImageResizeBase64 = 'image___resize___base64',
  ImageResizeTracedSvg = 'image___resize___tracedSVG',
  ImageResizeSrc = 'image___resize___src',
  ImageResizeWidth = 'image___resize___width',
  ImageResizeHeight = 'image___resize___height',
  ImageResizeAspectRatio = 'image___resize___aspectRatio',
  ImageParentId = 'image___parent___id',
  ImageParentParentId = 'image___parent___parent___id',
  ImageParentParentChildren = 'image___parent___parent___children',
  ImageParentChildren = 'image___parent___children',
  ImageParentChildrenId = 'image___parent___children___id',
  ImageParentChildrenChildren = 'image___parent___children___children',
  ImageParentInternalContent = 'image___parent___internal___content',
  ImageParentInternalContentDigest = 'image___parent___internal___contentDigest',
  ImageParentInternalDescription = 'image___parent___internal___description',
  ImageParentInternalFieldOwners = 'image___parent___internal___fieldOwners',
  ImageParentInternalIgnoreType = 'image___parent___internal___ignoreType',
  ImageParentInternalMediaType = 'image___parent___internal___mediaType',
  ImageParentInternalOwner = 'image___parent___internal___owner',
  ImageParentInternalType = 'image___parent___internal___type',
  ImageChildren = 'image___children',
  ImageChildrenId = 'image___children___id',
  ImageChildrenParentId = 'image___children___parent___id',
  ImageChildrenParentChildren = 'image___children___parent___children',
  ImageChildrenChildren = 'image___children___children',
  ImageChildrenChildrenId = 'image___children___children___id',
  ImageChildrenChildrenChildren = 'image___children___children___children',
  ImageChildrenInternalContent = 'image___children___internal___content',
  ImageChildrenInternalContentDigest = 'image___children___internal___contentDigest',
  ImageChildrenInternalDescription = 'image___children___internal___description',
  ImageChildrenInternalFieldOwners = 'image___children___internal___fieldOwners',
  ImageChildrenInternalIgnoreType = 'image___children___internal___ignoreType',
  ImageChildrenInternalMediaType = 'image___children___internal___mediaType',
  ImageChildrenInternalOwner = 'image___children___internal___owner',
  ImageChildrenInternalType = 'image___children___internal___type',
  ImageInternalContent = 'image___internal___content',
  ImageInternalContentDigest = 'image___internal___contentDigest',
  ImageInternalDescription = 'image___internal___description',
  ImageInternalFieldOwners = 'image___internal___fieldOwners',
  ImageInternalIgnoreType = 'image___internal___ignoreType',
  ImageInternalMediaType = 'image___internal___mediaType',
  ImageInternalOwner = 'image___internal___owner',
  ImageInternalType = 'image___internal___type',
  SpaceId = 'spaceId',
  CreatedAt = 'createdAt',
  UpdatedAt = 'updatedAt',
  SysType = 'sys___type',
  SysRevision = 'sys___revision',
  SysContentTypeSysType = 'sys___contentType___sys___type',
  SysContentTypeSysLinkType = 'sys___contentType___sys___linkType',
  SysContentTypeSysId = 'sys___contentType___sys___id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
}

export type ContentfulHomepageJumbotronFilterInput = {
  contentful_id?: Maybe<StringQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  node_locale?: Maybe<StringQueryOperatorInput>
  text?: Maybe<StringQueryOperatorInput>
  image?: Maybe<ContentfulAssetFilterInput>
  spaceId?: Maybe<StringQueryOperatorInput>
  createdAt?: Maybe<DateQueryOperatorInput>
  updatedAt?: Maybe<DateQueryOperatorInput>
  sys?: Maybe<ContentfulHomepageJumbotronSysFilterInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type ContentfulHomepageJumbotronGroupConnection = {
  __typename?: 'ContentfulHomepageJumbotronGroupConnection'
  totalCount: Scalars['Int']
  edges: Array<ContentfulHomepageJumbotronEdge>
  nodes: Array<ContentfulHomepageJumbotron>
  pageInfo: PageInfo
  field: Scalars['String']
  fieldValue?: Maybe<Scalars['String']>
}

export type ContentfulHomepageJumbotronSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulHomepageJumbotronFieldsEnum>>>
  order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type ContentfulHomepageJumbotronSys = {
  __typename?: 'ContentfulHomepageJumbotronSys'
  type?: Maybe<Scalars['String']>
  revision?: Maybe<Scalars['Int']>
  contentType?: Maybe<ContentfulHomepageJumbotronSysContentType>
}

export type ContentfulHomepageJumbotronSysContentType = {
  __typename?: 'ContentfulHomepageJumbotronSysContentType'
  sys?: Maybe<ContentfulHomepageJumbotronSysContentTypeSys>
}

export type ContentfulHomepageJumbotronSysContentTypeFilterInput = {
  sys?: Maybe<ContentfulHomepageJumbotronSysContentTypeSysFilterInput>
}

export type ContentfulHomepageJumbotronSysContentTypeSys = {
  __typename?: 'ContentfulHomepageJumbotronSysContentTypeSys'
  type?: Maybe<Scalars['String']>
  linkType?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['String']>
}

export type ContentfulHomepageJumbotronSysContentTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>
  linkType?: Maybe<StringQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
}

export type ContentfulHomepageJumbotronSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>
  revision?: Maybe<IntQueryOperatorInput>
  contentType?: Maybe<ContentfulHomepageJumbotronSysContentTypeFilterInput>
}

export type ContentfulHomepageLatestWork = ContentfulReference &
  ContentfulEntry &
  Node & {
    __typename?: 'ContentfulHomepageLatestWork'
    contentful_id: Scalars['String']
    id: Scalars['ID']
    node_locale: Scalars['String']
    project?: Maybe<ContentfulProject>
    featuredPhotos?: Maybe<Array<Maybe<ContentfulAsset>>>
    spaceId?: Maybe<Scalars['String']>
    createdAt?: Maybe<Scalars['Date']>
    updatedAt?: Maybe<Scalars['Date']>
    sys?: Maybe<ContentfulHomepageLatestWorkSys>
    parent?: Maybe<Node>
    children: Array<Node>
    internal: Internal
  }

export type ContentfulHomepageLatestWorkCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type ContentfulHomepageLatestWorkUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type ContentfulHomepageLatestWorkConnection = {
  __typename?: 'ContentfulHomepageLatestWorkConnection'
  totalCount: Scalars['Int']
  edges: Array<ContentfulHomepageLatestWorkEdge>
  nodes: Array<ContentfulHomepageLatestWork>
  pageInfo: PageInfo
  distinct: Array<Scalars['String']>
  group: Array<ContentfulHomepageLatestWorkGroupConnection>
}

export type ContentfulHomepageLatestWorkConnectionDistinctArgs = {
  field: ContentfulHomepageLatestWorkFieldsEnum
}

export type ContentfulHomepageLatestWorkConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  field: ContentfulHomepageLatestWorkFieldsEnum
}

export type ContentfulHomepageLatestWorkEdge = {
  __typename?: 'ContentfulHomepageLatestWorkEdge'
  next?: Maybe<ContentfulHomepageLatestWork>
  node: ContentfulHomepageLatestWork
  previous?: Maybe<ContentfulHomepageLatestWork>
}

export enum ContentfulHomepageLatestWorkFieldsEnum {
  ContentfulId = 'contentful_id',
  Id = 'id',
  NodeLocale = 'node_locale',
  ProjectContentfulId = 'project___contentful_id',
  ProjectId = 'project___id',
  ProjectNodeLocale = 'project___node_locale',
  ProjectTitle = 'project___title',
  ProjectSlug = 'project___slug',
  ProjectThemeContentfulId = 'project___theme___contentful_id',
  ProjectThemeId = 'project___theme___id',
  ProjectThemeNodeLocale = 'project___theme___node_locale',
  ProjectThemeTitle = 'project___theme___title',
  ProjectThemeSlug = 'project___theme___slug',
  ProjectThemeCoverImageContentfulId = 'project___theme___coverImage___contentful_id',
  ProjectThemeCoverImageId = 'project___theme___coverImage___id',
  ProjectThemeCoverImageSpaceId = 'project___theme___coverImage___spaceId',
  ProjectThemeCoverImageCreatedAt = 'project___theme___coverImage___createdAt',
  ProjectThemeCoverImageUpdatedAt = 'project___theme___coverImage___updatedAt',
  ProjectThemeCoverImageTitle = 'project___theme___coverImage___title',
  ProjectThemeCoverImageDescription = 'project___theme___coverImage___description',
  ProjectThemeCoverImageNodeLocale = 'project___theme___coverImage___node_locale',
  ProjectThemeCoverImageChildren = 'project___theme___coverImage___children',
  ProjectThemeFeaturedPhotos = 'project___theme___featuredPhotos',
  ProjectThemeFeaturedPhotosContentfulId = 'project___theme___featuredPhotos___contentful_id',
  ProjectThemeFeaturedPhotosId = 'project___theme___featuredPhotos___id',
  ProjectThemeFeaturedPhotosSpaceId = 'project___theme___featuredPhotos___spaceId',
  ProjectThemeFeaturedPhotosCreatedAt = 'project___theme___featuredPhotos___createdAt',
  ProjectThemeFeaturedPhotosUpdatedAt = 'project___theme___featuredPhotos___updatedAt',
  ProjectThemeFeaturedPhotosTitle = 'project___theme___featuredPhotos___title',
  ProjectThemeFeaturedPhotosDescription = 'project___theme___featuredPhotos___description',
  ProjectThemeFeaturedPhotosNodeLocale = 'project___theme___featuredPhotos___node_locale',
  ProjectThemeFeaturedPhotosChildren = 'project___theme___featuredPhotos___children',
  ProjectThemeProject = 'project___theme___project',
  ProjectThemeProjectContentfulId = 'project___theme___project___contentful_id',
  ProjectThemeProjectId = 'project___theme___project___id',
  ProjectThemeProjectNodeLocale = 'project___theme___project___node_locale',
  ProjectThemeProjectTitle = 'project___theme___project___title',
  ProjectThemeProjectSlug = 'project___theme___project___slug',
  ProjectThemeProjectPhotos = 'project___theme___project___photos',
  ProjectThemeProjectSpaceId = 'project___theme___project___spaceId',
  ProjectThemeProjectCreatedAt = 'project___theme___project___createdAt',
  ProjectThemeProjectUpdatedAt = 'project___theme___project___updatedAt',
  ProjectThemeProjectHomepageFeatured = 'project___theme___project___homepage___featured',
  ProjectThemeProjectHomepageLatestWork = 'project___theme___project___homepage___latest_work',
  ProjectThemeProjectChildren = 'project___theme___project___children',
  ProjectThemeHomepageFeatured = 'project___theme___homepage___featured',
  ProjectThemeHomepageFeaturedContentfulId = 'project___theme___homepage___featured___contentful_id',
  ProjectThemeHomepageFeaturedId = 'project___theme___homepage___featured___id',
  ProjectThemeHomepageFeaturedNodeLocale = 'project___theme___homepage___featured___node_locale',
  ProjectThemeHomepageFeaturedThemes = 'project___theme___homepage___featured___themes',
  ProjectThemeHomepageFeaturedProjects = 'project___theme___homepage___featured___projects',
  ProjectThemeHomepageFeaturedSpaceId = 'project___theme___homepage___featured___spaceId',
  ProjectThemeHomepageFeaturedCreatedAt = 'project___theme___homepage___featured___createdAt',
  ProjectThemeHomepageFeaturedUpdatedAt = 'project___theme___homepage___featured___updatedAt',
  ProjectThemeHomepageFeaturedChildren = 'project___theme___homepage___featured___children',
  ProjectThemeSpaceId = 'project___theme___spaceId',
  ProjectThemeCreatedAt = 'project___theme___createdAt',
  ProjectThemeUpdatedAt = 'project___theme___updatedAt',
  ProjectThemeSysType = 'project___theme___sys___type',
  ProjectThemeSysRevision = 'project___theme___sys___revision',
  ProjectThemeParentId = 'project___theme___parent___id',
  ProjectThemeParentChildren = 'project___theme___parent___children',
  ProjectThemeChildren = 'project___theme___children',
  ProjectThemeChildrenId = 'project___theme___children___id',
  ProjectThemeChildrenChildren = 'project___theme___children___children',
  ProjectThemeInternalContent = 'project___theme___internal___content',
  ProjectThemeInternalContentDigest = 'project___theme___internal___contentDigest',
  ProjectThemeInternalDescription = 'project___theme___internal___description',
  ProjectThemeInternalFieldOwners = 'project___theme___internal___fieldOwners',
  ProjectThemeInternalIgnoreType = 'project___theme___internal___ignoreType',
  ProjectThemeInternalMediaType = 'project___theme___internal___mediaType',
  ProjectThemeInternalOwner = 'project___theme___internal___owner',
  ProjectThemeInternalType = 'project___theme___internal___type',
  ProjectCoverImageContentfulId = 'project___coverImage___contentful_id',
  ProjectCoverImageId = 'project___coverImage___id',
  ProjectCoverImageSpaceId = 'project___coverImage___spaceId',
  ProjectCoverImageCreatedAt = 'project___coverImage___createdAt',
  ProjectCoverImageUpdatedAt = 'project___coverImage___updatedAt',
  ProjectCoverImageFileUrl = 'project___coverImage___file___url',
  ProjectCoverImageFileFileName = 'project___coverImage___file___fileName',
  ProjectCoverImageFileContentType = 'project___coverImage___file___contentType',
  ProjectCoverImageTitle = 'project___coverImage___title',
  ProjectCoverImageDescription = 'project___coverImage___description',
  ProjectCoverImageNodeLocale = 'project___coverImage___node_locale',
  ProjectCoverImageSysType = 'project___coverImage___sys___type',
  ProjectCoverImageSysRevision = 'project___coverImage___sys___revision',
  ProjectCoverImageLocalFileSourceInstanceName = 'project___coverImage___localFile___sourceInstanceName',
  ProjectCoverImageLocalFileAbsolutePath = 'project___coverImage___localFile___absolutePath',
  ProjectCoverImageLocalFileRelativePath = 'project___coverImage___localFile___relativePath',
  ProjectCoverImageLocalFileExtension = 'project___coverImage___localFile___extension',
  ProjectCoverImageLocalFileSize = 'project___coverImage___localFile___size',
  ProjectCoverImageLocalFilePrettySize = 'project___coverImage___localFile___prettySize',
  ProjectCoverImageLocalFileModifiedTime = 'project___coverImage___localFile___modifiedTime',
  ProjectCoverImageLocalFileAccessTime = 'project___coverImage___localFile___accessTime',
  ProjectCoverImageLocalFileChangeTime = 'project___coverImage___localFile___changeTime',
  ProjectCoverImageLocalFileBirthTime = 'project___coverImage___localFile___birthTime',
  ProjectCoverImageLocalFileRoot = 'project___coverImage___localFile___root',
  ProjectCoverImageLocalFileDir = 'project___coverImage___localFile___dir',
  ProjectCoverImageLocalFileBase = 'project___coverImage___localFile___base',
  ProjectCoverImageLocalFileExt = 'project___coverImage___localFile___ext',
  ProjectCoverImageLocalFileName = 'project___coverImage___localFile___name',
  ProjectCoverImageLocalFileRelativeDirectory = 'project___coverImage___localFile___relativeDirectory',
  ProjectCoverImageLocalFileDev = 'project___coverImage___localFile___dev',
  ProjectCoverImageLocalFileMode = 'project___coverImage___localFile___mode',
  ProjectCoverImageLocalFileNlink = 'project___coverImage___localFile___nlink',
  ProjectCoverImageLocalFileUid = 'project___coverImage___localFile___uid',
  ProjectCoverImageLocalFileGid = 'project___coverImage___localFile___gid',
  ProjectCoverImageLocalFileRdev = 'project___coverImage___localFile___rdev',
  ProjectCoverImageLocalFileIno = 'project___coverImage___localFile___ino',
  ProjectCoverImageLocalFileAtimeMs = 'project___coverImage___localFile___atimeMs',
  ProjectCoverImageLocalFileMtimeMs = 'project___coverImage___localFile___mtimeMs',
  ProjectCoverImageLocalFileCtimeMs = 'project___coverImage___localFile___ctimeMs',
  ProjectCoverImageLocalFileAtime = 'project___coverImage___localFile___atime',
  ProjectCoverImageLocalFileMtime = 'project___coverImage___localFile___mtime',
  ProjectCoverImageLocalFileCtime = 'project___coverImage___localFile___ctime',
  ProjectCoverImageLocalFileBirthtime = 'project___coverImage___localFile___birthtime',
  ProjectCoverImageLocalFileBirthtimeMs = 'project___coverImage___localFile___birthtimeMs',
  ProjectCoverImageLocalFileBlksize = 'project___coverImage___localFile___blksize',
  ProjectCoverImageLocalFileBlocks = 'project___coverImage___localFile___blocks',
  ProjectCoverImageLocalFileUrl = 'project___coverImage___localFile___url',
  ProjectCoverImageLocalFilePublicUrl = 'project___coverImage___localFile___publicURL',
  ProjectCoverImageLocalFileId = 'project___coverImage___localFile___id',
  ProjectCoverImageLocalFileChildren = 'project___coverImage___localFile___children',
  ProjectCoverImageFixedBase64 = 'project___coverImage___fixed___base64',
  ProjectCoverImageFixedTracedSvg = 'project___coverImage___fixed___tracedSVG',
  ProjectCoverImageFixedAspectRatio = 'project___coverImage___fixed___aspectRatio',
  ProjectCoverImageFixedWidth = 'project___coverImage___fixed___width',
  ProjectCoverImageFixedHeight = 'project___coverImage___fixed___height',
  ProjectCoverImageFixedSrc = 'project___coverImage___fixed___src',
  ProjectCoverImageFixedSrcSet = 'project___coverImage___fixed___srcSet',
  ProjectCoverImageFixedSrcWebp = 'project___coverImage___fixed___srcWebp',
  ProjectCoverImageFixedSrcSetWebp = 'project___coverImage___fixed___srcSetWebp',
  ProjectCoverImageResolutionsBase64 = 'project___coverImage___resolutions___base64',
  ProjectCoverImageResolutionsTracedSvg = 'project___coverImage___resolutions___tracedSVG',
  ProjectCoverImageResolutionsAspectRatio = 'project___coverImage___resolutions___aspectRatio',
  ProjectCoverImageResolutionsWidth = 'project___coverImage___resolutions___width',
  ProjectCoverImageResolutionsHeight = 'project___coverImage___resolutions___height',
  ProjectCoverImageResolutionsSrc = 'project___coverImage___resolutions___src',
  ProjectCoverImageResolutionsSrcSet = 'project___coverImage___resolutions___srcSet',
  ProjectCoverImageResolutionsSrcWebp = 'project___coverImage___resolutions___srcWebp',
  ProjectCoverImageResolutionsSrcSetWebp = 'project___coverImage___resolutions___srcSetWebp',
  ProjectCoverImageFluidBase64 = 'project___coverImage___fluid___base64',
  ProjectCoverImageFluidTracedSvg = 'project___coverImage___fluid___tracedSVG',
  ProjectCoverImageFluidAspectRatio = 'project___coverImage___fluid___aspectRatio',
  ProjectCoverImageFluidSrc = 'project___coverImage___fluid___src',
  ProjectCoverImageFluidSrcSet = 'project___coverImage___fluid___srcSet',
  ProjectCoverImageFluidSrcWebp = 'project___coverImage___fluid___srcWebp',
  ProjectCoverImageFluidSrcSetWebp = 'project___coverImage___fluid___srcSetWebp',
  ProjectCoverImageFluidSizes = 'project___coverImage___fluid___sizes',
  ProjectCoverImageSizesBase64 = 'project___coverImage___sizes___base64',
  ProjectCoverImageSizesTracedSvg = 'project___coverImage___sizes___tracedSVG',
  ProjectCoverImageSizesAspectRatio = 'project___coverImage___sizes___aspectRatio',
  ProjectCoverImageSizesSrc = 'project___coverImage___sizes___src',
  ProjectCoverImageSizesSrcSet = 'project___coverImage___sizes___srcSet',
  ProjectCoverImageSizesSrcWebp = 'project___coverImage___sizes___srcWebp',
  ProjectCoverImageSizesSrcSetWebp = 'project___coverImage___sizes___srcSetWebp',
  ProjectCoverImageSizesSizes = 'project___coverImage___sizes___sizes',
  ProjectCoverImageResizeBase64 = 'project___coverImage___resize___base64',
  ProjectCoverImageResizeTracedSvg = 'project___coverImage___resize___tracedSVG',
  ProjectCoverImageResizeSrc = 'project___coverImage___resize___src',
  ProjectCoverImageResizeWidth = 'project___coverImage___resize___width',
  ProjectCoverImageResizeHeight = 'project___coverImage___resize___height',
  ProjectCoverImageResizeAspectRatio = 'project___coverImage___resize___aspectRatio',
  ProjectCoverImageParentId = 'project___coverImage___parent___id',
  ProjectCoverImageParentChildren = 'project___coverImage___parent___children',
  ProjectCoverImageChildren = 'project___coverImage___children',
  ProjectCoverImageChildrenId = 'project___coverImage___children___id',
  ProjectCoverImageChildrenChildren = 'project___coverImage___children___children',
  ProjectCoverImageInternalContent = 'project___coverImage___internal___content',
  ProjectCoverImageInternalContentDigest = 'project___coverImage___internal___contentDigest',
  ProjectCoverImageInternalDescription = 'project___coverImage___internal___description',
  ProjectCoverImageInternalFieldOwners = 'project___coverImage___internal___fieldOwners',
  ProjectCoverImageInternalIgnoreType = 'project___coverImage___internal___ignoreType',
  ProjectCoverImageInternalMediaType = 'project___coverImage___internal___mediaType',
  ProjectCoverImageInternalOwner = 'project___coverImage___internal___owner',
  ProjectCoverImageInternalType = 'project___coverImage___internal___type',
  ProjectPhotos = 'project___photos',
  ProjectPhotosContentfulId = 'project___photos___contentful_id',
  ProjectPhotosId = 'project___photos___id',
  ProjectPhotosSpaceId = 'project___photos___spaceId',
  ProjectPhotosCreatedAt = 'project___photos___createdAt',
  ProjectPhotosUpdatedAt = 'project___photos___updatedAt',
  ProjectPhotosFileUrl = 'project___photos___file___url',
  ProjectPhotosFileFileName = 'project___photos___file___fileName',
  ProjectPhotosFileContentType = 'project___photos___file___contentType',
  ProjectPhotosTitle = 'project___photos___title',
  ProjectPhotosDescription = 'project___photos___description',
  ProjectPhotosNodeLocale = 'project___photos___node_locale',
  ProjectPhotosSysType = 'project___photos___sys___type',
  ProjectPhotosSysRevision = 'project___photos___sys___revision',
  ProjectPhotosLocalFileSourceInstanceName = 'project___photos___localFile___sourceInstanceName',
  ProjectPhotosLocalFileAbsolutePath = 'project___photos___localFile___absolutePath',
  ProjectPhotosLocalFileRelativePath = 'project___photos___localFile___relativePath',
  ProjectPhotosLocalFileExtension = 'project___photos___localFile___extension',
  ProjectPhotosLocalFileSize = 'project___photos___localFile___size',
  ProjectPhotosLocalFilePrettySize = 'project___photos___localFile___prettySize',
  ProjectPhotosLocalFileModifiedTime = 'project___photos___localFile___modifiedTime',
  ProjectPhotosLocalFileAccessTime = 'project___photos___localFile___accessTime',
  ProjectPhotosLocalFileChangeTime = 'project___photos___localFile___changeTime',
  ProjectPhotosLocalFileBirthTime = 'project___photos___localFile___birthTime',
  ProjectPhotosLocalFileRoot = 'project___photos___localFile___root',
  ProjectPhotosLocalFileDir = 'project___photos___localFile___dir',
  ProjectPhotosLocalFileBase = 'project___photos___localFile___base',
  ProjectPhotosLocalFileExt = 'project___photos___localFile___ext',
  ProjectPhotosLocalFileName = 'project___photos___localFile___name',
  ProjectPhotosLocalFileRelativeDirectory = 'project___photos___localFile___relativeDirectory',
  ProjectPhotosLocalFileDev = 'project___photos___localFile___dev',
  ProjectPhotosLocalFileMode = 'project___photos___localFile___mode',
  ProjectPhotosLocalFileNlink = 'project___photos___localFile___nlink',
  ProjectPhotosLocalFileUid = 'project___photos___localFile___uid',
  ProjectPhotosLocalFileGid = 'project___photos___localFile___gid',
  ProjectPhotosLocalFileRdev = 'project___photos___localFile___rdev',
  ProjectPhotosLocalFileIno = 'project___photos___localFile___ino',
  ProjectPhotosLocalFileAtimeMs = 'project___photos___localFile___atimeMs',
  ProjectPhotosLocalFileMtimeMs = 'project___photos___localFile___mtimeMs',
  ProjectPhotosLocalFileCtimeMs = 'project___photos___localFile___ctimeMs',
  ProjectPhotosLocalFileAtime = 'project___photos___localFile___atime',
  ProjectPhotosLocalFileMtime = 'project___photos___localFile___mtime',
  ProjectPhotosLocalFileCtime = 'project___photos___localFile___ctime',
  ProjectPhotosLocalFileBirthtime = 'project___photos___localFile___birthtime',
  ProjectPhotosLocalFileBirthtimeMs = 'project___photos___localFile___birthtimeMs',
  ProjectPhotosLocalFileBlksize = 'project___photos___localFile___blksize',
  ProjectPhotosLocalFileBlocks = 'project___photos___localFile___blocks',
  ProjectPhotosLocalFileUrl = 'project___photos___localFile___url',
  ProjectPhotosLocalFilePublicUrl = 'project___photos___localFile___publicURL',
  ProjectPhotosLocalFileId = 'project___photos___localFile___id',
  ProjectPhotosLocalFileChildren = 'project___photos___localFile___children',
  ProjectPhotosFixedBase64 = 'project___photos___fixed___base64',
  ProjectPhotosFixedTracedSvg = 'project___photos___fixed___tracedSVG',
  ProjectPhotosFixedAspectRatio = 'project___photos___fixed___aspectRatio',
  ProjectPhotosFixedWidth = 'project___photos___fixed___width',
  ProjectPhotosFixedHeight = 'project___photos___fixed___height',
  ProjectPhotosFixedSrc = 'project___photos___fixed___src',
  ProjectPhotosFixedSrcSet = 'project___photos___fixed___srcSet',
  ProjectPhotosFixedSrcWebp = 'project___photos___fixed___srcWebp',
  ProjectPhotosFixedSrcSetWebp = 'project___photos___fixed___srcSetWebp',
  ProjectPhotosResolutionsBase64 = 'project___photos___resolutions___base64',
  ProjectPhotosResolutionsTracedSvg = 'project___photos___resolutions___tracedSVG',
  ProjectPhotosResolutionsAspectRatio = 'project___photos___resolutions___aspectRatio',
  ProjectPhotosResolutionsWidth = 'project___photos___resolutions___width',
  ProjectPhotosResolutionsHeight = 'project___photos___resolutions___height',
  ProjectPhotosResolutionsSrc = 'project___photos___resolutions___src',
  ProjectPhotosResolutionsSrcSet = 'project___photos___resolutions___srcSet',
  ProjectPhotosResolutionsSrcWebp = 'project___photos___resolutions___srcWebp',
  ProjectPhotosResolutionsSrcSetWebp = 'project___photos___resolutions___srcSetWebp',
  ProjectPhotosFluidBase64 = 'project___photos___fluid___base64',
  ProjectPhotosFluidTracedSvg = 'project___photos___fluid___tracedSVG',
  ProjectPhotosFluidAspectRatio = 'project___photos___fluid___aspectRatio',
  ProjectPhotosFluidSrc = 'project___photos___fluid___src',
  ProjectPhotosFluidSrcSet = 'project___photos___fluid___srcSet',
  ProjectPhotosFluidSrcWebp = 'project___photos___fluid___srcWebp',
  ProjectPhotosFluidSrcSetWebp = 'project___photos___fluid___srcSetWebp',
  ProjectPhotosFluidSizes = 'project___photos___fluid___sizes',
  ProjectPhotosSizesBase64 = 'project___photos___sizes___base64',
  ProjectPhotosSizesTracedSvg = 'project___photos___sizes___tracedSVG',
  ProjectPhotosSizesAspectRatio = 'project___photos___sizes___aspectRatio',
  ProjectPhotosSizesSrc = 'project___photos___sizes___src',
  ProjectPhotosSizesSrcSet = 'project___photos___sizes___srcSet',
  ProjectPhotosSizesSrcWebp = 'project___photos___sizes___srcWebp',
  ProjectPhotosSizesSrcSetWebp = 'project___photos___sizes___srcSetWebp',
  ProjectPhotosSizesSizes = 'project___photos___sizes___sizes',
  ProjectPhotosResizeBase64 = 'project___photos___resize___base64',
  ProjectPhotosResizeTracedSvg = 'project___photos___resize___tracedSVG',
  ProjectPhotosResizeSrc = 'project___photos___resize___src',
  ProjectPhotosResizeWidth = 'project___photos___resize___width',
  ProjectPhotosResizeHeight = 'project___photos___resize___height',
  ProjectPhotosResizeAspectRatio = 'project___photos___resize___aspectRatio',
  ProjectPhotosParentId = 'project___photos___parent___id',
  ProjectPhotosParentChildren = 'project___photos___parent___children',
  ProjectPhotosChildren = 'project___photos___children',
  ProjectPhotosChildrenId = 'project___photos___children___id',
  ProjectPhotosChildrenChildren = 'project___photos___children___children',
  ProjectPhotosInternalContent = 'project___photos___internal___content',
  ProjectPhotosInternalContentDigest = 'project___photos___internal___contentDigest',
  ProjectPhotosInternalDescription = 'project___photos___internal___description',
  ProjectPhotosInternalFieldOwners = 'project___photos___internal___fieldOwners',
  ProjectPhotosInternalIgnoreType = 'project___photos___internal___ignoreType',
  ProjectPhotosInternalMediaType = 'project___photos___internal___mediaType',
  ProjectPhotosInternalOwner = 'project___photos___internal___owner',
  ProjectPhotosInternalType = 'project___photos___internal___type',
  ProjectDescriptionId = 'project___description___id',
  ProjectDescriptionParentId = 'project___description___parent___id',
  ProjectDescriptionParentChildren = 'project___description___parent___children',
  ProjectDescriptionChildren = 'project___description___children',
  ProjectDescriptionChildrenId = 'project___description___children___id',
  ProjectDescriptionChildrenChildren = 'project___description___children___children',
  ProjectDescriptionInternalContent = 'project___description___internal___content',
  ProjectDescriptionInternalContentDigest = 'project___description___internal___contentDigest',
  ProjectDescriptionInternalDescription = 'project___description___internal___description',
  ProjectDescriptionInternalFieldOwners = 'project___description___internal___fieldOwners',
  ProjectDescriptionInternalIgnoreType = 'project___description___internal___ignoreType',
  ProjectDescriptionInternalMediaType = 'project___description___internal___mediaType',
  ProjectDescriptionInternalOwner = 'project___description___internal___owner',
  ProjectDescriptionInternalType = 'project___description___internal___type',
  ProjectDescriptionDescription = 'project___description___description',
  ProjectDescriptionSysType = 'project___description___sys___type',
  ProjectSpaceId = 'project___spaceId',
  ProjectCreatedAt = 'project___createdAt',
  ProjectUpdatedAt = 'project___updatedAt',
  ProjectSysType = 'project___sys___type',
  ProjectSysRevision = 'project___sys___revision',
  ProjectHomepageFeatured = 'project___homepage___featured',
  ProjectHomepageFeaturedContentfulId = 'project___homepage___featured___contentful_id',
  ProjectHomepageFeaturedId = 'project___homepage___featured___id',
  ProjectHomepageFeaturedNodeLocale = 'project___homepage___featured___node_locale',
  ProjectHomepageFeaturedThemes = 'project___homepage___featured___themes',
  ProjectHomepageFeaturedThemesContentfulId = 'project___homepage___featured___themes___contentful_id',
  ProjectHomepageFeaturedThemesId = 'project___homepage___featured___themes___id',
  ProjectHomepageFeaturedThemesNodeLocale = 'project___homepage___featured___themes___node_locale',
  ProjectHomepageFeaturedThemesTitle = 'project___homepage___featured___themes___title',
  ProjectHomepageFeaturedThemesSlug = 'project___homepage___featured___themes___slug',
  ProjectHomepageFeaturedThemesFeaturedPhotos = 'project___homepage___featured___themes___featuredPhotos',
  ProjectHomepageFeaturedThemesProject = 'project___homepage___featured___themes___project',
  ProjectHomepageFeaturedThemesHomepageFeatured = 'project___homepage___featured___themes___homepage___featured',
  ProjectHomepageFeaturedThemesSpaceId = 'project___homepage___featured___themes___spaceId',
  ProjectHomepageFeaturedThemesCreatedAt = 'project___homepage___featured___themes___createdAt',
  ProjectHomepageFeaturedThemesUpdatedAt = 'project___homepage___featured___themes___updatedAt',
  ProjectHomepageFeaturedThemesChildren = 'project___homepage___featured___themes___children',
  ProjectHomepageFeaturedProjects = 'project___homepage___featured___projects',
  ProjectHomepageFeaturedProjectsContentfulId = 'project___homepage___featured___projects___contentful_id',
  ProjectHomepageFeaturedProjectsId = 'project___homepage___featured___projects___id',
  ProjectHomepageFeaturedProjectsNodeLocale = 'project___homepage___featured___projects___node_locale',
  ProjectHomepageFeaturedProjectsTitle = 'project___homepage___featured___projects___title',
  ProjectHomepageFeaturedProjectsSlug = 'project___homepage___featured___projects___slug',
  ProjectHomepageFeaturedProjectsPhotos = 'project___homepage___featured___projects___photos',
  ProjectHomepageFeaturedProjectsSpaceId = 'project___homepage___featured___projects___spaceId',
  ProjectHomepageFeaturedProjectsCreatedAt = 'project___homepage___featured___projects___createdAt',
  ProjectHomepageFeaturedProjectsUpdatedAt = 'project___homepage___featured___projects___updatedAt',
  ProjectHomepageFeaturedProjectsHomepageFeatured = 'project___homepage___featured___projects___homepage___featured',
  ProjectHomepageFeaturedProjectsHomepageLatestWork = 'project___homepage___featured___projects___homepage___latest_work',
  ProjectHomepageFeaturedProjectsChildren = 'project___homepage___featured___projects___children',
  ProjectHomepageFeaturedSpaceId = 'project___homepage___featured___spaceId',
  ProjectHomepageFeaturedCreatedAt = 'project___homepage___featured___createdAt',
  ProjectHomepageFeaturedUpdatedAt = 'project___homepage___featured___updatedAt',
  ProjectHomepageFeaturedSysType = 'project___homepage___featured___sys___type',
  ProjectHomepageFeaturedSysRevision = 'project___homepage___featured___sys___revision',
  ProjectHomepageFeaturedParentId = 'project___homepage___featured___parent___id',
  ProjectHomepageFeaturedParentChildren = 'project___homepage___featured___parent___children',
  ProjectHomepageFeaturedChildren = 'project___homepage___featured___children',
  ProjectHomepageFeaturedChildrenId = 'project___homepage___featured___children___id',
  ProjectHomepageFeaturedChildrenChildren = 'project___homepage___featured___children___children',
  ProjectHomepageFeaturedInternalContent = 'project___homepage___featured___internal___content',
  ProjectHomepageFeaturedInternalContentDigest = 'project___homepage___featured___internal___contentDigest',
  ProjectHomepageFeaturedInternalDescription = 'project___homepage___featured___internal___description',
  ProjectHomepageFeaturedInternalFieldOwners = 'project___homepage___featured___internal___fieldOwners',
  ProjectHomepageFeaturedInternalIgnoreType = 'project___homepage___featured___internal___ignoreType',
  ProjectHomepageFeaturedInternalMediaType = 'project___homepage___featured___internal___mediaType',
  ProjectHomepageFeaturedInternalOwner = 'project___homepage___featured___internal___owner',
  ProjectHomepageFeaturedInternalType = 'project___homepage___featured___internal___type',
  ProjectHomepageLatestWork = 'project___homepage___latest_work',
  ProjectHomepageLatestWorkContentfulId = 'project___homepage___latest_work___contentful_id',
  ProjectHomepageLatestWorkId = 'project___homepage___latest_work___id',
  ProjectHomepageLatestWorkNodeLocale = 'project___homepage___latest_work___node_locale',
  ProjectHomepageLatestWorkProjectContentfulId = 'project___homepage___latest_work___project___contentful_id',
  ProjectHomepageLatestWorkProjectId = 'project___homepage___latest_work___project___id',
  ProjectHomepageLatestWorkProjectNodeLocale = 'project___homepage___latest_work___project___node_locale',
  ProjectHomepageLatestWorkProjectTitle = 'project___homepage___latest_work___project___title',
  ProjectHomepageLatestWorkProjectSlug = 'project___homepage___latest_work___project___slug',
  ProjectHomepageLatestWorkProjectPhotos = 'project___homepage___latest_work___project___photos',
  ProjectHomepageLatestWorkProjectSpaceId = 'project___homepage___latest_work___project___spaceId',
  ProjectHomepageLatestWorkProjectCreatedAt = 'project___homepage___latest_work___project___createdAt',
  ProjectHomepageLatestWorkProjectUpdatedAt = 'project___homepage___latest_work___project___updatedAt',
  ProjectHomepageLatestWorkProjectHomepageFeatured = 'project___homepage___latest_work___project___homepage___featured',
  ProjectHomepageLatestWorkProjectHomepageLatestWork = 'project___homepage___latest_work___project___homepage___latest_work',
  ProjectHomepageLatestWorkProjectChildren = 'project___homepage___latest_work___project___children',
  ProjectHomepageLatestWorkFeaturedPhotos = 'project___homepage___latest_work___featuredPhotos',
  ProjectHomepageLatestWorkFeaturedPhotosContentfulId = 'project___homepage___latest_work___featuredPhotos___contentful_id',
  ProjectHomepageLatestWorkFeaturedPhotosId = 'project___homepage___latest_work___featuredPhotos___id',
  ProjectHomepageLatestWorkFeaturedPhotosSpaceId = 'project___homepage___latest_work___featuredPhotos___spaceId',
  ProjectHomepageLatestWorkFeaturedPhotosCreatedAt = 'project___homepage___latest_work___featuredPhotos___createdAt',
  ProjectHomepageLatestWorkFeaturedPhotosUpdatedAt = 'project___homepage___latest_work___featuredPhotos___updatedAt',
  ProjectHomepageLatestWorkFeaturedPhotosTitle = 'project___homepage___latest_work___featuredPhotos___title',
  ProjectHomepageLatestWorkFeaturedPhotosDescription = 'project___homepage___latest_work___featuredPhotos___description',
  ProjectHomepageLatestWorkFeaturedPhotosNodeLocale = 'project___homepage___latest_work___featuredPhotos___node_locale',
  ProjectHomepageLatestWorkFeaturedPhotosChildren = 'project___homepage___latest_work___featuredPhotos___children',
  ProjectHomepageLatestWorkSpaceId = 'project___homepage___latest_work___spaceId',
  ProjectHomepageLatestWorkCreatedAt = 'project___homepage___latest_work___createdAt',
  ProjectHomepageLatestWorkUpdatedAt = 'project___homepage___latest_work___updatedAt',
  ProjectHomepageLatestWorkSysType = 'project___homepage___latest_work___sys___type',
  ProjectHomepageLatestWorkSysRevision = 'project___homepage___latest_work___sys___revision',
  ProjectHomepageLatestWorkParentId = 'project___homepage___latest_work___parent___id',
  ProjectHomepageLatestWorkParentChildren = 'project___homepage___latest_work___parent___children',
  ProjectHomepageLatestWorkChildren = 'project___homepage___latest_work___children',
  ProjectHomepageLatestWorkChildrenId = 'project___homepage___latest_work___children___id',
  ProjectHomepageLatestWorkChildrenChildren = 'project___homepage___latest_work___children___children',
  ProjectHomepageLatestWorkInternalContent = 'project___homepage___latest_work___internal___content',
  ProjectHomepageLatestWorkInternalContentDigest = 'project___homepage___latest_work___internal___contentDigest',
  ProjectHomepageLatestWorkInternalDescription = 'project___homepage___latest_work___internal___description',
  ProjectHomepageLatestWorkInternalFieldOwners = 'project___homepage___latest_work___internal___fieldOwners',
  ProjectHomepageLatestWorkInternalIgnoreType = 'project___homepage___latest_work___internal___ignoreType',
  ProjectHomepageLatestWorkInternalMediaType = 'project___homepage___latest_work___internal___mediaType',
  ProjectHomepageLatestWorkInternalOwner = 'project___homepage___latest_work___internal___owner',
  ProjectHomepageLatestWorkInternalType = 'project___homepage___latest_work___internal___type',
  ProjectParentId = 'project___parent___id',
  ProjectParentParentId = 'project___parent___parent___id',
  ProjectParentParentChildren = 'project___parent___parent___children',
  ProjectParentChildren = 'project___parent___children',
  ProjectParentChildrenId = 'project___parent___children___id',
  ProjectParentChildrenChildren = 'project___parent___children___children',
  ProjectParentInternalContent = 'project___parent___internal___content',
  ProjectParentInternalContentDigest = 'project___parent___internal___contentDigest',
  ProjectParentInternalDescription = 'project___parent___internal___description',
  ProjectParentInternalFieldOwners = 'project___parent___internal___fieldOwners',
  ProjectParentInternalIgnoreType = 'project___parent___internal___ignoreType',
  ProjectParentInternalMediaType = 'project___parent___internal___mediaType',
  ProjectParentInternalOwner = 'project___parent___internal___owner',
  ProjectParentInternalType = 'project___parent___internal___type',
  ProjectChildren = 'project___children',
  ProjectChildrenId = 'project___children___id',
  ProjectChildrenParentId = 'project___children___parent___id',
  ProjectChildrenParentChildren = 'project___children___parent___children',
  ProjectChildrenChildren = 'project___children___children',
  ProjectChildrenChildrenId = 'project___children___children___id',
  ProjectChildrenChildrenChildren = 'project___children___children___children',
  ProjectChildrenInternalContent = 'project___children___internal___content',
  ProjectChildrenInternalContentDigest = 'project___children___internal___contentDigest',
  ProjectChildrenInternalDescription = 'project___children___internal___description',
  ProjectChildrenInternalFieldOwners = 'project___children___internal___fieldOwners',
  ProjectChildrenInternalIgnoreType = 'project___children___internal___ignoreType',
  ProjectChildrenInternalMediaType = 'project___children___internal___mediaType',
  ProjectChildrenInternalOwner = 'project___children___internal___owner',
  ProjectChildrenInternalType = 'project___children___internal___type',
  ProjectInternalContent = 'project___internal___content',
  ProjectInternalContentDigest = 'project___internal___contentDigest',
  ProjectInternalDescription = 'project___internal___description',
  ProjectInternalFieldOwners = 'project___internal___fieldOwners',
  ProjectInternalIgnoreType = 'project___internal___ignoreType',
  ProjectInternalMediaType = 'project___internal___mediaType',
  ProjectInternalOwner = 'project___internal___owner',
  ProjectInternalType = 'project___internal___type',
  ProjectChildContentfulProjectDescriptionTextNodeId = 'project___childContentfulProjectDescriptionTextNode___id',
  ProjectChildContentfulProjectDescriptionTextNodeParentId = 'project___childContentfulProjectDescriptionTextNode___parent___id',
  ProjectChildContentfulProjectDescriptionTextNodeParentChildren = 'project___childContentfulProjectDescriptionTextNode___parent___children',
  ProjectChildContentfulProjectDescriptionTextNodeChildren = 'project___childContentfulProjectDescriptionTextNode___children',
  ProjectChildContentfulProjectDescriptionTextNodeChildrenId = 'project___childContentfulProjectDescriptionTextNode___children___id',
  ProjectChildContentfulProjectDescriptionTextNodeChildrenChildren = 'project___childContentfulProjectDescriptionTextNode___children___children',
  ProjectChildContentfulProjectDescriptionTextNodeInternalContent = 'project___childContentfulProjectDescriptionTextNode___internal___content',
  ProjectChildContentfulProjectDescriptionTextNodeInternalContentDigest = 'project___childContentfulProjectDescriptionTextNode___internal___contentDigest',
  ProjectChildContentfulProjectDescriptionTextNodeInternalDescription = 'project___childContentfulProjectDescriptionTextNode___internal___description',
  ProjectChildContentfulProjectDescriptionTextNodeInternalFieldOwners = 'project___childContentfulProjectDescriptionTextNode___internal___fieldOwners',
  ProjectChildContentfulProjectDescriptionTextNodeInternalIgnoreType = 'project___childContentfulProjectDescriptionTextNode___internal___ignoreType',
  ProjectChildContentfulProjectDescriptionTextNodeInternalMediaType = 'project___childContentfulProjectDescriptionTextNode___internal___mediaType',
  ProjectChildContentfulProjectDescriptionTextNodeInternalOwner = 'project___childContentfulProjectDescriptionTextNode___internal___owner',
  ProjectChildContentfulProjectDescriptionTextNodeInternalType = 'project___childContentfulProjectDescriptionTextNode___internal___type',
  ProjectChildContentfulProjectDescriptionTextNodeDescription = 'project___childContentfulProjectDescriptionTextNode___description',
  ProjectChildContentfulProjectDescriptionTextNodeSysType = 'project___childContentfulProjectDescriptionTextNode___sys___type',
  FeaturedPhotos = 'featuredPhotos',
  FeaturedPhotosContentfulId = 'featuredPhotos___contentful_id',
  FeaturedPhotosId = 'featuredPhotos___id',
  FeaturedPhotosSpaceId = 'featuredPhotos___spaceId',
  FeaturedPhotosCreatedAt = 'featuredPhotos___createdAt',
  FeaturedPhotosUpdatedAt = 'featuredPhotos___updatedAt',
  FeaturedPhotosFileUrl = 'featuredPhotos___file___url',
  FeaturedPhotosFileDetailsSize = 'featuredPhotos___file___details___size',
  FeaturedPhotosFileFileName = 'featuredPhotos___file___fileName',
  FeaturedPhotosFileContentType = 'featuredPhotos___file___contentType',
  FeaturedPhotosTitle = 'featuredPhotos___title',
  FeaturedPhotosDescription = 'featuredPhotos___description',
  FeaturedPhotosNodeLocale = 'featuredPhotos___node_locale',
  FeaturedPhotosSysType = 'featuredPhotos___sys___type',
  FeaturedPhotosSysRevision = 'featuredPhotos___sys___revision',
  FeaturedPhotosLocalFileSourceInstanceName = 'featuredPhotos___localFile___sourceInstanceName',
  FeaturedPhotosLocalFileAbsolutePath = 'featuredPhotos___localFile___absolutePath',
  FeaturedPhotosLocalFileRelativePath = 'featuredPhotos___localFile___relativePath',
  FeaturedPhotosLocalFileExtension = 'featuredPhotos___localFile___extension',
  FeaturedPhotosLocalFileSize = 'featuredPhotos___localFile___size',
  FeaturedPhotosLocalFilePrettySize = 'featuredPhotos___localFile___prettySize',
  FeaturedPhotosLocalFileModifiedTime = 'featuredPhotos___localFile___modifiedTime',
  FeaturedPhotosLocalFileAccessTime = 'featuredPhotos___localFile___accessTime',
  FeaturedPhotosLocalFileChangeTime = 'featuredPhotos___localFile___changeTime',
  FeaturedPhotosLocalFileBirthTime = 'featuredPhotos___localFile___birthTime',
  FeaturedPhotosLocalFileRoot = 'featuredPhotos___localFile___root',
  FeaturedPhotosLocalFileDir = 'featuredPhotos___localFile___dir',
  FeaturedPhotosLocalFileBase = 'featuredPhotos___localFile___base',
  FeaturedPhotosLocalFileExt = 'featuredPhotos___localFile___ext',
  FeaturedPhotosLocalFileName = 'featuredPhotos___localFile___name',
  FeaturedPhotosLocalFileRelativeDirectory = 'featuredPhotos___localFile___relativeDirectory',
  FeaturedPhotosLocalFileDev = 'featuredPhotos___localFile___dev',
  FeaturedPhotosLocalFileMode = 'featuredPhotos___localFile___mode',
  FeaturedPhotosLocalFileNlink = 'featuredPhotos___localFile___nlink',
  FeaturedPhotosLocalFileUid = 'featuredPhotos___localFile___uid',
  FeaturedPhotosLocalFileGid = 'featuredPhotos___localFile___gid',
  FeaturedPhotosLocalFileRdev = 'featuredPhotos___localFile___rdev',
  FeaturedPhotosLocalFileIno = 'featuredPhotos___localFile___ino',
  FeaturedPhotosLocalFileAtimeMs = 'featuredPhotos___localFile___atimeMs',
  FeaturedPhotosLocalFileMtimeMs = 'featuredPhotos___localFile___mtimeMs',
  FeaturedPhotosLocalFileCtimeMs = 'featuredPhotos___localFile___ctimeMs',
  FeaturedPhotosLocalFileAtime = 'featuredPhotos___localFile___atime',
  FeaturedPhotosLocalFileMtime = 'featuredPhotos___localFile___mtime',
  FeaturedPhotosLocalFileCtime = 'featuredPhotos___localFile___ctime',
  FeaturedPhotosLocalFileBirthtime = 'featuredPhotos___localFile___birthtime',
  FeaturedPhotosLocalFileBirthtimeMs = 'featuredPhotos___localFile___birthtimeMs',
  FeaturedPhotosLocalFileBlksize = 'featuredPhotos___localFile___blksize',
  FeaturedPhotosLocalFileBlocks = 'featuredPhotos___localFile___blocks',
  FeaturedPhotosLocalFileUrl = 'featuredPhotos___localFile___url',
  FeaturedPhotosLocalFilePublicUrl = 'featuredPhotos___localFile___publicURL',
  FeaturedPhotosLocalFileChildImageSharpGatsbyImageData = 'featuredPhotos___localFile___childImageSharp___gatsbyImageData',
  FeaturedPhotosLocalFileChildImageSharpId = 'featuredPhotos___localFile___childImageSharp___id',
  FeaturedPhotosLocalFileChildImageSharpChildren = 'featuredPhotos___localFile___childImageSharp___children',
  FeaturedPhotosLocalFileId = 'featuredPhotos___localFile___id',
  FeaturedPhotosLocalFileParentId = 'featuredPhotos___localFile___parent___id',
  FeaturedPhotosLocalFileParentChildren = 'featuredPhotos___localFile___parent___children',
  FeaturedPhotosLocalFileChildren = 'featuredPhotos___localFile___children',
  FeaturedPhotosLocalFileChildrenId = 'featuredPhotos___localFile___children___id',
  FeaturedPhotosLocalFileChildrenChildren = 'featuredPhotos___localFile___children___children',
  FeaturedPhotosLocalFileInternalContent = 'featuredPhotos___localFile___internal___content',
  FeaturedPhotosLocalFileInternalContentDigest = 'featuredPhotos___localFile___internal___contentDigest',
  FeaturedPhotosLocalFileInternalDescription = 'featuredPhotos___localFile___internal___description',
  FeaturedPhotosLocalFileInternalFieldOwners = 'featuredPhotos___localFile___internal___fieldOwners',
  FeaturedPhotosLocalFileInternalIgnoreType = 'featuredPhotos___localFile___internal___ignoreType',
  FeaturedPhotosLocalFileInternalMediaType = 'featuredPhotos___localFile___internal___mediaType',
  FeaturedPhotosLocalFileInternalOwner = 'featuredPhotos___localFile___internal___owner',
  FeaturedPhotosLocalFileInternalType = 'featuredPhotos___localFile___internal___type',
  FeaturedPhotosFixedBase64 = 'featuredPhotos___fixed___base64',
  FeaturedPhotosFixedTracedSvg = 'featuredPhotos___fixed___tracedSVG',
  FeaturedPhotosFixedAspectRatio = 'featuredPhotos___fixed___aspectRatio',
  FeaturedPhotosFixedWidth = 'featuredPhotos___fixed___width',
  FeaturedPhotosFixedHeight = 'featuredPhotos___fixed___height',
  FeaturedPhotosFixedSrc = 'featuredPhotos___fixed___src',
  FeaturedPhotosFixedSrcSet = 'featuredPhotos___fixed___srcSet',
  FeaturedPhotosFixedSrcWebp = 'featuredPhotos___fixed___srcWebp',
  FeaturedPhotosFixedSrcSetWebp = 'featuredPhotos___fixed___srcSetWebp',
  FeaturedPhotosResolutionsBase64 = 'featuredPhotos___resolutions___base64',
  FeaturedPhotosResolutionsTracedSvg = 'featuredPhotos___resolutions___tracedSVG',
  FeaturedPhotosResolutionsAspectRatio = 'featuredPhotos___resolutions___aspectRatio',
  FeaturedPhotosResolutionsWidth = 'featuredPhotos___resolutions___width',
  FeaturedPhotosResolutionsHeight = 'featuredPhotos___resolutions___height',
  FeaturedPhotosResolutionsSrc = 'featuredPhotos___resolutions___src',
  FeaturedPhotosResolutionsSrcSet = 'featuredPhotos___resolutions___srcSet',
  FeaturedPhotosResolutionsSrcWebp = 'featuredPhotos___resolutions___srcWebp',
  FeaturedPhotosResolutionsSrcSetWebp = 'featuredPhotos___resolutions___srcSetWebp',
  FeaturedPhotosFluidBase64 = 'featuredPhotos___fluid___base64',
  FeaturedPhotosFluidTracedSvg = 'featuredPhotos___fluid___tracedSVG',
  FeaturedPhotosFluidAspectRatio = 'featuredPhotos___fluid___aspectRatio',
  FeaturedPhotosFluidSrc = 'featuredPhotos___fluid___src',
  FeaturedPhotosFluidSrcSet = 'featuredPhotos___fluid___srcSet',
  FeaturedPhotosFluidSrcWebp = 'featuredPhotos___fluid___srcWebp',
  FeaturedPhotosFluidSrcSetWebp = 'featuredPhotos___fluid___srcSetWebp',
  FeaturedPhotosFluidSizes = 'featuredPhotos___fluid___sizes',
  FeaturedPhotosSizesBase64 = 'featuredPhotos___sizes___base64',
  FeaturedPhotosSizesTracedSvg = 'featuredPhotos___sizes___tracedSVG',
  FeaturedPhotosSizesAspectRatio = 'featuredPhotos___sizes___aspectRatio',
  FeaturedPhotosSizesSrc = 'featuredPhotos___sizes___src',
  FeaturedPhotosSizesSrcSet = 'featuredPhotos___sizes___srcSet',
  FeaturedPhotosSizesSrcWebp = 'featuredPhotos___sizes___srcWebp',
  FeaturedPhotosSizesSrcSetWebp = 'featuredPhotos___sizes___srcSetWebp',
  FeaturedPhotosSizesSizes = 'featuredPhotos___sizes___sizes',
  FeaturedPhotosResizeBase64 = 'featuredPhotos___resize___base64',
  FeaturedPhotosResizeTracedSvg = 'featuredPhotos___resize___tracedSVG',
  FeaturedPhotosResizeSrc = 'featuredPhotos___resize___src',
  FeaturedPhotosResizeWidth = 'featuredPhotos___resize___width',
  FeaturedPhotosResizeHeight = 'featuredPhotos___resize___height',
  FeaturedPhotosResizeAspectRatio = 'featuredPhotos___resize___aspectRatio',
  FeaturedPhotosParentId = 'featuredPhotos___parent___id',
  FeaturedPhotosParentParentId = 'featuredPhotos___parent___parent___id',
  FeaturedPhotosParentParentChildren = 'featuredPhotos___parent___parent___children',
  FeaturedPhotosParentChildren = 'featuredPhotos___parent___children',
  FeaturedPhotosParentChildrenId = 'featuredPhotos___parent___children___id',
  FeaturedPhotosParentChildrenChildren = 'featuredPhotos___parent___children___children',
  FeaturedPhotosParentInternalContent = 'featuredPhotos___parent___internal___content',
  FeaturedPhotosParentInternalContentDigest = 'featuredPhotos___parent___internal___contentDigest',
  FeaturedPhotosParentInternalDescription = 'featuredPhotos___parent___internal___description',
  FeaturedPhotosParentInternalFieldOwners = 'featuredPhotos___parent___internal___fieldOwners',
  FeaturedPhotosParentInternalIgnoreType = 'featuredPhotos___parent___internal___ignoreType',
  FeaturedPhotosParentInternalMediaType = 'featuredPhotos___parent___internal___mediaType',
  FeaturedPhotosParentInternalOwner = 'featuredPhotos___parent___internal___owner',
  FeaturedPhotosParentInternalType = 'featuredPhotos___parent___internal___type',
  FeaturedPhotosChildren = 'featuredPhotos___children',
  FeaturedPhotosChildrenId = 'featuredPhotos___children___id',
  FeaturedPhotosChildrenParentId = 'featuredPhotos___children___parent___id',
  FeaturedPhotosChildrenParentChildren = 'featuredPhotos___children___parent___children',
  FeaturedPhotosChildrenChildren = 'featuredPhotos___children___children',
  FeaturedPhotosChildrenChildrenId = 'featuredPhotos___children___children___id',
  FeaturedPhotosChildrenChildrenChildren = 'featuredPhotos___children___children___children',
  FeaturedPhotosChildrenInternalContent = 'featuredPhotos___children___internal___content',
  FeaturedPhotosChildrenInternalContentDigest = 'featuredPhotos___children___internal___contentDigest',
  FeaturedPhotosChildrenInternalDescription = 'featuredPhotos___children___internal___description',
  FeaturedPhotosChildrenInternalFieldOwners = 'featuredPhotos___children___internal___fieldOwners',
  FeaturedPhotosChildrenInternalIgnoreType = 'featuredPhotos___children___internal___ignoreType',
  FeaturedPhotosChildrenInternalMediaType = 'featuredPhotos___children___internal___mediaType',
  FeaturedPhotosChildrenInternalOwner = 'featuredPhotos___children___internal___owner',
  FeaturedPhotosChildrenInternalType = 'featuredPhotos___children___internal___type',
  FeaturedPhotosInternalContent = 'featuredPhotos___internal___content',
  FeaturedPhotosInternalContentDigest = 'featuredPhotos___internal___contentDigest',
  FeaturedPhotosInternalDescription = 'featuredPhotos___internal___description',
  FeaturedPhotosInternalFieldOwners = 'featuredPhotos___internal___fieldOwners',
  FeaturedPhotosInternalIgnoreType = 'featuredPhotos___internal___ignoreType',
  FeaturedPhotosInternalMediaType = 'featuredPhotos___internal___mediaType',
  FeaturedPhotosInternalOwner = 'featuredPhotos___internal___owner',
  FeaturedPhotosInternalType = 'featuredPhotos___internal___type',
  SpaceId = 'spaceId',
  CreatedAt = 'createdAt',
  UpdatedAt = 'updatedAt',
  SysType = 'sys___type',
  SysRevision = 'sys___revision',
  SysContentTypeSysType = 'sys___contentType___sys___type',
  SysContentTypeSysLinkType = 'sys___contentType___sys___linkType',
  SysContentTypeSysId = 'sys___contentType___sys___id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
}

export type ContentfulHomepageLatestWorkFilterInput = {
  contentful_id?: Maybe<StringQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  node_locale?: Maybe<StringQueryOperatorInput>
  project?: Maybe<ContentfulProjectFilterInput>
  featuredPhotos?: Maybe<ContentfulAssetFilterListInput>
  spaceId?: Maybe<StringQueryOperatorInput>
  createdAt?: Maybe<DateQueryOperatorInput>
  updatedAt?: Maybe<DateQueryOperatorInput>
  sys?: Maybe<ContentfulHomepageLatestWorkSysFilterInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type ContentfulHomepageLatestWorkFilterListInput = {
  elemMatch?: Maybe<ContentfulHomepageLatestWorkFilterInput>
}

export type ContentfulHomepageLatestWorkGroupConnection = {
  __typename?: 'ContentfulHomepageLatestWorkGroupConnection'
  totalCount: Scalars['Int']
  edges: Array<ContentfulHomepageLatestWorkEdge>
  nodes: Array<ContentfulHomepageLatestWork>
  pageInfo: PageInfo
  field: Scalars['String']
  fieldValue?: Maybe<Scalars['String']>
}

export type ContentfulHomepageLatestWorkSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulHomepageLatestWorkFieldsEnum>>>
  order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type ContentfulHomepageLatestWorkSys = {
  __typename?: 'ContentfulHomepageLatestWorkSys'
  type?: Maybe<Scalars['String']>
  revision?: Maybe<Scalars['Int']>
  contentType?: Maybe<ContentfulHomepageLatestWorkSysContentType>
}

export type ContentfulHomepageLatestWorkSysContentType = {
  __typename?: 'ContentfulHomepageLatestWorkSysContentType'
  sys?: Maybe<ContentfulHomepageLatestWorkSysContentTypeSys>
}

export type ContentfulHomepageLatestWorkSysContentTypeFilterInput = {
  sys?: Maybe<ContentfulHomepageLatestWorkSysContentTypeSysFilterInput>
}

export type ContentfulHomepageLatestWorkSysContentTypeSys = {
  __typename?: 'ContentfulHomepageLatestWorkSysContentTypeSys'
  type?: Maybe<Scalars['String']>
  linkType?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['String']>
}

export type ContentfulHomepageLatestWorkSysContentTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>
  linkType?: Maybe<StringQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
}

export type ContentfulHomepageLatestWorkSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>
  revision?: Maybe<IntQueryOperatorInput>
  contentType?: Maybe<ContentfulHomepageLatestWorkSysContentTypeFilterInput>
}

export enum ContentfulImageCropFocus {
  Top = 'TOP',
  TopLeft = 'TOP_LEFT',
  TopRight = 'TOP_RIGHT',
  Bottom = 'BOTTOM',
  BottomRight = 'BOTTOM_RIGHT',
  BottomLeft = 'BOTTOM_LEFT',
  Right = 'RIGHT',
  Left = 'LEFT',
  Face = 'FACE',
  Faces = 'FACES',
  Center = 'CENTER',
}

export enum ContentfulImageFormat {
  NoChange = 'NO_CHANGE',
  Jpg = 'JPG',
  Png = 'PNG',
  Webp = 'WEBP',
}

export type ContentfulLogo = ContentfulReference &
  ContentfulEntry &
  Node & {
    __typename?: 'ContentfulLogo'
    contentful_id: Scalars['String']
    id: Scalars['ID']
    node_locale: Scalars['String']
    logo?: Maybe<ContentfulAsset>
    spaceId?: Maybe<Scalars['String']>
    createdAt?: Maybe<Scalars['Date']>
    updatedAt?: Maybe<Scalars['Date']>
    sys?: Maybe<ContentfulLogoSys>
    parent?: Maybe<Node>
    children: Array<Node>
    internal: Internal
  }

export type ContentfulLogoCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type ContentfulLogoUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type ContentfulLogoConnection = {
  __typename?: 'ContentfulLogoConnection'
  totalCount: Scalars['Int']
  edges: Array<ContentfulLogoEdge>
  nodes: Array<ContentfulLogo>
  pageInfo: PageInfo
  distinct: Array<Scalars['String']>
  group: Array<ContentfulLogoGroupConnection>
}

export type ContentfulLogoConnectionDistinctArgs = {
  field: ContentfulLogoFieldsEnum
}

export type ContentfulLogoConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  field: ContentfulLogoFieldsEnum
}

export type ContentfulLogoEdge = {
  __typename?: 'ContentfulLogoEdge'
  next?: Maybe<ContentfulLogo>
  node: ContentfulLogo
  previous?: Maybe<ContentfulLogo>
}

export enum ContentfulLogoFieldsEnum {
  ContentfulId = 'contentful_id',
  Id = 'id',
  NodeLocale = 'node_locale',
  LogoContentfulId = 'logo___contentful_id',
  LogoId = 'logo___id',
  LogoSpaceId = 'logo___spaceId',
  LogoCreatedAt = 'logo___createdAt',
  LogoUpdatedAt = 'logo___updatedAt',
  LogoFileUrl = 'logo___file___url',
  LogoFileDetailsSize = 'logo___file___details___size',
  LogoFileFileName = 'logo___file___fileName',
  LogoFileContentType = 'logo___file___contentType',
  LogoTitle = 'logo___title',
  LogoDescription = 'logo___description',
  LogoNodeLocale = 'logo___node_locale',
  LogoSysType = 'logo___sys___type',
  LogoSysRevision = 'logo___sys___revision',
  LogoLocalFileSourceInstanceName = 'logo___localFile___sourceInstanceName',
  LogoLocalFileAbsolutePath = 'logo___localFile___absolutePath',
  LogoLocalFileRelativePath = 'logo___localFile___relativePath',
  LogoLocalFileExtension = 'logo___localFile___extension',
  LogoLocalFileSize = 'logo___localFile___size',
  LogoLocalFilePrettySize = 'logo___localFile___prettySize',
  LogoLocalFileModifiedTime = 'logo___localFile___modifiedTime',
  LogoLocalFileAccessTime = 'logo___localFile___accessTime',
  LogoLocalFileChangeTime = 'logo___localFile___changeTime',
  LogoLocalFileBirthTime = 'logo___localFile___birthTime',
  LogoLocalFileRoot = 'logo___localFile___root',
  LogoLocalFileDir = 'logo___localFile___dir',
  LogoLocalFileBase = 'logo___localFile___base',
  LogoLocalFileExt = 'logo___localFile___ext',
  LogoLocalFileName = 'logo___localFile___name',
  LogoLocalFileRelativeDirectory = 'logo___localFile___relativeDirectory',
  LogoLocalFileDev = 'logo___localFile___dev',
  LogoLocalFileMode = 'logo___localFile___mode',
  LogoLocalFileNlink = 'logo___localFile___nlink',
  LogoLocalFileUid = 'logo___localFile___uid',
  LogoLocalFileGid = 'logo___localFile___gid',
  LogoLocalFileRdev = 'logo___localFile___rdev',
  LogoLocalFileIno = 'logo___localFile___ino',
  LogoLocalFileAtimeMs = 'logo___localFile___atimeMs',
  LogoLocalFileMtimeMs = 'logo___localFile___mtimeMs',
  LogoLocalFileCtimeMs = 'logo___localFile___ctimeMs',
  LogoLocalFileAtime = 'logo___localFile___atime',
  LogoLocalFileMtime = 'logo___localFile___mtime',
  LogoLocalFileCtime = 'logo___localFile___ctime',
  LogoLocalFileBirthtime = 'logo___localFile___birthtime',
  LogoLocalFileBirthtimeMs = 'logo___localFile___birthtimeMs',
  LogoLocalFileBlksize = 'logo___localFile___blksize',
  LogoLocalFileBlocks = 'logo___localFile___blocks',
  LogoLocalFileUrl = 'logo___localFile___url',
  LogoLocalFilePublicUrl = 'logo___localFile___publicURL',
  LogoLocalFileChildImageSharpGatsbyImageData = 'logo___localFile___childImageSharp___gatsbyImageData',
  LogoLocalFileChildImageSharpId = 'logo___localFile___childImageSharp___id',
  LogoLocalFileChildImageSharpChildren = 'logo___localFile___childImageSharp___children',
  LogoLocalFileId = 'logo___localFile___id',
  LogoLocalFileParentId = 'logo___localFile___parent___id',
  LogoLocalFileParentChildren = 'logo___localFile___parent___children',
  LogoLocalFileChildren = 'logo___localFile___children',
  LogoLocalFileChildrenId = 'logo___localFile___children___id',
  LogoLocalFileChildrenChildren = 'logo___localFile___children___children',
  LogoLocalFileInternalContent = 'logo___localFile___internal___content',
  LogoLocalFileInternalContentDigest = 'logo___localFile___internal___contentDigest',
  LogoLocalFileInternalDescription = 'logo___localFile___internal___description',
  LogoLocalFileInternalFieldOwners = 'logo___localFile___internal___fieldOwners',
  LogoLocalFileInternalIgnoreType = 'logo___localFile___internal___ignoreType',
  LogoLocalFileInternalMediaType = 'logo___localFile___internal___mediaType',
  LogoLocalFileInternalOwner = 'logo___localFile___internal___owner',
  LogoLocalFileInternalType = 'logo___localFile___internal___type',
  LogoFixedBase64 = 'logo___fixed___base64',
  LogoFixedTracedSvg = 'logo___fixed___tracedSVG',
  LogoFixedAspectRatio = 'logo___fixed___aspectRatio',
  LogoFixedWidth = 'logo___fixed___width',
  LogoFixedHeight = 'logo___fixed___height',
  LogoFixedSrc = 'logo___fixed___src',
  LogoFixedSrcSet = 'logo___fixed___srcSet',
  LogoFixedSrcWebp = 'logo___fixed___srcWebp',
  LogoFixedSrcSetWebp = 'logo___fixed___srcSetWebp',
  LogoResolutionsBase64 = 'logo___resolutions___base64',
  LogoResolutionsTracedSvg = 'logo___resolutions___tracedSVG',
  LogoResolutionsAspectRatio = 'logo___resolutions___aspectRatio',
  LogoResolutionsWidth = 'logo___resolutions___width',
  LogoResolutionsHeight = 'logo___resolutions___height',
  LogoResolutionsSrc = 'logo___resolutions___src',
  LogoResolutionsSrcSet = 'logo___resolutions___srcSet',
  LogoResolutionsSrcWebp = 'logo___resolutions___srcWebp',
  LogoResolutionsSrcSetWebp = 'logo___resolutions___srcSetWebp',
  LogoFluidBase64 = 'logo___fluid___base64',
  LogoFluidTracedSvg = 'logo___fluid___tracedSVG',
  LogoFluidAspectRatio = 'logo___fluid___aspectRatio',
  LogoFluidSrc = 'logo___fluid___src',
  LogoFluidSrcSet = 'logo___fluid___srcSet',
  LogoFluidSrcWebp = 'logo___fluid___srcWebp',
  LogoFluidSrcSetWebp = 'logo___fluid___srcSetWebp',
  LogoFluidSizes = 'logo___fluid___sizes',
  LogoSizesBase64 = 'logo___sizes___base64',
  LogoSizesTracedSvg = 'logo___sizes___tracedSVG',
  LogoSizesAspectRatio = 'logo___sizes___aspectRatio',
  LogoSizesSrc = 'logo___sizes___src',
  LogoSizesSrcSet = 'logo___sizes___srcSet',
  LogoSizesSrcWebp = 'logo___sizes___srcWebp',
  LogoSizesSrcSetWebp = 'logo___sizes___srcSetWebp',
  LogoSizesSizes = 'logo___sizes___sizes',
  LogoResizeBase64 = 'logo___resize___base64',
  LogoResizeTracedSvg = 'logo___resize___tracedSVG',
  LogoResizeSrc = 'logo___resize___src',
  LogoResizeWidth = 'logo___resize___width',
  LogoResizeHeight = 'logo___resize___height',
  LogoResizeAspectRatio = 'logo___resize___aspectRatio',
  LogoParentId = 'logo___parent___id',
  LogoParentParentId = 'logo___parent___parent___id',
  LogoParentParentChildren = 'logo___parent___parent___children',
  LogoParentChildren = 'logo___parent___children',
  LogoParentChildrenId = 'logo___parent___children___id',
  LogoParentChildrenChildren = 'logo___parent___children___children',
  LogoParentInternalContent = 'logo___parent___internal___content',
  LogoParentInternalContentDigest = 'logo___parent___internal___contentDigest',
  LogoParentInternalDescription = 'logo___parent___internal___description',
  LogoParentInternalFieldOwners = 'logo___parent___internal___fieldOwners',
  LogoParentInternalIgnoreType = 'logo___parent___internal___ignoreType',
  LogoParentInternalMediaType = 'logo___parent___internal___mediaType',
  LogoParentInternalOwner = 'logo___parent___internal___owner',
  LogoParentInternalType = 'logo___parent___internal___type',
  LogoChildren = 'logo___children',
  LogoChildrenId = 'logo___children___id',
  LogoChildrenParentId = 'logo___children___parent___id',
  LogoChildrenParentChildren = 'logo___children___parent___children',
  LogoChildrenChildren = 'logo___children___children',
  LogoChildrenChildrenId = 'logo___children___children___id',
  LogoChildrenChildrenChildren = 'logo___children___children___children',
  LogoChildrenInternalContent = 'logo___children___internal___content',
  LogoChildrenInternalContentDigest = 'logo___children___internal___contentDigest',
  LogoChildrenInternalDescription = 'logo___children___internal___description',
  LogoChildrenInternalFieldOwners = 'logo___children___internal___fieldOwners',
  LogoChildrenInternalIgnoreType = 'logo___children___internal___ignoreType',
  LogoChildrenInternalMediaType = 'logo___children___internal___mediaType',
  LogoChildrenInternalOwner = 'logo___children___internal___owner',
  LogoChildrenInternalType = 'logo___children___internal___type',
  LogoInternalContent = 'logo___internal___content',
  LogoInternalContentDigest = 'logo___internal___contentDigest',
  LogoInternalDescription = 'logo___internal___description',
  LogoInternalFieldOwners = 'logo___internal___fieldOwners',
  LogoInternalIgnoreType = 'logo___internal___ignoreType',
  LogoInternalMediaType = 'logo___internal___mediaType',
  LogoInternalOwner = 'logo___internal___owner',
  LogoInternalType = 'logo___internal___type',
  SpaceId = 'spaceId',
  CreatedAt = 'createdAt',
  UpdatedAt = 'updatedAt',
  SysType = 'sys___type',
  SysRevision = 'sys___revision',
  SysContentTypeSysType = 'sys___contentType___sys___type',
  SysContentTypeSysLinkType = 'sys___contentType___sys___linkType',
  SysContentTypeSysId = 'sys___contentType___sys___id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
}

export type ContentfulLogoFilterInput = {
  contentful_id?: Maybe<StringQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  node_locale?: Maybe<StringQueryOperatorInput>
  logo?: Maybe<ContentfulAssetFilterInput>
  spaceId?: Maybe<StringQueryOperatorInput>
  createdAt?: Maybe<DateQueryOperatorInput>
  updatedAt?: Maybe<DateQueryOperatorInput>
  sys?: Maybe<ContentfulLogoSysFilterInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type ContentfulLogoGroupConnection = {
  __typename?: 'ContentfulLogoGroupConnection'
  totalCount: Scalars['Int']
  edges: Array<ContentfulLogoEdge>
  nodes: Array<ContentfulLogo>
  pageInfo: PageInfo
  field: Scalars['String']
  fieldValue?: Maybe<Scalars['String']>
}

export type ContentfulLogoSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulLogoFieldsEnum>>>
  order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type ContentfulLogoSys = {
  __typename?: 'ContentfulLogoSys'
  type?: Maybe<Scalars['String']>
  revision?: Maybe<Scalars['Int']>
  contentType?: Maybe<ContentfulLogoSysContentType>
}

export type ContentfulLogoSysContentType = {
  __typename?: 'ContentfulLogoSysContentType'
  sys?: Maybe<ContentfulLogoSysContentTypeSys>
}

export type ContentfulLogoSysContentTypeFilterInput = {
  sys?: Maybe<ContentfulLogoSysContentTypeSysFilterInput>
}

export type ContentfulLogoSysContentTypeSys = {
  __typename?: 'ContentfulLogoSysContentTypeSys'
  type?: Maybe<Scalars['String']>
  linkType?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['String']>
}

export type ContentfulLogoSysContentTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>
  linkType?: Maybe<StringQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
}

export type ContentfulLogoSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>
  revision?: Maybe<IntQueryOperatorInput>
  contentType?: Maybe<ContentfulLogoSysContentTypeFilterInput>
}

export type ContentfulProject = ContentfulReference &
  ContentfulEntry &
  Node & {
    __typename?: 'ContentfulProject'
    contentful_id: Scalars['String']
    id: Scalars['ID']
    node_locale: Scalars['String']
    title?: Maybe<Scalars['String']>
    slug?: Maybe<Scalars['String']>
    theme?: Maybe<ContentfulTheme>
    coverImage?: Maybe<ContentfulAsset>
    photos?: Maybe<Array<Maybe<ContentfulAsset>>>
    description?: Maybe<ContentfulProjectDescriptionTextNode>
    spaceId?: Maybe<Scalars['String']>
    createdAt?: Maybe<Scalars['Date']>
    updatedAt?: Maybe<Scalars['Date']>
    sys?: Maybe<ContentfulProjectSys>
    homepage___featured?: Maybe<Array<Maybe<ContentfulHomepageFeatured>>>
    homepage___latest_work?: Maybe<Array<Maybe<ContentfulHomepageLatestWork>>>
    parent?: Maybe<Node>
    children: Array<Node>
    internal: Internal
    childContentfulProjectDescriptionTextNode?: Maybe<ContentfulProjectDescriptionTextNode>
  }

export type ContentfulProjectCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type ContentfulProjectUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type ContentfulProjectConnection = {
  __typename?: 'ContentfulProjectConnection'
  totalCount: Scalars['Int']
  edges: Array<ContentfulProjectEdge>
  nodes: Array<ContentfulProject>
  pageInfo: PageInfo
  distinct: Array<Scalars['String']>
  group: Array<ContentfulProjectGroupConnection>
}

export type ContentfulProjectConnectionDistinctArgs = {
  field: ContentfulProjectFieldsEnum
}

export type ContentfulProjectConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  field: ContentfulProjectFieldsEnum
}

export type ContentfulProjectDescriptionTextNode = Node & {
  __typename?: 'contentfulProjectDescriptionTextNode'
  id: Scalars['ID']
  parent?: Maybe<Node>
  children: Array<Node>
  internal: Internal
  description?: Maybe<Scalars['String']>
  sys?: Maybe<ContentfulProjectDescriptionTextNodeSys>
}

export type ContentfulProjectDescriptionTextNodeConnection = {
  __typename?: 'contentfulProjectDescriptionTextNodeConnection'
  totalCount: Scalars['Int']
  edges: Array<ContentfulProjectDescriptionTextNodeEdge>
  nodes: Array<ContentfulProjectDescriptionTextNode>
  pageInfo: PageInfo
  distinct: Array<Scalars['String']>
  group: Array<ContentfulProjectDescriptionTextNodeGroupConnection>
}

export type ContentfulProjectDescriptionTextNodeConnectionDistinctArgs = {
  field: ContentfulProjectDescriptionTextNodeFieldsEnum
}

export type ContentfulProjectDescriptionTextNodeConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  field: ContentfulProjectDescriptionTextNodeFieldsEnum
}

export type ContentfulProjectDescriptionTextNodeEdge = {
  __typename?: 'contentfulProjectDescriptionTextNodeEdge'
  next?: Maybe<ContentfulProjectDescriptionTextNode>
  node: ContentfulProjectDescriptionTextNode
  previous?: Maybe<ContentfulProjectDescriptionTextNode>
}

export enum ContentfulProjectDescriptionTextNodeFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  Description = 'description',
  SysType = 'sys___type',
}

export type ContentfulProjectDescriptionTextNodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
  description?: Maybe<StringQueryOperatorInput>
  sys?: Maybe<ContentfulProjectDescriptionTextNodeSysFilterInput>
}

export type ContentfulProjectDescriptionTextNodeGroupConnection = {
  __typename?: 'contentfulProjectDescriptionTextNodeGroupConnection'
  totalCount: Scalars['Int']
  edges: Array<ContentfulProjectDescriptionTextNodeEdge>
  nodes: Array<ContentfulProjectDescriptionTextNode>
  pageInfo: PageInfo
  field: Scalars['String']
  fieldValue?: Maybe<Scalars['String']>
}

export type ContentfulProjectDescriptionTextNodeSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulProjectDescriptionTextNodeFieldsEnum>>>
  order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type ContentfulProjectDescriptionTextNodeSys = {
  __typename?: 'contentfulProjectDescriptionTextNodeSys'
  type?: Maybe<Scalars['String']>
}

export type ContentfulProjectDescriptionTextNodeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>
}

export type ContentfulProjectEdge = {
  __typename?: 'ContentfulProjectEdge'
  next?: Maybe<ContentfulProject>
  node: ContentfulProject
  previous?: Maybe<ContentfulProject>
}

export enum ContentfulProjectFieldsEnum {
  ContentfulId = 'contentful_id',
  Id = 'id',
  NodeLocale = 'node_locale',
  Title = 'title',
  Slug = 'slug',
  ThemeContentfulId = 'theme___contentful_id',
  ThemeId = 'theme___id',
  ThemeNodeLocale = 'theme___node_locale',
  ThemeTitle = 'theme___title',
  ThemeSlug = 'theme___slug',
  ThemeCoverImageContentfulId = 'theme___coverImage___contentful_id',
  ThemeCoverImageId = 'theme___coverImage___id',
  ThemeCoverImageSpaceId = 'theme___coverImage___spaceId',
  ThemeCoverImageCreatedAt = 'theme___coverImage___createdAt',
  ThemeCoverImageUpdatedAt = 'theme___coverImage___updatedAt',
  ThemeCoverImageFileUrl = 'theme___coverImage___file___url',
  ThemeCoverImageFileFileName = 'theme___coverImage___file___fileName',
  ThemeCoverImageFileContentType = 'theme___coverImage___file___contentType',
  ThemeCoverImageTitle = 'theme___coverImage___title',
  ThemeCoverImageDescription = 'theme___coverImage___description',
  ThemeCoverImageNodeLocale = 'theme___coverImage___node_locale',
  ThemeCoverImageSysType = 'theme___coverImage___sys___type',
  ThemeCoverImageSysRevision = 'theme___coverImage___sys___revision',
  ThemeCoverImageLocalFileSourceInstanceName = 'theme___coverImage___localFile___sourceInstanceName',
  ThemeCoverImageLocalFileAbsolutePath = 'theme___coverImage___localFile___absolutePath',
  ThemeCoverImageLocalFileRelativePath = 'theme___coverImage___localFile___relativePath',
  ThemeCoverImageLocalFileExtension = 'theme___coverImage___localFile___extension',
  ThemeCoverImageLocalFileSize = 'theme___coverImage___localFile___size',
  ThemeCoverImageLocalFilePrettySize = 'theme___coverImage___localFile___prettySize',
  ThemeCoverImageLocalFileModifiedTime = 'theme___coverImage___localFile___modifiedTime',
  ThemeCoverImageLocalFileAccessTime = 'theme___coverImage___localFile___accessTime',
  ThemeCoverImageLocalFileChangeTime = 'theme___coverImage___localFile___changeTime',
  ThemeCoverImageLocalFileBirthTime = 'theme___coverImage___localFile___birthTime',
  ThemeCoverImageLocalFileRoot = 'theme___coverImage___localFile___root',
  ThemeCoverImageLocalFileDir = 'theme___coverImage___localFile___dir',
  ThemeCoverImageLocalFileBase = 'theme___coverImage___localFile___base',
  ThemeCoverImageLocalFileExt = 'theme___coverImage___localFile___ext',
  ThemeCoverImageLocalFileName = 'theme___coverImage___localFile___name',
  ThemeCoverImageLocalFileRelativeDirectory = 'theme___coverImage___localFile___relativeDirectory',
  ThemeCoverImageLocalFileDev = 'theme___coverImage___localFile___dev',
  ThemeCoverImageLocalFileMode = 'theme___coverImage___localFile___mode',
  ThemeCoverImageLocalFileNlink = 'theme___coverImage___localFile___nlink',
  ThemeCoverImageLocalFileUid = 'theme___coverImage___localFile___uid',
  ThemeCoverImageLocalFileGid = 'theme___coverImage___localFile___gid',
  ThemeCoverImageLocalFileRdev = 'theme___coverImage___localFile___rdev',
  ThemeCoverImageLocalFileIno = 'theme___coverImage___localFile___ino',
  ThemeCoverImageLocalFileAtimeMs = 'theme___coverImage___localFile___atimeMs',
  ThemeCoverImageLocalFileMtimeMs = 'theme___coverImage___localFile___mtimeMs',
  ThemeCoverImageLocalFileCtimeMs = 'theme___coverImage___localFile___ctimeMs',
  ThemeCoverImageLocalFileAtime = 'theme___coverImage___localFile___atime',
  ThemeCoverImageLocalFileMtime = 'theme___coverImage___localFile___mtime',
  ThemeCoverImageLocalFileCtime = 'theme___coverImage___localFile___ctime',
  ThemeCoverImageLocalFileBirthtime = 'theme___coverImage___localFile___birthtime',
  ThemeCoverImageLocalFileBirthtimeMs = 'theme___coverImage___localFile___birthtimeMs',
  ThemeCoverImageLocalFileBlksize = 'theme___coverImage___localFile___blksize',
  ThemeCoverImageLocalFileBlocks = 'theme___coverImage___localFile___blocks',
  ThemeCoverImageLocalFileUrl = 'theme___coverImage___localFile___url',
  ThemeCoverImageLocalFilePublicUrl = 'theme___coverImage___localFile___publicURL',
  ThemeCoverImageLocalFileId = 'theme___coverImage___localFile___id',
  ThemeCoverImageLocalFileChildren = 'theme___coverImage___localFile___children',
  ThemeCoverImageFixedBase64 = 'theme___coverImage___fixed___base64',
  ThemeCoverImageFixedTracedSvg = 'theme___coverImage___fixed___tracedSVG',
  ThemeCoverImageFixedAspectRatio = 'theme___coverImage___fixed___aspectRatio',
  ThemeCoverImageFixedWidth = 'theme___coverImage___fixed___width',
  ThemeCoverImageFixedHeight = 'theme___coverImage___fixed___height',
  ThemeCoverImageFixedSrc = 'theme___coverImage___fixed___src',
  ThemeCoverImageFixedSrcSet = 'theme___coverImage___fixed___srcSet',
  ThemeCoverImageFixedSrcWebp = 'theme___coverImage___fixed___srcWebp',
  ThemeCoverImageFixedSrcSetWebp = 'theme___coverImage___fixed___srcSetWebp',
  ThemeCoverImageResolutionsBase64 = 'theme___coverImage___resolutions___base64',
  ThemeCoverImageResolutionsTracedSvg = 'theme___coverImage___resolutions___tracedSVG',
  ThemeCoverImageResolutionsAspectRatio = 'theme___coverImage___resolutions___aspectRatio',
  ThemeCoverImageResolutionsWidth = 'theme___coverImage___resolutions___width',
  ThemeCoverImageResolutionsHeight = 'theme___coverImage___resolutions___height',
  ThemeCoverImageResolutionsSrc = 'theme___coverImage___resolutions___src',
  ThemeCoverImageResolutionsSrcSet = 'theme___coverImage___resolutions___srcSet',
  ThemeCoverImageResolutionsSrcWebp = 'theme___coverImage___resolutions___srcWebp',
  ThemeCoverImageResolutionsSrcSetWebp = 'theme___coverImage___resolutions___srcSetWebp',
  ThemeCoverImageFluidBase64 = 'theme___coverImage___fluid___base64',
  ThemeCoverImageFluidTracedSvg = 'theme___coverImage___fluid___tracedSVG',
  ThemeCoverImageFluidAspectRatio = 'theme___coverImage___fluid___aspectRatio',
  ThemeCoverImageFluidSrc = 'theme___coverImage___fluid___src',
  ThemeCoverImageFluidSrcSet = 'theme___coverImage___fluid___srcSet',
  ThemeCoverImageFluidSrcWebp = 'theme___coverImage___fluid___srcWebp',
  ThemeCoverImageFluidSrcSetWebp = 'theme___coverImage___fluid___srcSetWebp',
  ThemeCoverImageFluidSizes = 'theme___coverImage___fluid___sizes',
  ThemeCoverImageSizesBase64 = 'theme___coverImage___sizes___base64',
  ThemeCoverImageSizesTracedSvg = 'theme___coverImage___sizes___tracedSVG',
  ThemeCoverImageSizesAspectRatio = 'theme___coverImage___sizes___aspectRatio',
  ThemeCoverImageSizesSrc = 'theme___coverImage___sizes___src',
  ThemeCoverImageSizesSrcSet = 'theme___coverImage___sizes___srcSet',
  ThemeCoverImageSizesSrcWebp = 'theme___coverImage___sizes___srcWebp',
  ThemeCoverImageSizesSrcSetWebp = 'theme___coverImage___sizes___srcSetWebp',
  ThemeCoverImageSizesSizes = 'theme___coverImage___sizes___sizes',
  ThemeCoverImageResizeBase64 = 'theme___coverImage___resize___base64',
  ThemeCoverImageResizeTracedSvg = 'theme___coverImage___resize___tracedSVG',
  ThemeCoverImageResizeSrc = 'theme___coverImage___resize___src',
  ThemeCoverImageResizeWidth = 'theme___coverImage___resize___width',
  ThemeCoverImageResizeHeight = 'theme___coverImage___resize___height',
  ThemeCoverImageResizeAspectRatio = 'theme___coverImage___resize___aspectRatio',
  ThemeCoverImageParentId = 'theme___coverImage___parent___id',
  ThemeCoverImageParentChildren = 'theme___coverImage___parent___children',
  ThemeCoverImageChildren = 'theme___coverImage___children',
  ThemeCoverImageChildrenId = 'theme___coverImage___children___id',
  ThemeCoverImageChildrenChildren = 'theme___coverImage___children___children',
  ThemeCoverImageInternalContent = 'theme___coverImage___internal___content',
  ThemeCoverImageInternalContentDigest = 'theme___coverImage___internal___contentDigest',
  ThemeCoverImageInternalDescription = 'theme___coverImage___internal___description',
  ThemeCoverImageInternalFieldOwners = 'theme___coverImage___internal___fieldOwners',
  ThemeCoverImageInternalIgnoreType = 'theme___coverImage___internal___ignoreType',
  ThemeCoverImageInternalMediaType = 'theme___coverImage___internal___mediaType',
  ThemeCoverImageInternalOwner = 'theme___coverImage___internal___owner',
  ThemeCoverImageInternalType = 'theme___coverImage___internal___type',
  ThemeFeaturedPhotos = 'theme___featuredPhotos',
  ThemeFeaturedPhotosContentfulId = 'theme___featuredPhotos___contentful_id',
  ThemeFeaturedPhotosId = 'theme___featuredPhotos___id',
  ThemeFeaturedPhotosSpaceId = 'theme___featuredPhotos___spaceId',
  ThemeFeaturedPhotosCreatedAt = 'theme___featuredPhotos___createdAt',
  ThemeFeaturedPhotosUpdatedAt = 'theme___featuredPhotos___updatedAt',
  ThemeFeaturedPhotosFileUrl = 'theme___featuredPhotos___file___url',
  ThemeFeaturedPhotosFileFileName = 'theme___featuredPhotos___file___fileName',
  ThemeFeaturedPhotosFileContentType = 'theme___featuredPhotos___file___contentType',
  ThemeFeaturedPhotosTitle = 'theme___featuredPhotos___title',
  ThemeFeaturedPhotosDescription = 'theme___featuredPhotos___description',
  ThemeFeaturedPhotosNodeLocale = 'theme___featuredPhotos___node_locale',
  ThemeFeaturedPhotosSysType = 'theme___featuredPhotos___sys___type',
  ThemeFeaturedPhotosSysRevision = 'theme___featuredPhotos___sys___revision',
  ThemeFeaturedPhotosLocalFileSourceInstanceName = 'theme___featuredPhotos___localFile___sourceInstanceName',
  ThemeFeaturedPhotosLocalFileAbsolutePath = 'theme___featuredPhotos___localFile___absolutePath',
  ThemeFeaturedPhotosLocalFileRelativePath = 'theme___featuredPhotos___localFile___relativePath',
  ThemeFeaturedPhotosLocalFileExtension = 'theme___featuredPhotos___localFile___extension',
  ThemeFeaturedPhotosLocalFileSize = 'theme___featuredPhotos___localFile___size',
  ThemeFeaturedPhotosLocalFilePrettySize = 'theme___featuredPhotos___localFile___prettySize',
  ThemeFeaturedPhotosLocalFileModifiedTime = 'theme___featuredPhotos___localFile___modifiedTime',
  ThemeFeaturedPhotosLocalFileAccessTime = 'theme___featuredPhotos___localFile___accessTime',
  ThemeFeaturedPhotosLocalFileChangeTime = 'theme___featuredPhotos___localFile___changeTime',
  ThemeFeaturedPhotosLocalFileBirthTime = 'theme___featuredPhotos___localFile___birthTime',
  ThemeFeaturedPhotosLocalFileRoot = 'theme___featuredPhotos___localFile___root',
  ThemeFeaturedPhotosLocalFileDir = 'theme___featuredPhotos___localFile___dir',
  ThemeFeaturedPhotosLocalFileBase = 'theme___featuredPhotos___localFile___base',
  ThemeFeaturedPhotosLocalFileExt = 'theme___featuredPhotos___localFile___ext',
  ThemeFeaturedPhotosLocalFileName = 'theme___featuredPhotos___localFile___name',
  ThemeFeaturedPhotosLocalFileRelativeDirectory = 'theme___featuredPhotos___localFile___relativeDirectory',
  ThemeFeaturedPhotosLocalFileDev = 'theme___featuredPhotos___localFile___dev',
  ThemeFeaturedPhotosLocalFileMode = 'theme___featuredPhotos___localFile___mode',
  ThemeFeaturedPhotosLocalFileNlink = 'theme___featuredPhotos___localFile___nlink',
  ThemeFeaturedPhotosLocalFileUid = 'theme___featuredPhotos___localFile___uid',
  ThemeFeaturedPhotosLocalFileGid = 'theme___featuredPhotos___localFile___gid',
  ThemeFeaturedPhotosLocalFileRdev = 'theme___featuredPhotos___localFile___rdev',
  ThemeFeaturedPhotosLocalFileIno = 'theme___featuredPhotos___localFile___ino',
  ThemeFeaturedPhotosLocalFileAtimeMs = 'theme___featuredPhotos___localFile___atimeMs',
  ThemeFeaturedPhotosLocalFileMtimeMs = 'theme___featuredPhotos___localFile___mtimeMs',
  ThemeFeaturedPhotosLocalFileCtimeMs = 'theme___featuredPhotos___localFile___ctimeMs',
  ThemeFeaturedPhotosLocalFileAtime = 'theme___featuredPhotos___localFile___atime',
  ThemeFeaturedPhotosLocalFileMtime = 'theme___featuredPhotos___localFile___mtime',
  ThemeFeaturedPhotosLocalFileCtime = 'theme___featuredPhotos___localFile___ctime',
  ThemeFeaturedPhotosLocalFileBirthtime = 'theme___featuredPhotos___localFile___birthtime',
  ThemeFeaturedPhotosLocalFileBirthtimeMs = 'theme___featuredPhotos___localFile___birthtimeMs',
  ThemeFeaturedPhotosLocalFileBlksize = 'theme___featuredPhotos___localFile___blksize',
  ThemeFeaturedPhotosLocalFileBlocks = 'theme___featuredPhotos___localFile___blocks',
  ThemeFeaturedPhotosLocalFileUrl = 'theme___featuredPhotos___localFile___url',
  ThemeFeaturedPhotosLocalFilePublicUrl = 'theme___featuredPhotos___localFile___publicURL',
  ThemeFeaturedPhotosLocalFileId = 'theme___featuredPhotos___localFile___id',
  ThemeFeaturedPhotosLocalFileChildren = 'theme___featuredPhotos___localFile___children',
  ThemeFeaturedPhotosFixedBase64 = 'theme___featuredPhotos___fixed___base64',
  ThemeFeaturedPhotosFixedTracedSvg = 'theme___featuredPhotos___fixed___tracedSVG',
  ThemeFeaturedPhotosFixedAspectRatio = 'theme___featuredPhotos___fixed___aspectRatio',
  ThemeFeaturedPhotosFixedWidth = 'theme___featuredPhotos___fixed___width',
  ThemeFeaturedPhotosFixedHeight = 'theme___featuredPhotos___fixed___height',
  ThemeFeaturedPhotosFixedSrc = 'theme___featuredPhotos___fixed___src',
  ThemeFeaturedPhotosFixedSrcSet = 'theme___featuredPhotos___fixed___srcSet',
  ThemeFeaturedPhotosFixedSrcWebp = 'theme___featuredPhotos___fixed___srcWebp',
  ThemeFeaturedPhotosFixedSrcSetWebp = 'theme___featuredPhotos___fixed___srcSetWebp',
  ThemeFeaturedPhotosResolutionsBase64 = 'theme___featuredPhotos___resolutions___base64',
  ThemeFeaturedPhotosResolutionsTracedSvg = 'theme___featuredPhotos___resolutions___tracedSVG',
  ThemeFeaturedPhotosResolutionsAspectRatio = 'theme___featuredPhotos___resolutions___aspectRatio',
  ThemeFeaturedPhotosResolutionsWidth = 'theme___featuredPhotos___resolutions___width',
  ThemeFeaturedPhotosResolutionsHeight = 'theme___featuredPhotos___resolutions___height',
  ThemeFeaturedPhotosResolutionsSrc = 'theme___featuredPhotos___resolutions___src',
  ThemeFeaturedPhotosResolutionsSrcSet = 'theme___featuredPhotos___resolutions___srcSet',
  ThemeFeaturedPhotosResolutionsSrcWebp = 'theme___featuredPhotos___resolutions___srcWebp',
  ThemeFeaturedPhotosResolutionsSrcSetWebp = 'theme___featuredPhotos___resolutions___srcSetWebp',
  ThemeFeaturedPhotosFluidBase64 = 'theme___featuredPhotos___fluid___base64',
  ThemeFeaturedPhotosFluidTracedSvg = 'theme___featuredPhotos___fluid___tracedSVG',
  ThemeFeaturedPhotosFluidAspectRatio = 'theme___featuredPhotos___fluid___aspectRatio',
  ThemeFeaturedPhotosFluidSrc = 'theme___featuredPhotos___fluid___src',
  ThemeFeaturedPhotosFluidSrcSet = 'theme___featuredPhotos___fluid___srcSet',
  ThemeFeaturedPhotosFluidSrcWebp = 'theme___featuredPhotos___fluid___srcWebp',
  ThemeFeaturedPhotosFluidSrcSetWebp = 'theme___featuredPhotos___fluid___srcSetWebp',
  ThemeFeaturedPhotosFluidSizes = 'theme___featuredPhotos___fluid___sizes',
  ThemeFeaturedPhotosSizesBase64 = 'theme___featuredPhotos___sizes___base64',
  ThemeFeaturedPhotosSizesTracedSvg = 'theme___featuredPhotos___sizes___tracedSVG',
  ThemeFeaturedPhotosSizesAspectRatio = 'theme___featuredPhotos___sizes___aspectRatio',
  ThemeFeaturedPhotosSizesSrc = 'theme___featuredPhotos___sizes___src',
  ThemeFeaturedPhotosSizesSrcSet = 'theme___featuredPhotos___sizes___srcSet',
  ThemeFeaturedPhotosSizesSrcWebp = 'theme___featuredPhotos___sizes___srcWebp',
  ThemeFeaturedPhotosSizesSrcSetWebp = 'theme___featuredPhotos___sizes___srcSetWebp',
  ThemeFeaturedPhotosSizesSizes = 'theme___featuredPhotos___sizes___sizes',
  ThemeFeaturedPhotosResizeBase64 = 'theme___featuredPhotos___resize___base64',
  ThemeFeaturedPhotosResizeTracedSvg = 'theme___featuredPhotos___resize___tracedSVG',
  ThemeFeaturedPhotosResizeSrc = 'theme___featuredPhotos___resize___src',
  ThemeFeaturedPhotosResizeWidth = 'theme___featuredPhotos___resize___width',
  ThemeFeaturedPhotosResizeHeight = 'theme___featuredPhotos___resize___height',
  ThemeFeaturedPhotosResizeAspectRatio = 'theme___featuredPhotos___resize___aspectRatio',
  ThemeFeaturedPhotosParentId = 'theme___featuredPhotos___parent___id',
  ThemeFeaturedPhotosParentChildren = 'theme___featuredPhotos___parent___children',
  ThemeFeaturedPhotosChildren = 'theme___featuredPhotos___children',
  ThemeFeaturedPhotosChildrenId = 'theme___featuredPhotos___children___id',
  ThemeFeaturedPhotosChildrenChildren = 'theme___featuredPhotos___children___children',
  ThemeFeaturedPhotosInternalContent = 'theme___featuredPhotos___internal___content',
  ThemeFeaturedPhotosInternalContentDigest = 'theme___featuredPhotos___internal___contentDigest',
  ThemeFeaturedPhotosInternalDescription = 'theme___featuredPhotos___internal___description',
  ThemeFeaturedPhotosInternalFieldOwners = 'theme___featuredPhotos___internal___fieldOwners',
  ThemeFeaturedPhotosInternalIgnoreType = 'theme___featuredPhotos___internal___ignoreType',
  ThemeFeaturedPhotosInternalMediaType = 'theme___featuredPhotos___internal___mediaType',
  ThemeFeaturedPhotosInternalOwner = 'theme___featuredPhotos___internal___owner',
  ThemeFeaturedPhotosInternalType = 'theme___featuredPhotos___internal___type',
  ThemeProject = 'theme___project',
  ThemeProjectContentfulId = 'theme___project___contentful_id',
  ThemeProjectId = 'theme___project___id',
  ThemeProjectNodeLocale = 'theme___project___node_locale',
  ThemeProjectTitle = 'theme___project___title',
  ThemeProjectSlug = 'theme___project___slug',
  ThemeProjectThemeContentfulId = 'theme___project___theme___contentful_id',
  ThemeProjectThemeId = 'theme___project___theme___id',
  ThemeProjectThemeNodeLocale = 'theme___project___theme___node_locale',
  ThemeProjectThemeTitle = 'theme___project___theme___title',
  ThemeProjectThemeSlug = 'theme___project___theme___slug',
  ThemeProjectThemeFeaturedPhotos = 'theme___project___theme___featuredPhotos',
  ThemeProjectThemeProject = 'theme___project___theme___project',
  ThemeProjectThemeHomepageFeatured = 'theme___project___theme___homepage___featured',
  ThemeProjectThemeSpaceId = 'theme___project___theme___spaceId',
  ThemeProjectThemeCreatedAt = 'theme___project___theme___createdAt',
  ThemeProjectThemeUpdatedAt = 'theme___project___theme___updatedAt',
  ThemeProjectThemeChildren = 'theme___project___theme___children',
  ThemeProjectCoverImageContentfulId = 'theme___project___coverImage___contentful_id',
  ThemeProjectCoverImageId = 'theme___project___coverImage___id',
  ThemeProjectCoverImageSpaceId = 'theme___project___coverImage___spaceId',
  ThemeProjectCoverImageCreatedAt = 'theme___project___coverImage___createdAt',
  ThemeProjectCoverImageUpdatedAt = 'theme___project___coverImage___updatedAt',
  ThemeProjectCoverImageTitle = 'theme___project___coverImage___title',
  ThemeProjectCoverImageDescription = 'theme___project___coverImage___description',
  ThemeProjectCoverImageNodeLocale = 'theme___project___coverImage___node_locale',
  ThemeProjectCoverImageChildren = 'theme___project___coverImage___children',
  ThemeProjectPhotos = 'theme___project___photos',
  ThemeProjectPhotosContentfulId = 'theme___project___photos___contentful_id',
  ThemeProjectPhotosId = 'theme___project___photos___id',
  ThemeProjectPhotosSpaceId = 'theme___project___photos___spaceId',
  ThemeProjectPhotosCreatedAt = 'theme___project___photos___createdAt',
  ThemeProjectPhotosUpdatedAt = 'theme___project___photos___updatedAt',
  ThemeProjectPhotosTitle = 'theme___project___photos___title',
  ThemeProjectPhotosDescription = 'theme___project___photos___description',
  ThemeProjectPhotosNodeLocale = 'theme___project___photos___node_locale',
  ThemeProjectPhotosChildren = 'theme___project___photos___children',
  ThemeProjectDescriptionId = 'theme___project___description___id',
  ThemeProjectDescriptionChildren = 'theme___project___description___children',
  ThemeProjectDescriptionDescription = 'theme___project___description___description',
  ThemeProjectSpaceId = 'theme___project___spaceId',
  ThemeProjectCreatedAt = 'theme___project___createdAt',
  ThemeProjectUpdatedAt = 'theme___project___updatedAt',
  ThemeProjectSysType = 'theme___project___sys___type',
  ThemeProjectSysRevision = 'theme___project___sys___revision',
  ThemeProjectHomepageFeatured = 'theme___project___homepage___featured',
  ThemeProjectHomepageFeaturedContentfulId = 'theme___project___homepage___featured___contentful_id',
  ThemeProjectHomepageFeaturedId = 'theme___project___homepage___featured___id',
  ThemeProjectHomepageFeaturedNodeLocale = 'theme___project___homepage___featured___node_locale',
  ThemeProjectHomepageFeaturedThemes = 'theme___project___homepage___featured___themes',
  ThemeProjectHomepageFeaturedProjects = 'theme___project___homepage___featured___projects',
  ThemeProjectHomepageFeaturedSpaceId = 'theme___project___homepage___featured___spaceId',
  ThemeProjectHomepageFeaturedCreatedAt = 'theme___project___homepage___featured___createdAt',
  ThemeProjectHomepageFeaturedUpdatedAt = 'theme___project___homepage___featured___updatedAt',
  ThemeProjectHomepageFeaturedChildren = 'theme___project___homepage___featured___children',
  ThemeProjectHomepageLatestWork = 'theme___project___homepage___latest_work',
  ThemeProjectHomepageLatestWorkContentfulId = 'theme___project___homepage___latest_work___contentful_id',
  ThemeProjectHomepageLatestWorkId = 'theme___project___homepage___latest_work___id',
  ThemeProjectHomepageLatestWorkNodeLocale = 'theme___project___homepage___latest_work___node_locale',
  ThemeProjectHomepageLatestWorkFeaturedPhotos = 'theme___project___homepage___latest_work___featuredPhotos',
  ThemeProjectHomepageLatestWorkSpaceId = 'theme___project___homepage___latest_work___spaceId',
  ThemeProjectHomepageLatestWorkCreatedAt = 'theme___project___homepage___latest_work___createdAt',
  ThemeProjectHomepageLatestWorkUpdatedAt = 'theme___project___homepage___latest_work___updatedAt',
  ThemeProjectHomepageLatestWorkChildren = 'theme___project___homepage___latest_work___children',
  ThemeProjectParentId = 'theme___project___parent___id',
  ThemeProjectParentChildren = 'theme___project___parent___children',
  ThemeProjectChildren = 'theme___project___children',
  ThemeProjectChildrenId = 'theme___project___children___id',
  ThemeProjectChildrenChildren = 'theme___project___children___children',
  ThemeProjectInternalContent = 'theme___project___internal___content',
  ThemeProjectInternalContentDigest = 'theme___project___internal___contentDigest',
  ThemeProjectInternalDescription = 'theme___project___internal___description',
  ThemeProjectInternalFieldOwners = 'theme___project___internal___fieldOwners',
  ThemeProjectInternalIgnoreType = 'theme___project___internal___ignoreType',
  ThemeProjectInternalMediaType = 'theme___project___internal___mediaType',
  ThemeProjectInternalOwner = 'theme___project___internal___owner',
  ThemeProjectInternalType = 'theme___project___internal___type',
  ThemeProjectChildContentfulProjectDescriptionTextNodeId = 'theme___project___childContentfulProjectDescriptionTextNode___id',
  ThemeProjectChildContentfulProjectDescriptionTextNodeChildren = 'theme___project___childContentfulProjectDescriptionTextNode___children',
  ThemeProjectChildContentfulProjectDescriptionTextNodeDescription = 'theme___project___childContentfulProjectDescriptionTextNode___description',
  ThemeHomepageFeatured = 'theme___homepage___featured',
  ThemeHomepageFeaturedContentfulId = 'theme___homepage___featured___contentful_id',
  ThemeHomepageFeaturedId = 'theme___homepage___featured___id',
  ThemeHomepageFeaturedNodeLocale = 'theme___homepage___featured___node_locale',
  ThemeHomepageFeaturedThemes = 'theme___homepage___featured___themes',
  ThemeHomepageFeaturedThemesContentfulId = 'theme___homepage___featured___themes___contentful_id',
  ThemeHomepageFeaturedThemesId = 'theme___homepage___featured___themes___id',
  ThemeHomepageFeaturedThemesNodeLocale = 'theme___homepage___featured___themes___node_locale',
  ThemeHomepageFeaturedThemesTitle = 'theme___homepage___featured___themes___title',
  ThemeHomepageFeaturedThemesSlug = 'theme___homepage___featured___themes___slug',
  ThemeHomepageFeaturedThemesFeaturedPhotos = 'theme___homepage___featured___themes___featuredPhotos',
  ThemeHomepageFeaturedThemesProject = 'theme___homepage___featured___themes___project',
  ThemeHomepageFeaturedThemesHomepageFeatured = 'theme___homepage___featured___themes___homepage___featured',
  ThemeHomepageFeaturedThemesSpaceId = 'theme___homepage___featured___themes___spaceId',
  ThemeHomepageFeaturedThemesCreatedAt = 'theme___homepage___featured___themes___createdAt',
  ThemeHomepageFeaturedThemesUpdatedAt = 'theme___homepage___featured___themes___updatedAt',
  ThemeHomepageFeaturedThemesChildren = 'theme___homepage___featured___themes___children',
  ThemeHomepageFeaturedProjects = 'theme___homepage___featured___projects',
  ThemeHomepageFeaturedProjectsContentfulId = 'theme___homepage___featured___projects___contentful_id',
  ThemeHomepageFeaturedProjectsId = 'theme___homepage___featured___projects___id',
  ThemeHomepageFeaturedProjectsNodeLocale = 'theme___homepage___featured___projects___node_locale',
  ThemeHomepageFeaturedProjectsTitle = 'theme___homepage___featured___projects___title',
  ThemeHomepageFeaturedProjectsSlug = 'theme___homepage___featured___projects___slug',
  ThemeHomepageFeaturedProjectsPhotos = 'theme___homepage___featured___projects___photos',
  ThemeHomepageFeaturedProjectsSpaceId = 'theme___homepage___featured___projects___spaceId',
  ThemeHomepageFeaturedProjectsCreatedAt = 'theme___homepage___featured___projects___createdAt',
  ThemeHomepageFeaturedProjectsUpdatedAt = 'theme___homepage___featured___projects___updatedAt',
  ThemeHomepageFeaturedProjectsHomepageFeatured = 'theme___homepage___featured___projects___homepage___featured',
  ThemeHomepageFeaturedProjectsHomepageLatestWork = 'theme___homepage___featured___projects___homepage___latest_work',
  ThemeHomepageFeaturedProjectsChildren = 'theme___homepage___featured___projects___children',
  ThemeHomepageFeaturedSpaceId = 'theme___homepage___featured___spaceId',
  ThemeHomepageFeaturedCreatedAt = 'theme___homepage___featured___createdAt',
  ThemeHomepageFeaturedUpdatedAt = 'theme___homepage___featured___updatedAt',
  ThemeHomepageFeaturedSysType = 'theme___homepage___featured___sys___type',
  ThemeHomepageFeaturedSysRevision = 'theme___homepage___featured___sys___revision',
  ThemeHomepageFeaturedParentId = 'theme___homepage___featured___parent___id',
  ThemeHomepageFeaturedParentChildren = 'theme___homepage___featured___parent___children',
  ThemeHomepageFeaturedChildren = 'theme___homepage___featured___children',
  ThemeHomepageFeaturedChildrenId = 'theme___homepage___featured___children___id',
  ThemeHomepageFeaturedChildrenChildren = 'theme___homepage___featured___children___children',
  ThemeHomepageFeaturedInternalContent = 'theme___homepage___featured___internal___content',
  ThemeHomepageFeaturedInternalContentDigest = 'theme___homepage___featured___internal___contentDigest',
  ThemeHomepageFeaturedInternalDescription = 'theme___homepage___featured___internal___description',
  ThemeHomepageFeaturedInternalFieldOwners = 'theme___homepage___featured___internal___fieldOwners',
  ThemeHomepageFeaturedInternalIgnoreType = 'theme___homepage___featured___internal___ignoreType',
  ThemeHomepageFeaturedInternalMediaType = 'theme___homepage___featured___internal___mediaType',
  ThemeHomepageFeaturedInternalOwner = 'theme___homepage___featured___internal___owner',
  ThemeHomepageFeaturedInternalType = 'theme___homepage___featured___internal___type',
  ThemeSpaceId = 'theme___spaceId',
  ThemeCreatedAt = 'theme___createdAt',
  ThemeUpdatedAt = 'theme___updatedAt',
  ThemeSysType = 'theme___sys___type',
  ThemeSysRevision = 'theme___sys___revision',
  ThemeParentId = 'theme___parent___id',
  ThemeParentParentId = 'theme___parent___parent___id',
  ThemeParentParentChildren = 'theme___parent___parent___children',
  ThemeParentChildren = 'theme___parent___children',
  ThemeParentChildrenId = 'theme___parent___children___id',
  ThemeParentChildrenChildren = 'theme___parent___children___children',
  ThemeParentInternalContent = 'theme___parent___internal___content',
  ThemeParentInternalContentDigest = 'theme___parent___internal___contentDigest',
  ThemeParentInternalDescription = 'theme___parent___internal___description',
  ThemeParentInternalFieldOwners = 'theme___parent___internal___fieldOwners',
  ThemeParentInternalIgnoreType = 'theme___parent___internal___ignoreType',
  ThemeParentInternalMediaType = 'theme___parent___internal___mediaType',
  ThemeParentInternalOwner = 'theme___parent___internal___owner',
  ThemeParentInternalType = 'theme___parent___internal___type',
  ThemeChildren = 'theme___children',
  ThemeChildrenId = 'theme___children___id',
  ThemeChildrenParentId = 'theme___children___parent___id',
  ThemeChildrenParentChildren = 'theme___children___parent___children',
  ThemeChildrenChildren = 'theme___children___children',
  ThemeChildrenChildrenId = 'theme___children___children___id',
  ThemeChildrenChildrenChildren = 'theme___children___children___children',
  ThemeChildrenInternalContent = 'theme___children___internal___content',
  ThemeChildrenInternalContentDigest = 'theme___children___internal___contentDigest',
  ThemeChildrenInternalDescription = 'theme___children___internal___description',
  ThemeChildrenInternalFieldOwners = 'theme___children___internal___fieldOwners',
  ThemeChildrenInternalIgnoreType = 'theme___children___internal___ignoreType',
  ThemeChildrenInternalMediaType = 'theme___children___internal___mediaType',
  ThemeChildrenInternalOwner = 'theme___children___internal___owner',
  ThemeChildrenInternalType = 'theme___children___internal___type',
  ThemeInternalContent = 'theme___internal___content',
  ThemeInternalContentDigest = 'theme___internal___contentDigest',
  ThemeInternalDescription = 'theme___internal___description',
  ThemeInternalFieldOwners = 'theme___internal___fieldOwners',
  ThemeInternalIgnoreType = 'theme___internal___ignoreType',
  ThemeInternalMediaType = 'theme___internal___mediaType',
  ThemeInternalOwner = 'theme___internal___owner',
  ThemeInternalType = 'theme___internal___type',
  CoverImageContentfulId = 'coverImage___contentful_id',
  CoverImageId = 'coverImage___id',
  CoverImageSpaceId = 'coverImage___spaceId',
  CoverImageCreatedAt = 'coverImage___createdAt',
  CoverImageUpdatedAt = 'coverImage___updatedAt',
  CoverImageFileUrl = 'coverImage___file___url',
  CoverImageFileDetailsSize = 'coverImage___file___details___size',
  CoverImageFileFileName = 'coverImage___file___fileName',
  CoverImageFileContentType = 'coverImage___file___contentType',
  CoverImageTitle = 'coverImage___title',
  CoverImageDescription = 'coverImage___description',
  CoverImageNodeLocale = 'coverImage___node_locale',
  CoverImageSysType = 'coverImage___sys___type',
  CoverImageSysRevision = 'coverImage___sys___revision',
  CoverImageLocalFileSourceInstanceName = 'coverImage___localFile___sourceInstanceName',
  CoverImageLocalFileAbsolutePath = 'coverImage___localFile___absolutePath',
  CoverImageLocalFileRelativePath = 'coverImage___localFile___relativePath',
  CoverImageLocalFileExtension = 'coverImage___localFile___extension',
  CoverImageLocalFileSize = 'coverImage___localFile___size',
  CoverImageLocalFilePrettySize = 'coverImage___localFile___prettySize',
  CoverImageLocalFileModifiedTime = 'coverImage___localFile___modifiedTime',
  CoverImageLocalFileAccessTime = 'coverImage___localFile___accessTime',
  CoverImageLocalFileChangeTime = 'coverImage___localFile___changeTime',
  CoverImageLocalFileBirthTime = 'coverImage___localFile___birthTime',
  CoverImageLocalFileRoot = 'coverImage___localFile___root',
  CoverImageLocalFileDir = 'coverImage___localFile___dir',
  CoverImageLocalFileBase = 'coverImage___localFile___base',
  CoverImageLocalFileExt = 'coverImage___localFile___ext',
  CoverImageLocalFileName = 'coverImage___localFile___name',
  CoverImageLocalFileRelativeDirectory = 'coverImage___localFile___relativeDirectory',
  CoverImageLocalFileDev = 'coverImage___localFile___dev',
  CoverImageLocalFileMode = 'coverImage___localFile___mode',
  CoverImageLocalFileNlink = 'coverImage___localFile___nlink',
  CoverImageLocalFileUid = 'coverImage___localFile___uid',
  CoverImageLocalFileGid = 'coverImage___localFile___gid',
  CoverImageLocalFileRdev = 'coverImage___localFile___rdev',
  CoverImageLocalFileIno = 'coverImage___localFile___ino',
  CoverImageLocalFileAtimeMs = 'coverImage___localFile___atimeMs',
  CoverImageLocalFileMtimeMs = 'coverImage___localFile___mtimeMs',
  CoverImageLocalFileCtimeMs = 'coverImage___localFile___ctimeMs',
  CoverImageLocalFileAtime = 'coverImage___localFile___atime',
  CoverImageLocalFileMtime = 'coverImage___localFile___mtime',
  CoverImageLocalFileCtime = 'coverImage___localFile___ctime',
  CoverImageLocalFileBirthtime = 'coverImage___localFile___birthtime',
  CoverImageLocalFileBirthtimeMs = 'coverImage___localFile___birthtimeMs',
  CoverImageLocalFileBlksize = 'coverImage___localFile___blksize',
  CoverImageLocalFileBlocks = 'coverImage___localFile___blocks',
  CoverImageLocalFileUrl = 'coverImage___localFile___url',
  CoverImageLocalFilePublicUrl = 'coverImage___localFile___publicURL',
  CoverImageLocalFileChildImageSharpGatsbyImageData = 'coverImage___localFile___childImageSharp___gatsbyImageData',
  CoverImageLocalFileChildImageSharpId = 'coverImage___localFile___childImageSharp___id',
  CoverImageLocalFileChildImageSharpChildren = 'coverImage___localFile___childImageSharp___children',
  CoverImageLocalFileId = 'coverImage___localFile___id',
  CoverImageLocalFileParentId = 'coverImage___localFile___parent___id',
  CoverImageLocalFileParentChildren = 'coverImage___localFile___parent___children',
  CoverImageLocalFileChildren = 'coverImage___localFile___children',
  CoverImageLocalFileChildrenId = 'coverImage___localFile___children___id',
  CoverImageLocalFileChildrenChildren = 'coverImage___localFile___children___children',
  CoverImageLocalFileInternalContent = 'coverImage___localFile___internal___content',
  CoverImageLocalFileInternalContentDigest = 'coverImage___localFile___internal___contentDigest',
  CoverImageLocalFileInternalDescription = 'coverImage___localFile___internal___description',
  CoverImageLocalFileInternalFieldOwners = 'coverImage___localFile___internal___fieldOwners',
  CoverImageLocalFileInternalIgnoreType = 'coverImage___localFile___internal___ignoreType',
  CoverImageLocalFileInternalMediaType = 'coverImage___localFile___internal___mediaType',
  CoverImageLocalFileInternalOwner = 'coverImage___localFile___internal___owner',
  CoverImageLocalFileInternalType = 'coverImage___localFile___internal___type',
  CoverImageFixedBase64 = 'coverImage___fixed___base64',
  CoverImageFixedTracedSvg = 'coverImage___fixed___tracedSVG',
  CoverImageFixedAspectRatio = 'coverImage___fixed___aspectRatio',
  CoverImageFixedWidth = 'coverImage___fixed___width',
  CoverImageFixedHeight = 'coverImage___fixed___height',
  CoverImageFixedSrc = 'coverImage___fixed___src',
  CoverImageFixedSrcSet = 'coverImage___fixed___srcSet',
  CoverImageFixedSrcWebp = 'coverImage___fixed___srcWebp',
  CoverImageFixedSrcSetWebp = 'coverImage___fixed___srcSetWebp',
  CoverImageResolutionsBase64 = 'coverImage___resolutions___base64',
  CoverImageResolutionsTracedSvg = 'coverImage___resolutions___tracedSVG',
  CoverImageResolutionsAspectRatio = 'coverImage___resolutions___aspectRatio',
  CoverImageResolutionsWidth = 'coverImage___resolutions___width',
  CoverImageResolutionsHeight = 'coverImage___resolutions___height',
  CoverImageResolutionsSrc = 'coverImage___resolutions___src',
  CoverImageResolutionsSrcSet = 'coverImage___resolutions___srcSet',
  CoverImageResolutionsSrcWebp = 'coverImage___resolutions___srcWebp',
  CoverImageResolutionsSrcSetWebp = 'coverImage___resolutions___srcSetWebp',
  CoverImageFluidBase64 = 'coverImage___fluid___base64',
  CoverImageFluidTracedSvg = 'coverImage___fluid___tracedSVG',
  CoverImageFluidAspectRatio = 'coverImage___fluid___aspectRatio',
  CoverImageFluidSrc = 'coverImage___fluid___src',
  CoverImageFluidSrcSet = 'coverImage___fluid___srcSet',
  CoverImageFluidSrcWebp = 'coverImage___fluid___srcWebp',
  CoverImageFluidSrcSetWebp = 'coverImage___fluid___srcSetWebp',
  CoverImageFluidSizes = 'coverImage___fluid___sizes',
  CoverImageSizesBase64 = 'coverImage___sizes___base64',
  CoverImageSizesTracedSvg = 'coverImage___sizes___tracedSVG',
  CoverImageSizesAspectRatio = 'coverImage___sizes___aspectRatio',
  CoverImageSizesSrc = 'coverImage___sizes___src',
  CoverImageSizesSrcSet = 'coverImage___sizes___srcSet',
  CoverImageSizesSrcWebp = 'coverImage___sizes___srcWebp',
  CoverImageSizesSrcSetWebp = 'coverImage___sizes___srcSetWebp',
  CoverImageSizesSizes = 'coverImage___sizes___sizes',
  CoverImageResizeBase64 = 'coverImage___resize___base64',
  CoverImageResizeTracedSvg = 'coverImage___resize___tracedSVG',
  CoverImageResizeSrc = 'coverImage___resize___src',
  CoverImageResizeWidth = 'coverImage___resize___width',
  CoverImageResizeHeight = 'coverImage___resize___height',
  CoverImageResizeAspectRatio = 'coverImage___resize___aspectRatio',
  CoverImageParentId = 'coverImage___parent___id',
  CoverImageParentParentId = 'coverImage___parent___parent___id',
  CoverImageParentParentChildren = 'coverImage___parent___parent___children',
  CoverImageParentChildren = 'coverImage___parent___children',
  CoverImageParentChildrenId = 'coverImage___parent___children___id',
  CoverImageParentChildrenChildren = 'coverImage___parent___children___children',
  CoverImageParentInternalContent = 'coverImage___parent___internal___content',
  CoverImageParentInternalContentDigest = 'coverImage___parent___internal___contentDigest',
  CoverImageParentInternalDescription = 'coverImage___parent___internal___description',
  CoverImageParentInternalFieldOwners = 'coverImage___parent___internal___fieldOwners',
  CoverImageParentInternalIgnoreType = 'coverImage___parent___internal___ignoreType',
  CoverImageParentInternalMediaType = 'coverImage___parent___internal___mediaType',
  CoverImageParentInternalOwner = 'coverImage___parent___internal___owner',
  CoverImageParentInternalType = 'coverImage___parent___internal___type',
  CoverImageChildren = 'coverImage___children',
  CoverImageChildrenId = 'coverImage___children___id',
  CoverImageChildrenParentId = 'coverImage___children___parent___id',
  CoverImageChildrenParentChildren = 'coverImage___children___parent___children',
  CoverImageChildrenChildren = 'coverImage___children___children',
  CoverImageChildrenChildrenId = 'coverImage___children___children___id',
  CoverImageChildrenChildrenChildren = 'coverImage___children___children___children',
  CoverImageChildrenInternalContent = 'coverImage___children___internal___content',
  CoverImageChildrenInternalContentDigest = 'coverImage___children___internal___contentDigest',
  CoverImageChildrenInternalDescription = 'coverImage___children___internal___description',
  CoverImageChildrenInternalFieldOwners = 'coverImage___children___internal___fieldOwners',
  CoverImageChildrenInternalIgnoreType = 'coverImage___children___internal___ignoreType',
  CoverImageChildrenInternalMediaType = 'coverImage___children___internal___mediaType',
  CoverImageChildrenInternalOwner = 'coverImage___children___internal___owner',
  CoverImageChildrenInternalType = 'coverImage___children___internal___type',
  CoverImageInternalContent = 'coverImage___internal___content',
  CoverImageInternalContentDigest = 'coverImage___internal___contentDigest',
  CoverImageInternalDescription = 'coverImage___internal___description',
  CoverImageInternalFieldOwners = 'coverImage___internal___fieldOwners',
  CoverImageInternalIgnoreType = 'coverImage___internal___ignoreType',
  CoverImageInternalMediaType = 'coverImage___internal___mediaType',
  CoverImageInternalOwner = 'coverImage___internal___owner',
  CoverImageInternalType = 'coverImage___internal___type',
  Photos = 'photos',
  PhotosContentfulId = 'photos___contentful_id',
  PhotosId = 'photos___id',
  PhotosSpaceId = 'photos___spaceId',
  PhotosCreatedAt = 'photos___createdAt',
  PhotosUpdatedAt = 'photos___updatedAt',
  PhotosFileUrl = 'photos___file___url',
  PhotosFileDetailsSize = 'photos___file___details___size',
  PhotosFileFileName = 'photos___file___fileName',
  PhotosFileContentType = 'photos___file___contentType',
  PhotosTitle = 'photos___title',
  PhotosDescription = 'photos___description',
  PhotosNodeLocale = 'photos___node_locale',
  PhotosSysType = 'photos___sys___type',
  PhotosSysRevision = 'photos___sys___revision',
  PhotosLocalFileSourceInstanceName = 'photos___localFile___sourceInstanceName',
  PhotosLocalFileAbsolutePath = 'photos___localFile___absolutePath',
  PhotosLocalFileRelativePath = 'photos___localFile___relativePath',
  PhotosLocalFileExtension = 'photos___localFile___extension',
  PhotosLocalFileSize = 'photos___localFile___size',
  PhotosLocalFilePrettySize = 'photos___localFile___prettySize',
  PhotosLocalFileModifiedTime = 'photos___localFile___modifiedTime',
  PhotosLocalFileAccessTime = 'photos___localFile___accessTime',
  PhotosLocalFileChangeTime = 'photos___localFile___changeTime',
  PhotosLocalFileBirthTime = 'photos___localFile___birthTime',
  PhotosLocalFileRoot = 'photos___localFile___root',
  PhotosLocalFileDir = 'photos___localFile___dir',
  PhotosLocalFileBase = 'photos___localFile___base',
  PhotosLocalFileExt = 'photos___localFile___ext',
  PhotosLocalFileName = 'photos___localFile___name',
  PhotosLocalFileRelativeDirectory = 'photos___localFile___relativeDirectory',
  PhotosLocalFileDev = 'photos___localFile___dev',
  PhotosLocalFileMode = 'photos___localFile___mode',
  PhotosLocalFileNlink = 'photos___localFile___nlink',
  PhotosLocalFileUid = 'photos___localFile___uid',
  PhotosLocalFileGid = 'photos___localFile___gid',
  PhotosLocalFileRdev = 'photos___localFile___rdev',
  PhotosLocalFileIno = 'photos___localFile___ino',
  PhotosLocalFileAtimeMs = 'photos___localFile___atimeMs',
  PhotosLocalFileMtimeMs = 'photos___localFile___mtimeMs',
  PhotosLocalFileCtimeMs = 'photos___localFile___ctimeMs',
  PhotosLocalFileAtime = 'photos___localFile___atime',
  PhotosLocalFileMtime = 'photos___localFile___mtime',
  PhotosLocalFileCtime = 'photos___localFile___ctime',
  PhotosLocalFileBirthtime = 'photos___localFile___birthtime',
  PhotosLocalFileBirthtimeMs = 'photos___localFile___birthtimeMs',
  PhotosLocalFileBlksize = 'photos___localFile___blksize',
  PhotosLocalFileBlocks = 'photos___localFile___blocks',
  PhotosLocalFileUrl = 'photos___localFile___url',
  PhotosLocalFilePublicUrl = 'photos___localFile___publicURL',
  PhotosLocalFileChildImageSharpGatsbyImageData = 'photos___localFile___childImageSharp___gatsbyImageData',
  PhotosLocalFileChildImageSharpId = 'photos___localFile___childImageSharp___id',
  PhotosLocalFileChildImageSharpChildren = 'photos___localFile___childImageSharp___children',
  PhotosLocalFileId = 'photos___localFile___id',
  PhotosLocalFileParentId = 'photos___localFile___parent___id',
  PhotosLocalFileParentChildren = 'photos___localFile___parent___children',
  PhotosLocalFileChildren = 'photos___localFile___children',
  PhotosLocalFileChildrenId = 'photos___localFile___children___id',
  PhotosLocalFileChildrenChildren = 'photos___localFile___children___children',
  PhotosLocalFileInternalContent = 'photos___localFile___internal___content',
  PhotosLocalFileInternalContentDigest = 'photos___localFile___internal___contentDigest',
  PhotosLocalFileInternalDescription = 'photos___localFile___internal___description',
  PhotosLocalFileInternalFieldOwners = 'photos___localFile___internal___fieldOwners',
  PhotosLocalFileInternalIgnoreType = 'photos___localFile___internal___ignoreType',
  PhotosLocalFileInternalMediaType = 'photos___localFile___internal___mediaType',
  PhotosLocalFileInternalOwner = 'photos___localFile___internal___owner',
  PhotosLocalFileInternalType = 'photos___localFile___internal___type',
  PhotosFixedBase64 = 'photos___fixed___base64',
  PhotosFixedTracedSvg = 'photos___fixed___tracedSVG',
  PhotosFixedAspectRatio = 'photos___fixed___aspectRatio',
  PhotosFixedWidth = 'photos___fixed___width',
  PhotosFixedHeight = 'photos___fixed___height',
  PhotosFixedSrc = 'photos___fixed___src',
  PhotosFixedSrcSet = 'photos___fixed___srcSet',
  PhotosFixedSrcWebp = 'photos___fixed___srcWebp',
  PhotosFixedSrcSetWebp = 'photos___fixed___srcSetWebp',
  PhotosResolutionsBase64 = 'photos___resolutions___base64',
  PhotosResolutionsTracedSvg = 'photos___resolutions___tracedSVG',
  PhotosResolutionsAspectRatio = 'photos___resolutions___aspectRatio',
  PhotosResolutionsWidth = 'photos___resolutions___width',
  PhotosResolutionsHeight = 'photos___resolutions___height',
  PhotosResolutionsSrc = 'photos___resolutions___src',
  PhotosResolutionsSrcSet = 'photos___resolutions___srcSet',
  PhotosResolutionsSrcWebp = 'photos___resolutions___srcWebp',
  PhotosResolutionsSrcSetWebp = 'photos___resolutions___srcSetWebp',
  PhotosFluidBase64 = 'photos___fluid___base64',
  PhotosFluidTracedSvg = 'photos___fluid___tracedSVG',
  PhotosFluidAspectRatio = 'photos___fluid___aspectRatio',
  PhotosFluidSrc = 'photos___fluid___src',
  PhotosFluidSrcSet = 'photos___fluid___srcSet',
  PhotosFluidSrcWebp = 'photos___fluid___srcWebp',
  PhotosFluidSrcSetWebp = 'photos___fluid___srcSetWebp',
  PhotosFluidSizes = 'photos___fluid___sizes',
  PhotosSizesBase64 = 'photos___sizes___base64',
  PhotosSizesTracedSvg = 'photos___sizes___tracedSVG',
  PhotosSizesAspectRatio = 'photos___sizes___aspectRatio',
  PhotosSizesSrc = 'photos___sizes___src',
  PhotosSizesSrcSet = 'photos___sizes___srcSet',
  PhotosSizesSrcWebp = 'photos___sizes___srcWebp',
  PhotosSizesSrcSetWebp = 'photos___sizes___srcSetWebp',
  PhotosSizesSizes = 'photos___sizes___sizes',
  PhotosResizeBase64 = 'photos___resize___base64',
  PhotosResizeTracedSvg = 'photos___resize___tracedSVG',
  PhotosResizeSrc = 'photos___resize___src',
  PhotosResizeWidth = 'photos___resize___width',
  PhotosResizeHeight = 'photos___resize___height',
  PhotosResizeAspectRatio = 'photos___resize___aspectRatio',
  PhotosParentId = 'photos___parent___id',
  PhotosParentParentId = 'photos___parent___parent___id',
  PhotosParentParentChildren = 'photos___parent___parent___children',
  PhotosParentChildren = 'photos___parent___children',
  PhotosParentChildrenId = 'photos___parent___children___id',
  PhotosParentChildrenChildren = 'photos___parent___children___children',
  PhotosParentInternalContent = 'photos___parent___internal___content',
  PhotosParentInternalContentDigest = 'photos___parent___internal___contentDigest',
  PhotosParentInternalDescription = 'photos___parent___internal___description',
  PhotosParentInternalFieldOwners = 'photos___parent___internal___fieldOwners',
  PhotosParentInternalIgnoreType = 'photos___parent___internal___ignoreType',
  PhotosParentInternalMediaType = 'photos___parent___internal___mediaType',
  PhotosParentInternalOwner = 'photos___parent___internal___owner',
  PhotosParentInternalType = 'photos___parent___internal___type',
  PhotosChildren = 'photos___children',
  PhotosChildrenId = 'photos___children___id',
  PhotosChildrenParentId = 'photos___children___parent___id',
  PhotosChildrenParentChildren = 'photos___children___parent___children',
  PhotosChildrenChildren = 'photos___children___children',
  PhotosChildrenChildrenId = 'photos___children___children___id',
  PhotosChildrenChildrenChildren = 'photos___children___children___children',
  PhotosChildrenInternalContent = 'photos___children___internal___content',
  PhotosChildrenInternalContentDigest = 'photos___children___internal___contentDigest',
  PhotosChildrenInternalDescription = 'photos___children___internal___description',
  PhotosChildrenInternalFieldOwners = 'photos___children___internal___fieldOwners',
  PhotosChildrenInternalIgnoreType = 'photos___children___internal___ignoreType',
  PhotosChildrenInternalMediaType = 'photos___children___internal___mediaType',
  PhotosChildrenInternalOwner = 'photos___children___internal___owner',
  PhotosChildrenInternalType = 'photos___children___internal___type',
  PhotosInternalContent = 'photos___internal___content',
  PhotosInternalContentDigest = 'photos___internal___contentDigest',
  PhotosInternalDescription = 'photos___internal___description',
  PhotosInternalFieldOwners = 'photos___internal___fieldOwners',
  PhotosInternalIgnoreType = 'photos___internal___ignoreType',
  PhotosInternalMediaType = 'photos___internal___mediaType',
  PhotosInternalOwner = 'photos___internal___owner',
  PhotosInternalType = 'photos___internal___type',
  DescriptionId = 'description___id',
  DescriptionParentId = 'description___parent___id',
  DescriptionParentParentId = 'description___parent___parent___id',
  DescriptionParentParentChildren = 'description___parent___parent___children',
  DescriptionParentChildren = 'description___parent___children',
  DescriptionParentChildrenId = 'description___parent___children___id',
  DescriptionParentChildrenChildren = 'description___parent___children___children',
  DescriptionParentInternalContent = 'description___parent___internal___content',
  DescriptionParentInternalContentDigest = 'description___parent___internal___contentDigest',
  DescriptionParentInternalDescription = 'description___parent___internal___description',
  DescriptionParentInternalFieldOwners = 'description___parent___internal___fieldOwners',
  DescriptionParentInternalIgnoreType = 'description___parent___internal___ignoreType',
  DescriptionParentInternalMediaType = 'description___parent___internal___mediaType',
  DescriptionParentInternalOwner = 'description___parent___internal___owner',
  DescriptionParentInternalType = 'description___parent___internal___type',
  DescriptionChildren = 'description___children',
  DescriptionChildrenId = 'description___children___id',
  DescriptionChildrenParentId = 'description___children___parent___id',
  DescriptionChildrenParentChildren = 'description___children___parent___children',
  DescriptionChildrenChildren = 'description___children___children',
  DescriptionChildrenChildrenId = 'description___children___children___id',
  DescriptionChildrenChildrenChildren = 'description___children___children___children',
  DescriptionChildrenInternalContent = 'description___children___internal___content',
  DescriptionChildrenInternalContentDigest = 'description___children___internal___contentDigest',
  DescriptionChildrenInternalDescription = 'description___children___internal___description',
  DescriptionChildrenInternalFieldOwners = 'description___children___internal___fieldOwners',
  DescriptionChildrenInternalIgnoreType = 'description___children___internal___ignoreType',
  DescriptionChildrenInternalMediaType = 'description___children___internal___mediaType',
  DescriptionChildrenInternalOwner = 'description___children___internal___owner',
  DescriptionChildrenInternalType = 'description___children___internal___type',
  DescriptionInternalContent = 'description___internal___content',
  DescriptionInternalContentDigest = 'description___internal___contentDigest',
  DescriptionInternalDescription = 'description___internal___description',
  DescriptionInternalFieldOwners = 'description___internal___fieldOwners',
  DescriptionInternalIgnoreType = 'description___internal___ignoreType',
  DescriptionInternalMediaType = 'description___internal___mediaType',
  DescriptionInternalOwner = 'description___internal___owner',
  DescriptionInternalType = 'description___internal___type',
  DescriptionDescription = 'description___description',
  DescriptionSysType = 'description___sys___type',
  SpaceId = 'spaceId',
  CreatedAt = 'createdAt',
  UpdatedAt = 'updatedAt',
  SysType = 'sys___type',
  SysRevision = 'sys___revision',
  SysContentTypeSysType = 'sys___contentType___sys___type',
  SysContentTypeSysLinkType = 'sys___contentType___sys___linkType',
  SysContentTypeSysId = 'sys___contentType___sys___id',
  HomepageFeatured = 'homepage___featured',
  HomepageFeaturedContentfulId = 'homepage___featured___contentful_id',
  HomepageFeaturedId = 'homepage___featured___id',
  HomepageFeaturedNodeLocale = 'homepage___featured___node_locale',
  HomepageFeaturedThemes = 'homepage___featured___themes',
  HomepageFeaturedThemesContentfulId = 'homepage___featured___themes___contentful_id',
  HomepageFeaturedThemesId = 'homepage___featured___themes___id',
  HomepageFeaturedThemesNodeLocale = 'homepage___featured___themes___node_locale',
  HomepageFeaturedThemesTitle = 'homepage___featured___themes___title',
  HomepageFeaturedThemesSlug = 'homepage___featured___themes___slug',
  HomepageFeaturedThemesCoverImageContentfulId = 'homepage___featured___themes___coverImage___contentful_id',
  HomepageFeaturedThemesCoverImageId = 'homepage___featured___themes___coverImage___id',
  HomepageFeaturedThemesCoverImageSpaceId = 'homepage___featured___themes___coverImage___spaceId',
  HomepageFeaturedThemesCoverImageCreatedAt = 'homepage___featured___themes___coverImage___createdAt',
  HomepageFeaturedThemesCoverImageUpdatedAt = 'homepage___featured___themes___coverImage___updatedAt',
  HomepageFeaturedThemesCoverImageTitle = 'homepage___featured___themes___coverImage___title',
  HomepageFeaturedThemesCoverImageDescription = 'homepage___featured___themes___coverImage___description',
  HomepageFeaturedThemesCoverImageNodeLocale = 'homepage___featured___themes___coverImage___node_locale',
  HomepageFeaturedThemesCoverImageChildren = 'homepage___featured___themes___coverImage___children',
  HomepageFeaturedThemesFeaturedPhotos = 'homepage___featured___themes___featuredPhotos',
  HomepageFeaturedThemesFeaturedPhotosContentfulId = 'homepage___featured___themes___featuredPhotos___contentful_id',
  HomepageFeaturedThemesFeaturedPhotosId = 'homepage___featured___themes___featuredPhotos___id',
  HomepageFeaturedThemesFeaturedPhotosSpaceId = 'homepage___featured___themes___featuredPhotos___spaceId',
  HomepageFeaturedThemesFeaturedPhotosCreatedAt = 'homepage___featured___themes___featuredPhotos___createdAt',
  HomepageFeaturedThemesFeaturedPhotosUpdatedAt = 'homepage___featured___themes___featuredPhotos___updatedAt',
  HomepageFeaturedThemesFeaturedPhotosTitle = 'homepage___featured___themes___featuredPhotos___title',
  HomepageFeaturedThemesFeaturedPhotosDescription = 'homepage___featured___themes___featuredPhotos___description',
  HomepageFeaturedThemesFeaturedPhotosNodeLocale = 'homepage___featured___themes___featuredPhotos___node_locale',
  HomepageFeaturedThemesFeaturedPhotosChildren = 'homepage___featured___themes___featuredPhotos___children',
  HomepageFeaturedThemesProject = 'homepage___featured___themes___project',
  HomepageFeaturedThemesProjectContentfulId = 'homepage___featured___themes___project___contentful_id',
  HomepageFeaturedThemesProjectId = 'homepage___featured___themes___project___id',
  HomepageFeaturedThemesProjectNodeLocale = 'homepage___featured___themes___project___node_locale',
  HomepageFeaturedThemesProjectTitle = 'homepage___featured___themes___project___title',
  HomepageFeaturedThemesProjectSlug = 'homepage___featured___themes___project___slug',
  HomepageFeaturedThemesProjectPhotos = 'homepage___featured___themes___project___photos',
  HomepageFeaturedThemesProjectSpaceId = 'homepage___featured___themes___project___spaceId',
  HomepageFeaturedThemesProjectCreatedAt = 'homepage___featured___themes___project___createdAt',
  HomepageFeaturedThemesProjectUpdatedAt = 'homepage___featured___themes___project___updatedAt',
  HomepageFeaturedThemesProjectHomepageFeatured = 'homepage___featured___themes___project___homepage___featured',
  HomepageFeaturedThemesProjectHomepageLatestWork = 'homepage___featured___themes___project___homepage___latest_work',
  HomepageFeaturedThemesProjectChildren = 'homepage___featured___themes___project___children',
  HomepageFeaturedThemesHomepageFeatured = 'homepage___featured___themes___homepage___featured',
  HomepageFeaturedThemesHomepageFeaturedContentfulId = 'homepage___featured___themes___homepage___featured___contentful_id',
  HomepageFeaturedThemesHomepageFeaturedId = 'homepage___featured___themes___homepage___featured___id',
  HomepageFeaturedThemesHomepageFeaturedNodeLocale = 'homepage___featured___themes___homepage___featured___node_locale',
  HomepageFeaturedThemesHomepageFeaturedThemes = 'homepage___featured___themes___homepage___featured___themes',
  HomepageFeaturedThemesHomepageFeaturedProjects = 'homepage___featured___themes___homepage___featured___projects',
  HomepageFeaturedThemesHomepageFeaturedSpaceId = 'homepage___featured___themes___homepage___featured___spaceId',
  HomepageFeaturedThemesHomepageFeaturedCreatedAt = 'homepage___featured___themes___homepage___featured___createdAt',
  HomepageFeaturedThemesHomepageFeaturedUpdatedAt = 'homepage___featured___themes___homepage___featured___updatedAt',
  HomepageFeaturedThemesHomepageFeaturedChildren = 'homepage___featured___themes___homepage___featured___children',
  HomepageFeaturedThemesSpaceId = 'homepage___featured___themes___spaceId',
  HomepageFeaturedThemesCreatedAt = 'homepage___featured___themes___createdAt',
  HomepageFeaturedThemesUpdatedAt = 'homepage___featured___themes___updatedAt',
  HomepageFeaturedThemesSysType = 'homepage___featured___themes___sys___type',
  HomepageFeaturedThemesSysRevision = 'homepage___featured___themes___sys___revision',
  HomepageFeaturedThemesParentId = 'homepage___featured___themes___parent___id',
  HomepageFeaturedThemesParentChildren = 'homepage___featured___themes___parent___children',
  HomepageFeaturedThemesChildren = 'homepage___featured___themes___children',
  HomepageFeaturedThemesChildrenId = 'homepage___featured___themes___children___id',
  HomepageFeaturedThemesChildrenChildren = 'homepage___featured___themes___children___children',
  HomepageFeaturedThemesInternalContent = 'homepage___featured___themes___internal___content',
  HomepageFeaturedThemesInternalContentDigest = 'homepage___featured___themes___internal___contentDigest',
  HomepageFeaturedThemesInternalDescription = 'homepage___featured___themes___internal___description',
  HomepageFeaturedThemesInternalFieldOwners = 'homepage___featured___themes___internal___fieldOwners',
  HomepageFeaturedThemesInternalIgnoreType = 'homepage___featured___themes___internal___ignoreType',
  HomepageFeaturedThemesInternalMediaType = 'homepage___featured___themes___internal___mediaType',
  HomepageFeaturedThemesInternalOwner = 'homepage___featured___themes___internal___owner',
  HomepageFeaturedThemesInternalType = 'homepage___featured___themes___internal___type',
  HomepageFeaturedProjects = 'homepage___featured___projects',
  HomepageFeaturedProjectsContentfulId = 'homepage___featured___projects___contentful_id',
  HomepageFeaturedProjectsId = 'homepage___featured___projects___id',
  HomepageFeaturedProjectsNodeLocale = 'homepage___featured___projects___node_locale',
  HomepageFeaturedProjectsTitle = 'homepage___featured___projects___title',
  HomepageFeaturedProjectsSlug = 'homepage___featured___projects___slug',
  HomepageFeaturedProjectsThemeContentfulId = 'homepage___featured___projects___theme___contentful_id',
  HomepageFeaturedProjectsThemeId = 'homepage___featured___projects___theme___id',
  HomepageFeaturedProjectsThemeNodeLocale = 'homepage___featured___projects___theme___node_locale',
  HomepageFeaturedProjectsThemeTitle = 'homepage___featured___projects___theme___title',
  HomepageFeaturedProjectsThemeSlug = 'homepage___featured___projects___theme___slug',
  HomepageFeaturedProjectsThemeFeaturedPhotos = 'homepage___featured___projects___theme___featuredPhotos',
  HomepageFeaturedProjectsThemeProject = 'homepage___featured___projects___theme___project',
  HomepageFeaturedProjectsThemeHomepageFeatured = 'homepage___featured___projects___theme___homepage___featured',
  HomepageFeaturedProjectsThemeSpaceId = 'homepage___featured___projects___theme___spaceId',
  HomepageFeaturedProjectsThemeCreatedAt = 'homepage___featured___projects___theme___createdAt',
  HomepageFeaturedProjectsThemeUpdatedAt = 'homepage___featured___projects___theme___updatedAt',
  HomepageFeaturedProjectsThemeChildren = 'homepage___featured___projects___theme___children',
  HomepageFeaturedProjectsCoverImageContentfulId = 'homepage___featured___projects___coverImage___contentful_id',
  HomepageFeaturedProjectsCoverImageId = 'homepage___featured___projects___coverImage___id',
  HomepageFeaturedProjectsCoverImageSpaceId = 'homepage___featured___projects___coverImage___spaceId',
  HomepageFeaturedProjectsCoverImageCreatedAt = 'homepage___featured___projects___coverImage___createdAt',
  HomepageFeaturedProjectsCoverImageUpdatedAt = 'homepage___featured___projects___coverImage___updatedAt',
  HomepageFeaturedProjectsCoverImageTitle = 'homepage___featured___projects___coverImage___title',
  HomepageFeaturedProjectsCoverImageDescription = 'homepage___featured___projects___coverImage___description',
  HomepageFeaturedProjectsCoverImageNodeLocale = 'homepage___featured___projects___coverImage___node_locale',
  HomepageFeaturedProjectsCoverImageChildren = 'homepage___featured___projects___coverImage___children',
  HomepageFeaturedProjectsPhotos = 'homepage___featured___projects___photos',
  HomepageFeaturedProjectsPhotosContentfulId = 'homepage___featured___projects___photos___contentful_id',
  HomepageFeaturedProjectsPhotosId = 'homepage___featured___projects___photos___id',
  HomepageFeaturedProjectsPhotosSpaceId = 'homepage___featured___projects___photos___spaceId',
  HomepageFeaturedProjectsPhotosCreatedAt = 'homepage___featured___projects___photos___createdAt',
  HomepageFeaturedProjectsPhotosUpdatedAt = 'homepage___featured___projects___photos___updatedAt',
  HomepageFeaturedProjectsPhotosTitle = 'homepage___featured___projects___photos___title',
  HomepageFeaturedProjectsPhotosDescription = 'homepage___featured___projects___photos___description',
  HomepageFeaturedProjectsPhotosNodeLocale = 'homepage___featured___projects___photos___node_locale',
  HomepageFeaturedProjectsPhotosChildren = 'homepage___featured___projects___photos___children',
  HomepageFeaturedProjectsDescriptionId = 'homepage___featured___projects___description___id',
  HomepageFeaturedProjectsDescriptionChildren = 'homepage___featured___projects___description___children',
  HomepageFeaturedProjectsDescriptionDescription = 'homepage___featured___projects___description___description',
  HomepageFeaturedProjectsSpaceId = 'homepage___featured___projects___spaceId',
  HomepageFeaturedProjectsCreatedAt = 'homepage___featured___projects___createdAt',
  HomepageFeaturedProjectsUpdatedAt = 'homepage___featured___projects___updatedAt',
  HomepageFeaturedProjectsSysType = 'homepage___featured___projects___sys___type',
  HomepageFeaturedProjectsSysRevision = 'homepage___featured___projects___sys___revision',
  HomepageFeaturedProjectsHomepageFeatured = 'homepage___featured___projects___homepage___featured',
  HomepageFeaturedProjectsHomepageFeaturedContentfulId = 'homepage___featured___projects___homepage___featured___contentful_id',
  HomepageFeaturedProjectsHomepageFeaturedId = 'homepage___featured___projects___homepage___featured___id',
  HomepageFeaturedProjectsHomepageFeaturedNodeLocale = 'homepage___featured___projects___homepage___featured___node_locale',
  HomepageFeaturedProjectsHomepageFeaturedThemes = 'homepage___featured___projects___homepage___featured___themes',
  HomepageFeaturedProjectsHomepageFeaturedProjects = 'homepage___featured___projects___homepage___featured___projects',
  HomepageFeaturedProjectsHomepageFeaturedSpaceId = 'homepage___featured___projects___homepage___featured___spaceId',
  HomepageFeaturedProjectsHomepageFeaturedCreatedAt = 'homepage___featured___projects___homepage___featured___createdAt',
  HomepageFeaturedProjectsHomepageFeaturedUpdatedAt = 'homepage___featured___projects___homepage___featured___updatedAt',
  HomepageFeaturedProjectsHomepageFeaturedChildren = 'homepage___featured___projects___homepage___featured___children',
  HomepageFeaturedProjectsHomepageLatestWork = 'homepage___featured___projects___homepage___latest_work',
  HomepageFeaturedProjectsHomepageLatestWorkContentfulId = 'homepage___featured___projects___homepage___latest_work___contentful_id',
  HomepageFeaturedProjectsHomepageLatestWorkId = 'homepage___featured___projects___homepage___latest_work___id',
  HomepageFeaturedProjectsHomepageLatestWorkNodeLocale = 'homepage___featured___projects___homepage___latest_work___node_locale',
  HomepageFeaturedProjectsHomepageLatestWorkFeaturedPhotos = 'homepage___featured___projects___homepage___latest_work___featuredPhotos',
  HomepageFeaturedProjectsHomepageLatestWorkSpaceId = 'homepage___featured___projects___homepage___latest_work___spaceId',
  HomepageFeaturedProjectsHomepageLatestWorkCreatedAt = 'homepage___featured___projects___homepage___latest_work___createdAt',
  HomepageFeaturedProjectsHomepageLatestWorkUpdatedAt = 'homepage___featured___projects___homepage___latest_work___updatedAt',
  HomepageFeaturedProjectsHomepageLatestWorkChildren = 'homepage___featured___projects___homepage___latest_work___children',
  HomepageFeaturedProjectsParentId = 'homepage___featured___projects___parent___id',
  HomepageFeaturedProjectsParentChildren = 'homepage___featured___projects___parent___children',
  HomepageFeaturedProjectsChildren = 'homepage___featured___projects___children',
  HomepageFeaturedProjectsChildrenId = 'homepage___featured___projects___children___id',
  HomepageFeaturedProjectsChildrenChildren = 'homepage___featured___projects___children___children',
  HomepageFeaturedProjectsInternalContent = 'homepage___featured___projects___internal___content',
  HomepageFeaturedProjectsInternalContentDigest = 'homepage___featured___projects___internal___contentDigest',
  HomepageFeaturedProjectsInternalDescription = 'homepage___featured___projects___internal___description',
  HomepageFeaturedProjectsInternalFieldOwners = 'homepage___featured___projects___internal___fieldOwners',
  HomepageFeaturedProjectsInternalIgnoreType = 'homepage___featured___projects___internal___ignoreType',
  HomepageFeaturedProjectsInternalMediaType = 'homepage___featured___projects___internal___mediaType',
  HomepageFeaturedProjectsInternalOwner = 'homepage___featured___projects___internal___owner',
  HomepageFeaturedProjectsInternalType = 'homepage___featured___projects___internal___type',
  HomepageFeaturedProjectsChildContentfulProjectDescriptionTextNodeId = 'homepage___featured___projects___childContentfulProjectDescriptionTextNode___id',
  HomepageFeaturedProjectsChildContentfulProjectDescriptionTextNodeChildren = 'homepage___featured___projects___childContentfulProjectDescriptionTextNode___children',
  HomepageFeaturedProjectsChildContentfulProjectDescriptionTextNodeDescription = 'homepage___featured___projects___childContentfulProjectDescriptionTextNode___description',
  HomepageFeaturedSpaceId = 'homepage___featured___spaceId',
  HomepageFeaturedCreatedAt = 'homepage___featured___createdAt',
  HomepageFeaturedUpdatedAt = 'homepage___featured___updatedAt',
  HomepageFeaturedSysType = 'homepage___featured___sys___type',
  HomepageFeaturedSysRevision = 'homepage___featured___sys___revision',
  HomepageFeaturedParentId = 'homepage___featured___parent___id',
  HomepageFeaturedParentParentId = 'homepage___featured___parent___parent___id',
  HomepageFeaturedParentParentChildren = 'homepage___featured___parent___parent___children',
  HomepageFeaturedParentChildren = 'homepage___featured___parent___children',
  HomepageFeaturedParentChildrenId = 'homepage___featured___parent___children___id',
  HomepageFeaturedParentChildrenChildren = 'homepage___featured___parent___children___children',
  HomepageFeaturedParentInternalContent = 'homepage___featured___parent___internal___content',
  HomepageFeaturedParentInternalContentDigest = 'homepage___featured___parent___internal___contentDigest',
  HomepageFeaturedParentInternalDescription = 'homepage___featured___parent___internal___description',
  HomepageFeaturedParentInternalFieldOwners = 'homepage___featured___parent___internal___fieldOwners',
  HomepageFeaturedParentInternalIgnoreType = 'homepage___featured___parent___internal___ignoreType',
  HomepageFeaturedParentInternalMediaType = 'homepage___featured___parent___internal___mediaType',
  HomepageFeaturedParentInternalOwner = 'homepage___featured___parent___internal___owner',
  HomepageFeaturedParentInternalType = 'homepage___featured___parent___internal___type',
  HomepageFeaturedChildren = 'homepage___featured___children',
  HomepageFeaturedChildrenId = 'homepage___featured___children___id',
  HomepageFeaturedChildrenParentId = 'homepage___featured___children___parent___id',
  HomepageFeaturedChildrenParentChildren = 'homepage___featured___children___parent___children',
  HomepageFeaturedChildrenChildren = 'homepage___featured___children___children',
  HomepageFeaturedChildrenChildrenId = 'homepage___featured___children___children___id',
  HomepageFeaturedChildrenChildrenChildren = 'homepage___featured___children___children___children',
  HomepageFeaturedChildrenInternalContent = 'homepage___featured___children___internal___content',
  HomepageFeaturedChildrenInternalContentDigest = 'homepage___featured___children___internal___contentDigest',
  HomepageFeaturedChildrenInternalDescription = 'homepage___featured___children___internal___description',
  HomepageFeaturedChildrenInternalFieldOwners = 'homepage___featured___children___internal___fieldOwners',
  HomepageFeaturedChildrenInternalIgnoreType = 'homepage___featured___children___internal___ignoreType',
  HomepageFeaturedChildrenInternalMediaType = 'homepage___featured___children___internal___mediaType',
  HomepageFeaturedChildrenInternalOwner = 'homepage___featured___children___internal___owner',
  HomepageFeaturedChildrenInternalType = 'homepage___featured___children___internal___type',
  HomepageFeaturedInternalContent = 'homepage___featured___internal___content',
  HomepageFeaturedInternalContentDigest = 'homepage___featured___internal___contentDigest',
  HomepageFeaturedInternalDescription = 'homepage___featured___internal___description',
  HomepageFeaturedInternalFieldOwners = 'homepage___featured___internal___fieldOwners',
  HomepageFeaturedInternalIgnoreType = 'homepage___featured___internal___ignoreType',
  HomepageFeaturedInternalMediaType = 'homepage___featured___internal___mediaType',
  HomepageFeaturedInternalOwner = 'homepage___featured___internal___owner',
  HomepageFeaturedInternalType = 'homepage___featured___internal___type',
  HomepageLatestWork = 'homepage___latest_work',
  HomepageLatestWorkContentfulId = 'homepage___latest_work___contentful_id',
  HomepageLatestWorkId = 'homepage___latest_work___id',
  HomepageLatestWorkNodeLocale = 'homepage___latest_work___node_locale',
  HomepageLatestWorkProjectContentfulId = 'homepage___latest_work___project___contentful_id',
  HomepageLatestWorkProjectId = 'homepage___latest_work___project___id',
  HomepageLatestWorkProjectNodeLocale = 'homepage___latest_work___project___node_locale',
  HomepageLatestWorkProjectTitle = 'homepage___latest_work___project___title',
  HomepageLatestWorkProjectSlug = 'homepage___latest_work___project___slug',
  HomepageLatestWorkProjectThemeContentfulId = 'homepage___latest_work___project___theme___contentful_id',
  HomepageLatestWorkProjectThemeId = 'homepage___latest_work___project___theme___id',
  HomepageLatestWorkProjectThemeNodeLocale = 'homepage___latest_work___project___theme___node_locale',
  HomepageLatestWorkProjectThemeTitle = 'homepage___latest_work___project___theme___title',
  HomepageLatestWorkProjectThemeSlug = 'homepage___latest_work___project___theme___slug',
  HomepageLatestWorkProjectThemeFeaturedPhotos = 'homepage___latest_work___project___theme___featuredPhotos',
  HomepageLatestWorkProjectThemeProject = 'homepage___latest_work___project___theme___project',
  HomepageLatestWorkProjectThemeHomepageFeatured = 'homepage___latest_work___project___theme___homepage___featured',
  HomepageLatestWorkProjectThemeSpaceId = 'homepage___latest_work___project___theme___spaceId',
  HomepageLatestWorkProjectThemeCreatedAt = 'homepage___latest_work___project___theme___createdAt',
  HomepageLatestWorkProjectThemeUpdatedAt = 'homepage___latest_work___project___theme___updatedAt',
  HomepageLatestWorkProjectThemeChildren = 'homepage___latest_work___project___theme___children',
  HomepageLatestWorkProjectCoverImageContentfulId = 'homepage___latest_work___project___coverImage___contentful_id',
  HomepageLatestWorkProjectCoverImageId = 'homepage___latest_work___project___coverImage___id',
  HomepageLatestWorkProjectCoverImageSpaceId = 'homepage___latest_work___project___coverImage___spaceId',
  HomepageLatestWorkProjectCoverImageCreatedAt = 'homepage___latest_work___project___coverImage___createdAt',
  HomepageLatestWorkProjectCoverImageUpdatedAt = 'homepage___latest_work___project___coverImage___updatedAt',
  HomepageLatestWorkProjectCoverImageTitle = 'homepage___latest_work___project___coverImage___title',
  HomepageLatestWorkProjectCoverImageDescription = 'homepage___latest_work___project___coverImage___description',
  HomepageLatestWorkProjectCoverImageNodeLocale = 'homepage___latest_work___project___coverImage___node_locale',
  HomepageLatestWorkProjectCoverImageChildren = 'homepage___latest_work___project___coverImage___children',
  HomepageLatestWorkProjectPhotos = 'homepage___latest_work___project___photos',
  HomepageLatestWorkProjectPhotosContentfulId = 'homepage___latest_work___project___photos___contentful_id',
  HomepageLatestWorkProjectPhotosId = 'homepage___latest_work___project___photos___id',
  HomepageLatestWorkProjectPhotosSpaceId = 'homepage___latest_work___project___photos___spaceId',
  HomepageLatestWorkProjectPhotosCreatedAt = 'homepage___latest_work___project___photos___createdAt',
  HomepageLatestWorkProjectPhotosUpdatedAt = 'homepage___latest_work___project___photos___updatedAt',
  HomepageLatestWorkProjectPhotosTitle = 'homepage___latest_work___project___photos___title',
  HomepageLatestWorkProjectPhotosDescription = 'homepage___latest_work___project___photos___description',
  HomepageLatestWorkProjectPhotosNodeLocale = 'homepage___latest_work___project___photos___node_locale',
  HomepageLatestWorkProjectPhotosChildren = 'homepage___latest_work___project___photos___children',
  HomepageLatestWorkProjectDescriptionId = 'homepage___latest_work___project___description___id',
  HomepageLatestWorkProjectDescriptionChildren = 'homepage___latest_work___project___description___children',
  HomepageLatestWorkProjectDescriptionDescription = 'homepage___latest_work___project___description___description',
  HomepageLatestWorkProjectSpaceId = 'homepage___latest_work___project___spaceId',
  HomepageLatestWorkProjectCreatedAt = 'homepage___latest_work___project___createdAt',
  HomepageLatestWorkProjectUpdatedAt = 'homepage___latest_work___project___updatedAt',
  HomepageLatestWorkProjectSysType = 'homepage___latest_work___project___sys___type',
  HomepageLatestWorkProjectSysRevision = 'homepage___latest_work___project___sys___revision',
  HomepageLatestWorkProjectHomepageFeatured = 'homepage___latest_work___project___homepage___featured',
  HomepageLatestWorkProjectHomepageFeaturedContentfulId = 'homepage___latest_work___project___homepage___featured___contentful_id',
  HomepageLatestWorkProjectHomepageFeaturedId = 'homepage___latest_work___project___homepage___featured___id',
  HomepageLatestWorkProjectHomepageFeaturedNodeLocale = 'homepage___latest_work___project___homepage___featured___node_locale',
  HomepageLatestWorkProjectHomepageFeaturedThemes = 'homepage___latest_work___project___homepage___featured___themes',
  HomepageLatestWorkProjectHomepageFeaturedProjects = 'homepage___latest_work___project___homepage___featured___projects',
  HomepageLatestWorkProjectHomepageFeaturedSpaceId = 'homepage___latest_work___project___homepage___featured___spaceId',
  HomepageLatestWorkProjectHomepageFeaturedCreatedAt = 'homepage___latest_work___project___homepage___featured___createdAt',
  HomepageLatestWorkProjectHomepageFeaturedUpdatedAt = 'homepage___latest_work___project___homepage___featured___updatedAt',
  HomepageLatestWorkProjectHomepageFeaturedChildren = 'homepage___latest_work___project___homepage___featured___children',
  HomepageLatestWorkProjectHomepageLatestWork = 'homepage___latest_work___project___homepage___latest_work',
  HomepageLatestWorkProjectHomepageLatestWorkContentfulId = 'homepage___latest_work___project___homepage___latest_work___contentful_id',
  HomepageLatestWorkProjectHomepageLatestWorkId = 'homepage___latest_work___project___homepage___latest_work___id',
  HomepageLatestWorkProjectHomepageLatestWorkNodeLocale = 'homepage___latest_work___project___homepage___latest_work___node_locale',
  HomepageLatestWorkProjectHomepageLatestWorkFeaturedPhotos = 'homepage___latest_work___project___homepage___latest_work___featuredPhotos',
  HomepageLatestWorkProjectHomepageLatestWorkSpaceId = 'homepage___latest_work___project___homepage___latest_work___spaceId',
  HomepageLatestWorkProjectHomepageLatestWorkCreatedAt = 'homepage___latest_work___project___homepage___latest_work___createdAt',
  HomepageLatestWorkProjectHomepageLatestWorkUpdatedAt = 'homepage___latest_work___project___homepage___latest_work___updatedAt',
  HomepageLatestWorkProjectHomepageLatestWorkChildren = 'homepage___latest_work___project___homepage___latest_work___children',
  HomepageLatestWorkProjectParentId = 'homepage___latest_work___project___parent___id',
  HomepageLatestWorkProjectParentChildren = 'homepage___latest_work___project___parent___children',
  HomepageLatestWorkProjectChildren = 'homepage___latest_work___project___children',
  HomepageLatestWorkProjectChildrenId = 'homepage___latest_work___project___children___id',
  HomepageLatestWorkProjectChildrenChildren = 'homepage___latest_work___project___children___children',
  HomepageLatestWorkProjectInternalContent = 'homepage___latest_work___project___internal___content',
  HomepageLatestWorkProjectInternalContentDigest = 'homepage___latest_work___project___internal___contentDigest',
  HomepageLatestWorkProjectInternalDescription = 'homepage___latest_work___project___internal___description',
  HomepageLatestWorkProjectInternalFieldOwners = 'homepage___latest_work___project___internal___fieldOwners',
  HomepageLatestWorkProjectInternalIgnoreType = 'homepage___latest_work___project___internal___ignoreType',
  HomepageLatestWorkProjectInternalMediaType = 'homepage___latest_work___project___internal___mediaType',
  HomepageLatestWorkProjectInternalOwner = 'homepage___latest_work___project___internal___owner',
  HomepageLatestWorkProjectInternalType = 'homepage___latest_work___project___internal___type',
  HomepageLatestWorkProjectChildContentfulProjectDescriptionTextNodeId = 'homepage___latest_work___project___childContentfulProjectDescriptionTextNode___id',
  HomepageLatestWorkProjectChildContentfulProjectDescriptionTextNodeChildren = 'homepage___latest_work___project___childContentfulProjectDescriptionTextNode___children',
  HomepageLatestWorkProjectChildContentfulProjectDescriptionTextNodeDescription = 'homepage___latest_work___project___childContentfulProjectDescriptionTextNode___description',
  HomepageLatestWorkFeaturedPhotos = 'homepage___latest_work___featuredPhotos',
  HomepageLatestWorkFeaturedPhotosContentfulId = 'homepage___latest_work___featuredPhotos___contentful_id',
  HomepageLatestWorkFeaturedPhotosId = 'homepage___latest_work___featuredPhotos___id',
  HomepageLatestWorkFeaturedPhotosSpaceId = 'homepage___latest_work___featuredPhotos___spaceId',
  HomepageLatestWorkFeaturedPhotosCreatedAt = 'homepage___latest_work___featuredPhotos___createdAt',
  HomepageLatestWorkFeaturedPhotosUpdatedAt = 'homepage___latest_work___featuredPhotos___updatedAt',
  HomepageLatestWorkFeaturedPhotosFileUrl = 'homepage___latest_work___featuredPhotos___file___url',
  HomepageLatestWorkFeaturedPhotosFileFileName = 'homepage___latest_work___featuredPhotos___file___fileName',
  HomepageLatestWorkFeaturedPhotosFileContentType = 'homepage___latest_work___featuredPhotos___file___contentType',
  HomepageLatestWorkFeaturedPhotosTitle = 'homepage___latest_work___featuredPhotos___title',
  HomepageLatestWorkFeaturedPhotosDescription = 'homepage___latest_work___featuredPhotos___description',
  HomepageLatestWorkFeaturedPhotosNodeLocale = 'homepage___latest_work___featuredPhotos___node_locale',
  HomepageLatestWorkFeaturedPhotosSysType = 'homepage___latest_work___featuredPhotos___sys___type',
  HomepageLatestWorkFeaturedPhotosSysRevision = 'homepage___latest_work___featuredPhotos___sys___revision',
  HomepageLatestWorkFeaturedPhotosLocalFileSourceInstanceName = 'homepage___latest_work___featuredPhotos___localFile___sourceInstanceName',
  HomepageLatestWorkFeaturedPhotosLocalFileAbsolutePath = 'homepage___latest_work___featuredPhotos___localFile___absolutePath',
  HomepageLatestWorkFeaturedPhotosLocalFileRelativePath = 'homepage___latest_work___featuredPhotos___localFile___relativePath',
  HomepageLatestWorkFeaturedPhotosLocalFileExtension = 'homepage___latest_work___featuredPhotos___localFile___extension',
  HomepageLatestWorkFeaturedPhotosLocalFileSize = 'homepage___latest_work___featuredPhotos___localFile___size',
  HomepageLatestWorkFeaturedPhotosLocalFilePrettySize = 'homepage___latest_work___featuredPhotos___localFile___prettySize',
  HomepageLatestWorkFeaturedPhotosLocalFileModifiedTime = 'homepage___latest_work___featuredPhotos___localFile___modifiedTime',
  HomepageLatestWorkFeaturedPhotosLocalFileAccessTime = 'homepage___latest_work___featuredPhotos___localFile___accessTime',
  HomepageLatestWorkFeaturedPhotosLocalFileChangeTime = 'homepage___latest_work___featuredPhotos___localFile___changeTime',
  HomepageLatestWorkFeaturedPhotosLocalFileBirthTime = 'homepage___latest_work___featuredPhotos___localFile___birthTime',
  HomepageLatestWorkFeaturedPhotosLocalFileRoot = 'homepage___latest_work___featuredPhotos___localFile___root',
  HomepageLatestWorkFeaturedPhotosLocalFileDir = 'homepage___latest_work___featuredPhotos___localFile___dir',
  HomepageLatestWorkFeaturedPhotosLocalFileBase = 'homepage___latest_work___featuredPhotos___localFile___base',
  HomepageLatestWorkFeaturedPhotosLocalFileExt = 'homepage___latest_work___featuredPhotos___localFile___ext',
  HomepageLatestWorkFeaturedPhotosLocalFileName = 'homepage___latest_work___featuredPhotos___localFile___name',
  HomepageLatestWorkFeaturedPhotosLocalFileRelativeDirectory = 'homepage___latest_work___featuredPhotos___localFile___relativeDirectory',
  HomepageLatestWorkFeaturedPhotosLocalFileDev = 'homepage___latest_work___featuredPhotos___localFile___dev',
  HomepageLatestWorkFeaturedPhotosLocalFileMode = 'homepage___latest_work___featuredPhotos___localFile___mode',
  HomepageLatestWorkFeaturedPhotosLocalFileNlink = 'homepage___latest_work___featuredPhotos___localFile___nlink',
  HomepageLatestWorkFeaturedPhotosLocalFileUid = 'homepage___latest_work___featuredPhotos___localFile___uid',
  HomepageLatestWorkFeaturedPhotosLocalFileGid = 'homepage___latest_work___featuredPhotos___localFile___gid',
  HomepageLatestWorkFeaturedPhotosLocalFileRdev = 'homepage___latest_work___featuredPhotos___localFile___rdev',
  HomepageLatestWorkFeaturedPhotosLocalFileIno = 'homepage___latest_work___featuredPhotos___localFile___ino',
  HomepageLatestWorkFeaturedPhotosLocalFileAtimeMs = 'homepage___latest_work___featuredPhotos___localFile___atimeMs',
  HomepageLatestWorkFeaturedPhotosLocalFileMtimeMs = 'homepage___latest_work___featuredPhotos___localFile___mtimeMs',
  HomepageLatestWorkFeaturedPhotosLocalFileCtimeMs = 'homepage___latest_work___featuredPhotos___localFile___ctimeMs',
  HomepageLatestWorkFeaturedPhotosLocalFileAtime = 'homepage___latest_work___featuredPhotos___localFile___atime',
  HomepageLatestWorkFeaturedPhotosLocalFileMtime = 'homepage___latest_work___featuredPhotos___localFile___mtime',
  HomepageLatestWorkFeaturedPhotosLocalFileCtime = 'homepage___latest_work___featuredPhotos___localFile___ctime',
  HomepageLatestWorkFeaturedPhotosLocalFileBirthtime = 'homepage___latest_work___featuredPhotos___localFile___birthtime',
  HomepageLatestWorkFeaturedPhotosLocalFileBirthtimeMs = 'homepage___latest_work___featuredPhotos___localFile___birthtimeMs',
  HomepageLatestWorkFeaturedPhotosLocalFileBlksize = 'homepage___latest_work___featuredPhotos___localFile___blksize',
  HomepageLatestWorkFeaturedPhotosLocalFileBlocks = 'homepage___latest_work___featuredPhotos___localFile___blocks',
  HomepageLatestWorkFeaturedPhotosLocalFileUrl = 'homepage___latest_work___featuredPhotos___localFile___url',
  HomepageLatestWorkFeaturedPhotosLocalFilePublicUrl = 'homepage___latest_work___featuredPhotos___localFile___publicURL',
  HomepageLatestWorkFeaturedPhotosLocalFileId = 'homepage___latest_work___featuredPhotos___localFile___id',
  HomepageLatestWorkFeaturedPhotosLocalFileChildren = 'homepage___latest_work___featuredPhotos___localFile___children',
  HomepageLatestWorkFeaturedPhotosFixedBase64 = 'homepage___latest_work___featuredPhotos___fixed___base64',
  HomepageLatestWorkFeaturedPhotosFixedTracedSvg = 'homepage___latest_work___featuredPhotos___fixed___tracedSVG',
  HomepageLatestWorkFeaturedPhotosFixedAspectRatio = 'homepage___latest_work___featuredPhotos___fixed___aspectRatio',
  HomepageLatestWorkFeaturedPhotosFixedWidth = 'homepage___latest_work___featuredPhotos___fixed___width',
  HomepageLatestWorkFeaturedPhotosFixedHeight = 'homepage___latest_work___featuredPhotos___fixed___height',
  HomepageLatestWorkFeaturedPhotosFixedSrc = 'homepage___latest_work___featuredPhotos___fixed___src',
  HomepageLatestWorkFeaturedPhotosFixedSrcSet = 'homepage___latest_work___featuredPhotos___fixed___srcSet',
  HomepageLatestWorkFeaturedPhotosFixedSrcWebp = 'homepage___latest_work___featuredPhotos___fixed___srcWebp',
  HomepageLatestWorkFeaturedPhotosFixedSrcSetWebp = 'homepage___latest_work___featuredPhotos___fixed___srcSetWebp',
  HomepageLatestWorkFeaturedPhotosResolutionsBase64 = 'homepage___latest_work___featuredPhotos___resolutions___base64',
  HomepageLatestWorkFeaturedPhotosResolutionsTracedSvg = 'homepage___latest_work___featuredPhotos___resolutions___tracedSVG',
  HomepageLatestWorkFeaturedPhotosResolutionsAspectRatio = 'homepage___latest_work___featuredPhotos___resolutions___aspectRatio',
  HomepageLatestWorkFeaturedPhotosResolutionsWidth = 'homepage___latest_work___featuredPhotos___resolutions___width',
  HomepageLatestWorkFeaturedPhotosResolutionsHeight = 'homepage___latest_work___featuredPhotos___resolutions___height',
  HomepageLatestWorkFeaturedPhotosResolutionsSrc = 'homepage___latest_work___featuredPhotos___resolutions___src',
  HomepageLatestWorkFeaturedPhotosResolutionsSrcSet = 'homepage___latest_work___featuredPhotos___resolutions___srcSet',
  HomepageLatestWorkFeaturedPhotosResolutionsSrcWebp = 'homepage___latest_work___featuredPhotos___resolutions___srcWebp',
  HomepageLatestWorkFeaturedPhotosResolutionsSrcSetWebp = 'homepage___latest_work___featuredPhotos___resolutions___srcSetWebp',
  HomepageLatestWorkFeaturedPhotosFluidBase64 = 'homepage___latest_work___featuredPhotos___fluid___base64',
  HomepageLatestWorkFeaturedPhotosFluidTracedSvg = 'homepage___latest_work___featuredPhotos___fluid___tracedSVG',
  HomepageLatestWorkFeaturedPhotosFluidAspectRatio = 'homepage___latest_work___featuredPhotos___fluid___aspectRatio',
  HomepageLatestWorkFeaturedPhotosFluidSrc = 'homepage___latest_work___featuredPhotos___fluid___src',
  HomepageLatestWorkFeaturedPhotosFluidSrcSet = 'homepage___latest_work___featuredPhotos___fluid___srcSet',
  HomepageLatestWorkFeaturedPhotosFluidSrcWebp = 'homepage___latest_work___featuredPhotos___fluid___srcWebp',
  HomepageLatestWorkFeaturedPhotosFluidSrcSetWebp = 'homepage___latest_work___featuredPhotos___fluid___srcSetWebp',
  HomepageLatestWorkFeaturedPhotosFluidSizes = 'homepage___latest_work___featuredPhotos___fluid___sizes',
  HomepageLatestWorkFeaturedPhotosSizesBase64 = 'homepage___latest_work___featuredPhotos___sizes___base64',
  HomepageLatestWorkFeaturedPhotosSizesTracedSvg = 'homepage___latest_work___featuredPhotos___sizes___tracedSVG',
  HomepageLatestWorkFeaturedPhotosSizesAspectRatio = 'homepage___latest_work___featuredPhotos___sizes___aspectRatio',
  HomepageLatestWorkFeaturedPhotosSizesSrc = 'homepage___latest_work___featuredPhotos___sizes___src',
  HomepageLatestWorkFeaturedPhotosSizesSrcSet = 'homepage___latest_work___featuredPhotos___sizes___srcSet',
  HomepageLatestWorkFeaturedPhotosSizesSrcWebp = 'homepage___latest_work___featuredPhotos___sizes___srcWebp',
  HomepageLatestWorkFeaturedPhotosSizesSrcSetWebp = 'homepage___latest_work___featuredPhotos___sizes___srcSetWebp',
  HomepageLatestWorkFeaturedPhotosSizesSizes = 'homepage___latest_work___featuredPhotos___sizes___sizes',
  HomepageLatestWorkFeaturedPhotosResizeBase64 = 'homepage___latest_work___featuredPhotos___resize___base64',
  HomepageLatestWorkFeaturedPhotosResizeTracedSvg = 'homepage___latest_work___featuredPhotos___resize___tracedSVG',
  HomepageLatestWorkFeaturedPhotosResizeSrc = 'homepage___latest_work___featuredPhotos___resize___src',
  HomepageLatestWorkFeaturedPhotosResizeWidth = 'homepage___latest_work___featuredPhotos___resize___width',
  HomepageLatestWorkFeaturedPhotosResizeHeight = 'homepage___latest_work___featuredPhotos___resize___height',
  HomepageLatestWorkFeaturedPhotosResizeAspectRatio = 'homepage___latest_work___featuredPhotos___resize___aspectRatio',
  HomepageLatestWorkFeaturedPhotosParentId = 'homepage___latest_work___featuredPhotos___parent___id',
  HomepageLatestWorkFeaturedPhotosParentChildren = 'homepage___latest_work___featuredPhotos___parent___children',
  HomepageLatestWorkFeaturedPhotosChildren = 'homepage___latest_work___featuredPhotos___children',
  HomepageLatestWorkFeaturedPhotosChildrenId = 'homepage___latest_work___featuredPhotos___children___id',
  HomepageLatestWorkFeaturedPhotosChildrenChildren = 'homepage___latest_work___featuredPhotos___children___children',
  HomepageLatestWorkFeaturedPhotosInternalContent = 'homepage___latest_work___featuredPhotos___internal___content',
  HomepageLatestWorkFeaturedPhotosInternalContentDigest = 'homepage___latest_work___featuredPhotos___internal___contentDigest',
  HomepageLatestWorkFeaturedPhotosInternalDescription = 'homepage___latest_work___featuredPhotos___internal___description',
  HomepageLatestWorkFeaturedPhotosInternalFieldOwners = 'homepage___latest_work___featuredPhotos___internal___fieldOwners',
  HomepageLatestWorkFeaturedPhotosInternalIgnoreType = 'homepage___latest_work___featuredPhotos___internal___ignoreType',
  HomepageLatestWorkFeaturedPhotosInternalMediaType = 'homepage___latest_work___featuredPhotos___internal___mediaType',
  HomepageLatestWorkFeaturedPhotosInternalOwner = 'homepage___latest_work___featuredPhotos___internal___owner',
  HomepageLatestWorkFeaturedPhotosInternalType = 'homepage___latest_work___featuredPhotos___internal___type',
  HomepageLatestWorkSpaceId = 'homepage___latest_work___spaceId',
  HomepageLatestWorkCreatedAt = 'homepage___latest_work___createdAt',
  HomepageLatestWorkUpdatedAt = 'homepage___latest_work___updatedAt',
  HomepageLatestWorkSysType = 'homepage___latest_work___sys___type',
  HomepageLatestWorkSysRevision = 'homepage___latest_work___sys___revision',
  HomepageLatestWorkParentId = 'homepage___latest_work___parent___id',
  HomepageLatestWorkParentParentId = 'homepage___latest_work___parent___parent___id',
  HomepageLatestWorkParentParentChildren = 'homepage___latest_work___parent___parent___children',
  HomepageLatestWorkParentChildren = 'homepage___latest_work___parent___children',
  HomepageLatestWorkParentChildrenId = 'homepage___latest_work___parent___children___id',
  HomepageLatestWorkParentChildrenChildren = 'homepage___latest_work___parent___children___children',
  HomepageLatestWorkParentInternalContent = 'homepage___latest_work___parent___internal___content',
  HomepageLatestWorkParentInternalContentDigest = 'homepage___latest_work___parent___internal___contentDigest',
  HomepageLatestWorkParentInternalDescription = 'homepage___latest_work___parent___internal___description',
  HomepageLatestWorkParentInternalFieldOwners = 'homepage___latest_work___parent___internal___fieldOwners',
  HomepageLatestWorkParentInternalIgnoreType = 'homepage___latest_work___parent___internal___ignoreType',
  HomepageLatestWorkParentInternalMediaType = 'homepage___latest_work___parent___internal___mediaType',
  HomepageLatestWorkParentInternalOwner = 'homepage___latest_work___parent___internal___owner',
  HomepageLatestWorkParentInternalType = 'homepage___latest_work___parent___internal___type',
  HomepageLatestWorkChildren = 'homepage___latest_work___children',
  HomepageLatestWorkChildrenId = 'homepage___latest_work___children___id',
  HomepageLatestWorkChildrenParentId = 'homepage___latest_work___children___parent___id',
  HomepageLatestWorkChildrenParentChildren = 'homepage___latest_work___children___parent___children',
  HomepageLatestWorkChildrenChildren = 'homepage___latest_work___children___children',
  HomepageLatestWorkChildrenChildrenId = 'homepage___latest_work___children___children___id',
  HomepageLatestWorkChildrenChildrenChildren = 'homepage___latest_work___children___children___children',
  HomepageLatestWorkChildrenInternalContent = 'homepage___latest_work___children___internal___content',
  HomepageLatestWorkChildrenInternalContentDigest = 'homepage___latest_work___children___internal___contentDigest',
  HomepageLatestWorkChildrenInternalDescription = 'homepage___latest_work___children___internal___description',
  HomepageLatestWorkChildrenInternalFieldOwners = 'homepage___latest_work___children___internal___fieldOwners',
  HomepageLatestWorkChildrenInternalIgnoreType = 'homepage___latest_work___children___internal___ignoreType',
  HomepageLatestWorkChildrenInternalMediaType = 'homepage___latest_work___children___internal___mediaType',
  HomepageLatestWorkChildrenInternalOwner = 'homepage___latest_work___children___internal___owner',
  HomepageLatestWorkChildrenInternalType = 'homepage___latest_work___children___internal___type',
  HomepageLatestWorkInternalContent = 'homepage___latest_work___internal___content',
  HomepageLatestWorkInternalContentDigest = 'homepage___latest_work___internal___contentDigest',
  HomepageLatestWorkInternalDescription = 'homepage___latest_work___internal___description',
  HomepageLatestWorkInternalFieldOwners = 'homepage___latest_work___internal___fieldOwners',
  HomepageLatestWorkInternalIgnoreType = 'homepage___latest_work___internal___ignoreType',
  HomepageLatestWorkInternalMediaType = 'homepage___latest_work___internal___mediaType',
  HomepageLatestWorkInternalOwner = 'homepage___latest_work___internal___owner',
  HomepageLatestWorkInternalType = 'homepage___latest_work___internal___type',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  ChildContentfulProjectDescriptionTextNodeId = 'childContentfulProjectDescriptionTextNode___id',
  ChildContentfulProjectDescriptionTextNodeParentId = 'childContentfulProjectDescriptionTextNode___parent___id',
  ChildContentfulProjectDescriptionTextNodeParentParentId = 'childContentfulProjectDescriptionTextNode___parent___parent___id',
  ChildContentfulProjectDescriptionTextNodeParentParentChildren = 'childContentfulProjectDescriptionTextNode___parent___parent___children',
  ChildContentfulProjectDescriptionTextNodeParentChildren = 'childContentfulProjectDescriptionTextNode___parent___children',
  ChildContentfulProjectDescriptionTextNodeParentChildrenId = 'childContentfulProjectDescriptionTextNode___parent___children___id',
  ChildContentfulProjectDescriptionTextNodeParentChildrenChildren = 'childContentfulProjectDescriptionTextNode___parent___children___children',
  ChildContentfulProjectDescriptionTextNodeParentInternalContent = 'childContentfulProjectDescriptionTextNode___parent___internal___content',
  ChildContentfulProjectDescriptionTextNodeParentInternalContentDigest = 'childContentfulProjectDescriptionTextNode___parent___internal___contentDigest',
  ChildContentfulProjectDescriptionTextNodeParentInternalDescription = 'childContentfulProjectDescriptionTextNode___parent___internal___description',
  ChildContentfulProjectDescriptionTextNodeParentInternalFieldOwners = 'childContentfulProjectDescriptionTextNode___parent___internal___fieldOwners',
  ChildContentfulProjectDescriptionTextNodeParentInternalIgnoreType = 'childContentfulProjectDescriptionTextNode___parent___internal___ignoreType',
  ChildContentfulProjectDescriptionTextNodeParentInternalMediaType = 'childContentfulProjectDescriptionTextNode___parent___internal___mediaType',
  ChildContentfulProjectDescriptionTextNodeParentInternalOwner = 'childContentfulProjectDescriptionTextNode___parent___internal___owner',
  ChildContentfulProjectDescriptionTextNodeParentInternalType = 'childContentfulProjectDescriptionTextNode___parent___internal___type',
  ChildContentfulProjectDescriptionTextNodeChildren = 'childContentfulProjectDescriptionTextNode___children',
  ChildContentfulProjectDescriptionTextNodeChildrenId = 'childContentfulProjectDescriptionTextNode___children___id',
  ChildContentfulProjectDescriptionTextNodeChildrenParentId = 'childContentfulProjectDescriptionTextNode___children___parent___id',
  ChildContentfulProjectDescriptionTextNodeChildrenParentChildren = 'childContentfulProjectDescriptionTextNode___children___parent___children',
  ChildContentfulProjectDescriptionTextNodeChildrenChildren = 'childContentfulProjectDescriptionTextNode___children___children',
  ChildContentfulProjectDescriptionTextNodeChildrenChildrenId = 'childContentfulProjectDescriptionTextNode___children___children___id',
  ChildContentfulProjectDescriptionTextNodeChildrenChildrenChildren = 'childContentfulProjectDescriptionTextNode___children___children___children',
  ChildContentfulProjectDescriptionTextNodeChildrenInternalContent = 'childContentfulProjectDescriptionTextNode___children___internal___content',
  ChildContentfulProjectDescriptionTextNodeChildrenInternalContentDigest = 'childContentfulProjectDescriptionTextNode___children___internal___contentDigest',
  ChildContentfulProjectDescriptionTextNodeChildrenInternalDescription = 'childContentfulProjectDescriptionTextNode___children___internal___description',
  ChildContentfulProjectDescriptionTextNodeChildrenInternalFieldOwners = 'childContentfulProjectDescriptionTextNode___children___internal___fieldOwners',
  ChildContentfulProjectDescriptionTextNodeChildrenInternalIgnoreType = 'childContentfulProjectDescriptionTextNode___children___internal___ignoreType',
  ChildContentfulProjectDescriptionTextNodeChildrenInternalMediaType = 'childContentfulProjectDescriptionTextNode___children___internal___mediaType',
  ChildContentfulProjectDescriptionTextNodeChildrenInternalOwner = 'childContentfulProjectDescriptionTextNode___children___internal___owner',
  ChildContentfulProjectDescriptionTextNodeChildrenInternalType = 'childContentfulProjectDescriptionTextNode___children___internal___type',
  ChildContentfulProjectDescriptionTextNodeInternalContent = 'childContentfulProjectDescriptionTextNode___internal___content',
  ChildContentfulProjectDescriptionTextNodeInternalContentDigest = 'childContentfulProjectDescriptionTextNode___internal___contentDigest',
  ChildContentfulProjectDescriptionTextNodeInternalDescription = 'childContentfulProjectDescriptionTextNode___internal___description',
  ChildContentfulProjectDescriptionTextNodeInternalFieldOwners = 'childContentfulProjectDescriptionTextNode___internal___fieldOwners',
  ChildContentfulProjectDescriptionTextNodeInternalIgnoreType = 'childContentfulProjectDescriptionTextNode___internal___ignoreType',
  ChildContentfulProjectDescriptionTextNodeInternalMediaType = 'childContentfulProjectDescriptionTextNode___internal___mediaType',
  ChildContentfulProjectDescriptionTextNodeInternalOwner = 'childContentfulProjectDescriptionTextNode___internal___owner',
  ChildContentfulProjectDescriptionTextNodeInternalType = 'childContentfulProjectDescriptionTextNode___internal___type',
  ChildContentfulProjectDescriptionTextNodeDescription = 'childContentfulProjectDescriptionTextNode___description',
  ChildContentfulProjectDescriptionTextNodeSysType = 'childContentfulProjectDescriptionTextNode___sys___type',
}

export type ContentfulProjectFilterInput = {
  contentful_id?: Maybe<StringQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  node_locale?: Maybe<StringQueryOperatorInput>
  title?: Maybe<StringQueryOperatorInput>
  slug?: Maybe<StringQueryOperatorInput>
  theme?: Maybe<ContentfulThemeFilterInput>
  coverImage?: Maybe<ContentfulAssetFilterInput>
  photos?: Maybe<ContentfulAssetFilterListInput>
  description?: Maybe<ContentfulProjectDescriptionTextNodeFilterInput>
  spaceId?: Maybe<StringQueryOperatorInput>
  createdAt?: Maybe<DateQueryOperatorInput>
  updatedAt?: Maybe<DateQueryOperatorInput>
  sys?: Maybe<ContentfulProjectSysFilterInput>
  homepage___featured?: Maybe<ContentfulHomepageFeaturedFilterListInput>
  homepage___latest_work?: Maybe<ContentfulHomepageLatestWorkFilterListInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
  childContentfulProjectDescriptionTextNode?: Maybe<ContentfulProjectDescriptionTextNodeFilterInput>
}

export type ContentfulProjectFilterListInput = {
  elemMatch?: Maybe<ContentfulProjectFilterInput>
}

export type ContentfulProjectGroupConnection = {
  __typename?: 'ContentfulProjectGroupConnection'
  totalCount: Scalars['Int']
  edges: Array<ContentfulProjectEdge>
  nodes: Array<ContentfulProject>
  pageInfo: PageInfo
  field: Scalars['String']
  fieldValue?: Maybe<Scalars['String']>
}

export type ContentfulProjectSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulProjectFieldsEnum>>>
  order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type ContentfulProjectSys = {
  __typename?: 'ContentfulProjectSys'
  type?: Maybe<Scalars['String']>
  revision?: Maybe<Scalars['Int']>
  contentType?: Maybe<ContentfulProjectSysContentType>
}

export type ContentfulProjectSysContentType = {
  __typename?: 'ContentfulProjectSysContentType'
  sys?: Maybe<ContentfulProjectSysContentTypeSys>
}

export type ContentfulProjectSysContentTypeFilterInput = {
  sys?: Maybe<ContentfulProjectSysContentTypeSysFilterInput>
}

export type ContentfulProjectSysContentTypeSys = {
  __typename?: 'ContentfulProjectSysContentTypeSys'
  type?: Maybe<Scalars['String']>
  linkType?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['String']>
}

export type ContentfulProjectSysContentTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>
  linkType?: Maybe<StringQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
}

export type ContentfulProjectSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>
  revision?: Maybe<IntQueryOperatorInput>
  contentType?: Maybe<ContentfulProjectSysContentTypeFilterInput>
}

export type ContentfulReference = {
  contentful_id: Scalars['String']
  id: Scalars['ID']
}

export type ContentfulResize = {
  __typename?: 'ContentfulResize'
  base64?: Maybe<Scalars['String']>
  tracedSVG?: Maybe<Scalars['String']>
  src?: Maybe<Scalars['String']>
  width?: Maybe<Scalars['Int']>
  height?: Maybe<Scalars['Int']>
  aspectRatio?: Maybe<Scalars['Float']>
}

export type ContentfulResizeFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>
  tracedSVG?: Maybe<StringQueryOperatorInput>
  src?: Maybe<StringQueryOperatorInput>
  width?: Maybe<IntQueryOperatorInput>
  height?: Maybe<IntQueryOperatorInput>
  aspectRatio?: Maybe<FloatQueryOperatorInput>
}

export type ContentfulResolutions = {
  __typename?: 'ContentfulResolutions'
  base64?: Maybe<Scalars['String']>
  tracedSVG?: Maybe<Scalars['String']>
  aspectRatio?: Maybe<Scalars['Float']>
  width: Scalars['Float']
  height: Scalars['Float']
  src: Scalars['String']
  srcSet: Scalars['String']
  srcWebp?: Maybe<Scalars['String']>
  srcSetWebp?: Maybe<Scalars['String']>
}

export type ContentfulResolutionsFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>
  tracedSVG?: Maybe<StringQueryOperatorInput>
  aspectRatio?: Maybe<FloatQueryOperatorInput>
  width?: Maybe<FloatQueryOperatorInput>
  height?: Maybe<FloatQueryOperatorInput>
  src?: Maybe<StringQueryOperatorInput>
  srcSet?: Maybe<StringQueryOperatorInput>
  srcWebp?: Maybe<StringQueryOperatorInput>
  srcSetWebp?: Maybe<StringQueryOperatorInput>
}

export type ContentfulSizes = {
  __typename?: 'ContentfulSizes'
  base64?: Maybe<Scalars['String']>
  tracedSVG?: Maybe<Scalars['String']>
  aspectRatio: Scalars['Float']
  src: Scalars['String']
  srcSet: Scalars['String']
  srcWebp?: Maybe<Scalars['String']>
  srcSetWebp?: Maybe<Scalars['String']>
  sizes: Scalars['String']
}

export type ContentfulSizesFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>
  tracedSVG?: Maybe<StringQueryOperatorInput>
  aspectRatio?: Maybe<FloatQueryOperatorInput>
  src?: Maybe<StringQueryOperatorInput>
  srcSet?: Maybe<StringQueryOperatorInput>
  srcWebp?: Maybe<StringQueryOperatorInput>
  srcSetWebp?: Maybe<StringQueryOperatorInput>
  sizes?: Maybe<StringQueryOperatorInput>
}

export type ContentfulTheme = ContentfulReference &
  ContentfulEntry &
  Node & {
    __typename?: 'ContentfulTheme'
    contentful_id: Scalars['String']
    id: Scalars['ID']
    node_locale: Scalars['String']
    title?: Maybe<Scalars['String']>
    slug?: Maybe<Scalars['String']>
    coverImage?: Maybe<ContentfulAsset>
    featuredPhotos?: Maybe<Array<Maybe<ContentfulAsset>>>
    project?: Maybe<Array<Maybe<ContentfulProject>>>
    homepage___featured?: Maybe<Array<Maybe<ContentfulHomepageFeatured>>>
    spaceId?: Maybe<Scalars['String']>
    createdAt?: Maybe<Scalars['Date']>
    updatedAt?: Maybe<Scalars['Date']>
    sys?: Maybe<ContentfulThemeSys>
    parent?: Maybe<Node>
    children: Array<Node>
    internal: Internal
  }

export type ContentfulThemeCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type ContentfulThemeUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type ContentfulThemeConnection = {
  __typename?: 'ContentfulThemeConnection'
  totalCount: Scalars['Int']
  edges: Array<ContentfulThemeEdge>
  nodes: Array<ContentfulTheme>
  pageInfo: PageInfo
  distinct: Array<Scalars['String']>
  group: Array<ContentfulThemeGroupConnection>
}

export type ContentfulThemeConnectionDistinctArgs = {
  field: ContentfulThemeFieldsEnum
}

export type ContentfulThemeConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  field: ContentfulThemeFieldsEnum
}

export type ContentfulThemeEdge = {
  __typename?: 'ContentfulThemeEdge'
  next?: Maybe<ContentfulTheme>
  node: ContentfulTheme
  previous?: Maybe<ContentfulTheme>
}

export enum ContentfulThemeFieldsEnum {
  ContentfulId = 'contentful_id',
  Id = 'id',
  NodeLocale = 'node_locale',
  Title = 'title',
  Slug = 'slug',
  CoverImageContentfulId = 'coverImage___contentful_id',
  CoverImageId = 'coverImage___id',
  CoverImageSpaceId = 'coverImage___spaceId',
  CoverImageCreatedAt = 'coverImage___createdAt',
  CoverImageUpdatedAt = 'coverImage___updatedAt',
  CoverImageFileUrl = 'coverImage___file___url',
  CoverImageFileDetailsSize = 'coverImage___file___details___size',
  CoverImageFileFileName = 'coverImage___file___fileName',
  CoverImageFileContentType = 'coverImage___file___contentType',
  CoverImageTitle = 'coverImage___title',
  CoverImageDescription = 'coverImage___description',
  CoverImageNodeLocale = 'coverImage___node_locale',
  CoverImageSysType = 'coverImage___sys___type',
  CoverImageSysRevision = 'coverImage___sys___revision',
  CoverImageLocalFileSourceInstanceName = 'coverImage___localFile___sourceInstanceName',
  CoverImageLocalFileAbsolutePath = 'coverImage___localFile___absolutePath',
  CoverImageLocalFileRelativePath = 'coverImage___localFile___relativePath',
  CoverImageLocalFileExtension = 'coverImage___localFile___extension',
  CoverImageLocalFileSize = 'coverImage___localFile___size',
  CoverImageLocalFilePrettySize = 'coverImage___localFile___prettySize',
  CoverImageLocalFileModifiedTime = 'coverImage___localFile___modifiedTime',
  CoverImageLocalFileAccessTime = 'coverImage___localFile___accessTime',
  CoverImageLocalFileChangeTime = 'coverImage___localFile___changeTime',
  CoverImageLocalFileBirthTime = 'coverImage___localFile___birthTime',
  CoverImageLocalFileRoot = 'coverImage___localFile___root',
  CoverImageLocalFileDir = 'coverImage___localFile___dir',
  CoverImageLocalFileBase = 'coverImage___localFile___base',
  CoverImageLocalFileExt = 'coverImage___localFile___ext',
  CoverImageLocalFileName = 'coverImage___localFile___name',
  CoverImageLocalFileRelativeDirectory = 'coverImage___localFile___relativeDirectory',
  CoverImageLocalFileDev = 'coverImage___localFile___dev',
  CoverImageLocalFileMode = 'coverImage___localFile___mode',
  CoverImageLocalFileNlink = 'coverImage___localFile___nlink',
  CoverImageLocalFileUid = 'coverImage___localFile___uid',
  CoverImageLocalFileGid = 'coverImage___localFile___gid',
  CoverImageLocalFileRdev = 'coverImage___localFile___rdev',
  CoverImageLocalFileIno = 'coverImage___localFile___ino',
  CoverImageLocalFileAtimeMs = 'coverImage___localFile___atimeMs',
  CoverImageLocalFileMtimeMs = 'coverImage___localFile___mtimeMs',
  CoverImageLocalFileCtimeMs = 'coverImage___localFile___ctimeMs',
  CoverImageLocalFileAtime = 'coverImage___localFile___atime',
  CoverImageLocalFileMtime = 'coverImage___localFile___mtime',
  CoverImageLocalFileCtime = 'coverImage___localFile___ctime',
  CoverImageLocalFileBirthtime = 'coverImage___localFile___birthtime',
  CoverImageLocalFileBirthtimeMs = 'coverImage___localFile___birthtimeMs',
  CoverImageLocalFileBlksize = 'coverImage___localFile___blksize',
  CoverImageLocalFileBlocks = 'coverImage___localFile___blocks',
  CoverImageLocalFileUrl = 'coverImage___localFile___url',
  CoverImageLocalFilePublicUrl = 'coverImage___localFile___publicURL',
  CoverImageLocalFileChildImageSharpGatsbyImageData = 'coverImage___localFile___childImageSharp___gatsbyImageData',
  CoverImageLocalFileChildImageSharpId = 'coverImage___localFile___childImageSharp___id',
  CoverImageLocalFileChildImageSharpChildren = 'coverImage___localFile___childImageSharp___children',
  CoverImageLocalFileId = 'coverImage___localFile___id',
  CoverImageLocalFileParentId = 'coverImage___localFile___parent___id',
  CoverImageLocalFileParentChildren = 'coverImage___localFile___parent___children',
  CoverImageLocalFileChildren = 'coverImage___localFile___children',
  CoverImageLocalFileChildrenId = 'coverImage___localFile___children___id',
  CoverImageLocalFileChildrenChildren = 'coverImage___localFile___children___children',
  CoverImageLocalFileInternalContent = 'coverImage___localFile___internal___content',
  CoverImageLocalFileInternalContentDigest = 'coverImage___localFile___internal___contentDigest',
  CoverImageLocalFileInternalDescription = 'coverImage___localFile___internal___description',
  CoverImageLocalFileInternalFieldOwners = 'coverImage___localFile___internal___fieldOwners',
  CoverImageLocalFileInternalIgnoreType = 'coverImage___localFile___internal___ignoreType',
  CoverImageLocalFileInternalMediaType = 'coverImage___localFile___internal___mediaType',
  CoverImageLocalFileInternalOwner = 'coverImage___localFile___internal___owner',
  CoverImageLocalFileInternalType = 'coverImage___localFile___internal___type',
  CoverImageFixedBase64 = 'coverImage___fixed___base64',
  CoverImageFixedTracedSvg = 'coverImage___fixed___tracedSVG',
  CoverImageFixedAspectRatio = 'coverImage___fixed___aspectRatio',
  CoverImageFixedWidth = 'coverImage___fixed___width',
  CoverImageFixedHeight = 'coverImage___fixed___height',
  CoverImageFixedSrc = 'coverImage___fixed___src',
  CoverImageFixedSrcSet = 'coverImage___fixed___srcSet',
  CoverImageFixedSrcWebp = 'coverImage___fixed___srcWebp',
  CoverImageFixedSrcSetWebp = 'coverImage___fixed___srcSetWebp',
  CoverImageResolutionsBase64 = 'coverImage___resolutions___base64',
  CoverImageResolutionsTracedSvg = 'coverImage___resolutions___tracedSVG',
  CoverImageResolutionsAspectRatio = 'coverImage___resolutions___aspectRatio',
  CoverImageResolutionsWidth = 'coverImage___resolutions___width',
  CoverImageResolutionsHeight = 'coverImage___resolutions___height',
  CoverImageResolutionsSrc = 'coverImage___resolutions___src',
  CoverImageResolutionsSrcSet = 'coverImage___resolutions___srcSet',
  CoverImageResolutionsSrcWebp = 'coverImage___resolutions___srcWebp',
  CoverImageResolutionsSrcSetWebp = 'coverImage___resolutions___srcSetWebp',
  CoverImageFluidBase64 = 'coverImage___fluid___base64',
  CoverImageFluidTracedSvg = 'coverImage___fluid___tracedSVG',
  CoverImageFluidAspectRatio = 'coverImage___fluid___aspectRatio',
  CoverImageFluidSrc = 'coverImage___fluid___src',
  CoverImageFluidSrcSet = 'coverImage___fluid___srcSet',
  CoverImageFluidSrcWebp = 'coverImage___fluid___srcWebp',
  CoverImageFluidSrcSetWebp = 'coverImage___fluid___srcSetWebp',
  CoverImageFluidSizes = 'coverImage___fluid___sizes',
  CoverImageSizesBase64 = 'coverImage___sizes___base64',
  CoverImageSizesTracedSvg = 'coverImage___sizes___tracedSVG',
  CoverImageSizesAspectRatio = 'coverImage___sizes___aspectRatio',
  CoverImageSizesSrc = 'coverImage___sizes___src',
  CoverImageSizesSrcSet = 'coverImage___sizes___srcSet',
  CoverImageSizesSrcWebp = 'coverImage___sizes___srcWebp',
  CoverImageSizesSrcSetWebp = 'coverImage___sizes___srcSetWebp',
  CoverImageSizesSizes = 'coverImage___sizes___sizes',
  CoverImageResizeBase64 = 'coverImage___resize___base64',
  CoverImageResizeTracedSvg = 'coverImage___resize___tracedSVG',
  CoverImageResizeSrc = 'coverImage___resize___src',
  CoverImageResizeWidth = 'coverImage___resize___width',
  CoverImageResizeHeight = 'coverImage___resize___height',
  CoverImageResizeAspectRatio = 'coverImage___resize___aspectRatio',
  CoverImageParentId = 'coverImage___parent___id',
  CoverImageParentParentId = 'coverImage___parent___parent___id',
  CoverImageParentParentChildren = 'coverImage___parent___parent___children',
  CoverImageParentChildren = 'coverImage___parent___children',
  CoverImageParentChildrenId = 'coverImage___parent___children___id',
  CoverImageParentChildrenChildren = 'coverImage___parent___children___children',
  CoverImageParentInternalContent = 'coverImage___parent___internal___content',
  CoverImageParentInternalContentDigest = 'coverImage___parent___internal___contentDigest',
  CoverImageParentInternalDescription = 'coverImage___parent___internal___description',
  CoverImageParentInternalFieldOwners = 'coverImage___parent___internal___fieldOwners',
  CoverImageParentInternalIgnoreType = 'coverImage___parent___internal___ignoreType',
  CoverImageParentInternalMediaType = 'coverImage___parent___internal___mediaType',
  CoverImageParentInternalOwner = 'coverImage___parent___internal___owner',
  CoverImageParentInternalType = 'coverImage___parent___internal___type',
  CoverImageChildren = 'coverImage___children',
  CoverImageChildrenId = 'coverImage___children___id',
  CoverImageChildrenParentId = 'coverImage___children___parent___id',
  CoverImageChildrenParentChildren = 'coverImage___children___parent___children',
  CoverImageChildrenChildren = 'coverImage___children___children',
  CoverImageChildrenChildrenId = 'coverImage___children___children___id',
  CoverImageChildrenChildrenChildren = 'coverImage___children___children___children',
  CoverImageChildrenInternalContent = 'coverImage___children___internal___content',
  CoverImageChildrenInternalContentDigest = 'coverImage___children___internal___contentDigest',
  CoverImageChildrenInternalDescription = 'coverImage___children___internal___description',
  CoverImageChildrenInternalFieldOwners = 'coverImage___children___internal___fieldOwners',
  CoverImageChildrenInternalIgnoreType = 'coverImage___children___internal___ignoreType',
  CoverImageChildrenInternalMediaType = 'coverImage___children___internal___mediaType',
  CoverImageChildrenInternalOwner = 'coverImage___children___internal___owner',
  CoverImageChildrenInternalType = 'coverImage___children___internal___type',
  CoverImageInternalContent = 'coverImage___internal___content',
  CoverImageInternalContentDigest = 'coverImage___internal___contentDigest',
  CoverImageInternalDescription = 'coverImage___internal___description',
  CoverImageInternalFieldOwners = 'coverImage___internal___fieldOwners',
  CoverImageInternalIgnoreType = 'coverImage___internal___ignoreType',
  CoverImageInternalMediaType = 'coverImage___internal___mediaType',
  CoverImageInternalOwner = 'coverImage___internal___owner',
  CoverImageInternalType = 'coverImage___internal___type',
  FeaturedPhotos = 'featuredPhotos',
  FeaturedPhotosContentfulId = 'featuredPhotos___contentful_id',
  FeaturedPhotosId = 'featuredPhotos___id',
  FeaturedPhotosSpaceId = 'featuredPhotos___spaceId',
  FeaturedPhotosCreatedAt = 'featuredPhotos___createdAt',
  FeaturedPhotosUpdatedAt = 'featuredPhotos___updatedAt',
  FeaturedPhotosFileUrl = 'featuredPhotos___file___url',
  FeaturedPhotosFileDetailsSize = 'featuredPhotos___file___details___size',
  FeaturedPhotosFileFileName = 'featuredPhotos___file___fileName',
  FeaturedPhotosFileContentType = 'featuredPhotos___file___contentType',
  FeaturedPhotosTitle = 'featuredPhotos___title',
  FeaturedPhotosDescription = 'featuredPhotos___description',
  FeaturedPhotosNodeLocale = 'featuredPhotos___node_locale',
  FeaturedPhotosSysType = 'featuredPhotos___sys___type',
  FeaturedPhotosSysRevision = 'featuredPhotos___sys___revision',
  FeaturedPhotosLocalFileSourceInstanceName = 'featuredPhotos___localFile___sourceInstanceName',
  FeaturedPhotosLocalFileAbsolutePath = 'featuredPhotos___localFile___absolutePath',
  FeaturedPhotosLocalFileRelativePath = 'featuredPhotos___localFile___relativePath',
  FeaturedPhotosLocalFileExtension = 'featuredPhotos___localFile___extension',
  FeaturedPhotosLocalFileSize = 'featuredPhotos___localFile___size',
  FeaturedPhotosLocalFilePrettySize = 'featuredPhotos___localFile___prettySize',
  FeaturedPhotosLocalFileModifiedTime = 'featuredPhotos___localFile___modifiedTime',
  FeaturedPhotosLocalFileAccessTime = 'featuredPhotos___localFile___accessTime',
  FeaturedPhotosLocalFileChangeTime = 'featuredPhotos___localFile___changeTime',
  FeaturedPhotosLocalFileBirthTime = 'featuredPhotos___localFile___birthTime',
  FeaturedPhotosLocalFileRoot = 'featuredPhotos___localFile___root',
  FeaturedPhotosLocalFileDir = 'featuredPhotos___localFile___dir',
  FeaturedPhotosLocalFileBase = 'featuredPhotos___localFile___base',
  FeaturedPhotosLocalFileExt = 'featuredPhotos___localFile___ext',
  FeaturedPhotosLocalFileName = 'featuredPhotos___localFile___name',
  FeaturedPhotosLocalFileRelativeDirectory = 'featuredPhotos___localFile___relativeDirectory',
  FeaturedPhotosLocalFileDev = 'featuredPhotos___localFile___dev',
  FeaturedPhotosLocalFileMode = 'featuredPhotos___localFile___mode',
  FeaturedPhotosLocalFileNlink = 'featuredPhotos___localFile___nlink',
  FeaturedPhotosLocalFileUid = 'featuredPhotos___localFile___uid',
  FeaturedPhotosLocalFileGid = 'featuredPhotos___localFile___gid',
  FeaturedPhotosLocalFileRdev = 'featuredPhotos___localFile___rdev',
  FeaturedPhotosLocalFileIno = 'featuredPhotos___localFile___ino',
  FeaturedPhotosLocalFileAtimeMs = 'featuredPhotos___localFile___atimeMs',
  FeaturedPhotosLocalFileMtimeMs = 'featuredPhotos___localFile___mtimeMs',
  FeaturedPhotosLocalFileCtimeMs = 'featuredPhotos___localFile___ctimeMs',
  FeaturedPhotosLocalFileAtime = 'featuredPhotos___localFile___atime',
  FeaturedPhotosLocalFileMtime = 'featuredPhotos___localFile___mtime',
  FeaturedPhotosLocalFileCtime = 'featuredPhotos___localFile___ctime',
  FeaturedPhotosLocalFileBirthtime = 'featuredPhotos___localFile___birthtime',
  FeaturedPhotosLocalFileBirthtimeMs = 'featuredPhotos___localFile___birthtimeMs',
  FeaturedPhotosLocalFileBlksize = 'featuredPhotos___localFile___blksize',
  FeaturedPhotosLocalFileBlocks = 'featuredPhotos___localFile___blocks',
  FeaturedPhotosLocalFileUrl = 'featuredPhotos___localFile___url',
  FeaturedPhotosLocalFilePublicUrl = 'featuredPhotos___localFile___publicURL',
  FeaturedPhotosLocalFileChildImageSharpGatsbyImageData = 'featuredPhotos___localFile___childImageSharp___gatsbyImageData',
  FeaturedPhotosLocalFileChildImageSharpId = 'featuredPhotos___localFile___childImageSharp___id',
  FeaturedPhotosLocalFileChildImageSharpChildren = 'featuredPhotos___localFile___childImageSharp___children',
  FeaturedPhotosLocalFileId = 'featuredPhotos___localFile___id',
  FeaturedPhotosLocalFileParentId = 'featuredPhotos___localFile___parent___id',
  FeaturedPhotosLocalFileParentChildren = 'featuredPhotos___localFile___parent___children',
  FeaturedPhotosLocalFileChildren = 'featuredPhotos___localFile___children',
  FeaturedPhotosLocalFileChildrenId = 'featuredPhotos___localFile___children___id',
  FeaturedPhotosLocalFileChildrenChildren = 'featuredPhotos___localFile___children___children',
  FeaturedPhotosLocalFileInternalContent = 'featuredPhotos___localFile___internal___content',
  FeaturedPhotosLocalFileInternalContentDigest = 'featuredPhotos___localFile___internal___contentDigest',
  FeaturedPhotosLocalFileInternalDescription = 'featuredPhotos___localFile___internal___description',
  FeaturedPhotosLocalFileInternalFieldOwners = 'featuredPhotos___localFile___internal___fieldOwners',
  FeaturedPhotosLocalFileInternalIgnoreType = 'featuredPhotos___localFile___internal___ignoreType',
  FeaturedPhotosLocalFileInternalMediaType = 'featuredPhotos___localFile___internal___mediaType',
  FeaturedPhotosLocalFileInternalOwner = 'featuredPhotos___localFile___internal___owner',
  FeaturedPhotosLocalFileInternalType = 'featuredPhotos___localFile___internal___type',
  FeaturedPhotosFixedBase64 = 'featuredPhotos___fixed___base64',
  FeaturedPhotosFixedTracedSvg = 'featuredPhotos___fixed___tracedSVG',
  FeaturedPhotosFixedAspectRatio = 'featuredPhotos___fixed___aspectRatio',
  FeaturedPhotosFixedWidth = 'featuredPhotos___fixed___width',
  FeaturedPhotosFixedHeight = 'featuredPhotos___fixed___height',
  FeaturedPhotosFixedSrc = 'featuredPhotos___fixed___src',
  FeaturedPhotosFixedSrcSet = 'featuredPhotos___fixed___srcSet',
  FeaturedPhotosFixedSrcWebp = 'featuredPhotos___fixed___srcWebp',
  FeaturedPhotosFixedSrcSetWebp = 'featuredPhotos___fixed___srcSetWebp',
  FeaturedPhotosResolutionsBase64 = 'featuredPhotos___resolutions___base64',
  FeaturedPhotosResolutionsTracedSvg = 'featuredPhotos___resolutions___tracedSVG',
  FeaturedPhotosResolutionsAspectRatio = 'featuredPhotos___resolutions___aspectRatio',
  FeaturedPhotosResolutionsWidth = 'featuredPhotos___resolutions___width',
  FeaturedPhotosResolutionsHeight = 'featuredPhotos___resolutions___height',
  FeaturedPhotosResolutionsSrc = 'featuredPhotos___resolutions___src',
  FeaturedPhotosResolutionsSrcSet = 'featuredPhotos___resolutions___srcSet',
  FeaturedPhotosResolutionsSrcWebp = 'featuredPhotos___resolutions___srcWebp',
  FeaturedPhotosResolutionsSrcSetWebp = 'featuredPhotos___resolutions___srcSetWebp',
  FeaturedPhotosFluidBase64 = 'featuredPhotos___fluid___base64',
  FeaturedPhotosFluidTracedSvg = 'featuredPhotos___fluid___tracedSVG',
  FeaturedPhotosFluidAspectRatio = 'featuredPhotos___fluid___aspectRatio',
  FeaturedPhotosFluidSrc = 'featuredPhotos___fluid___src',
  FeaturedPhotosFluidSrcSet = 'featuredPhotos___fluid___srcSet',
  FeaturedPhotosFluidSrcWebp = 'featuredPhotos___fluid___srcWebp',
  FeaturedPhotosFluidSrcSetWebp = 'featuredPhotos___fluid___srcSetWebp',
  FeaturedPhotosFluidSizes = 'featuredPhotos___fluid___sizes',
  FeaturedPhotosSizesBase64 = 'featuredPhotos___sizes___base64',
  FeaturedPhotosSizesTracedSvg = 'featuredPhotos___sizes___tracedSVG',
  FeaturedPhotosSizesAspectRatio = 'featuredPhotos___sizes___aspectRatio',
  FeaturedPhotosSizesSrc = 'featuredPhotos___sizes___src',
  FeaturedPhotosSizesSrcSet = 'featuredPhotos___sizes___srcSet',
  FeaturedPhotosSizesSrcWebp = 'featuredPhotos___sizes___srcWebp',
  FeaturedPhotosSizesSrcSetWebp = 'featuredPhotos___sizes___srcSetWebp',
  FeaturedPhotosSizesSizes = 'featuredPhotos___sizes___sizes',
  FeaturedPhotosResizeBase64 = 'featuredPhotos___resize___base64',
  FeaturedPhotosResizeTracedSvg = 'featuredPhotos___resize___tracedSVG',
  FeaturedPhotosResizeSrc = 'featuredPhotos___resize___src',
  FeaturedPhotosResizeWidth = 'featuredPhotos___resize___width',
  FeaturedPhotosResizeHeight = 'featuredPhotos___resize___height',
  FeaturedPhotosResizeAspectRatio = 'featuredPhotos___resize___aspectRatio',
  FeaturedPhotosParentId = 'featuredPhotos___parent___id',
  FeaturedPhotosParentParentId = 'featuredPhotos___parent___parent___id',
  FeaturedPhotosParentParentChildren = 'featuredPhotos___parent___parent___children',
  FeaturedPhotosParentChildren = 'featuredPhotos___parent___children',
  FeaturedPhotosParentChildrenId = 'featuredPhotos___parent___children___id',
  FeaturedPhotosParentChildrenChildren = 'featuredPhotos___parent___children___children',
  FeaturedPhotosParentInternalContent = 'featuredPhotos___parent___internal___content',
  FeaturedPhotosParentInternalContentDigest = 'featuredPhotos___parent___internal___contentDigest',
  FeaturedPhotosParentInternalDescription = 'featuredPhotos___parent___internal___description',
  FeaturedPhotosParentInternalFieldOwners = 'featuredPhotos___parent___internal___fieldOwners',
  FeaturedPhotosParentInternalIgnoreType = 'featuredPhotos___parent___internal___ignoreType',
  FeaturedPhotosParentInternalMediaType = 'featuredPhotos___parent___internal___mediaType',
  FeaturedPhotosParentInternalOwner = 'featuredPhotos___parent___internal___owner',
  FeaturedPhotosParentInternalType = 'featuredPhotos___parent___internal___type',
  FeaturedPhotosChildren = 'featuredPhotos___children',
  FeaturedPhotosChildrenId = 'featuredPhotos___children___id',
  FeaturedPhotosChildrenParentId = 'featuredPhotos___children___parent___id',
  FeaturedPhotosChildrenParentChildren = 'featuredPhotos___children___parent___children',
  FeaturedPhotosChildrenChildren = 'featuredPhotos___children___children',
  FeaturedPhotosChildrenChildrenId = 'featuredPhotos___children___children___id',
  FeaturedPhotosChildrenChildrenChildren = 'featuredPhotos___children___children___children',
  FeaturedPhotosChildrenInternalContent = 'featuredPhotos___children___internal___content',
  FeaturedPhotosChildrenInternalContentDigest = 'featuredPhotos___children___internal___contentDigest',
  FeaturedPhotosChildrenInternalDescription = 'featuredPhotos___children___internal___description',
  FeaturedPhotosChildrenInternalFieldOwners = 'featuredPhotos___children___internal___fieldOwners',
  FeaturedPhotosChildrenInternalIgnoreType = 'featuredPhotos___children___internal___ignoreType',
  FeaturedPhotosChildrenInternalMediaType = 'featuredPhotos___children___internal___mediaType',
  FeaturedPhotosChildrenInternalOwner = 'featuredPhotos___children___internal___owner',
  FeaturedPhotosChildrenInternalType = 'featuredPhotos___children___internal___type',
  FeaturedPhotosInternalContent = 'featuredPhotos___internal___content',
  FeaturedPhotosInternalContentDigest = 'featuredPhotos___internal___contentDigest',
  FeaturedPhotosInternalDescription = 'featuredPhotos___internal___description',
  FeaturedPhotosInternalFieldOwners = 'featuredPhotos___internal___fieldOwners',
  FeaturedPhotosInternalIgnoreType = 'featuredPhotos___internal___ignoreType',
  FeaturedPhotosInternalMediaType = 'featuredPhotos___internal___mediaType',
  FeaturedPhotosInternalOwner = 'featuredPhotos___internal___owner',
  FeaturedPhotosInternalType = 'featuredPhotos___internal___type',
  Project = 'project',
  ProjectContentfulId = 'project___contentful_id',
  ProjectId = 'project___id',
  ProjectNodeLocale = 'project___node_locale',
  ProjectTitle = 'project___title',
  ProjectSlug = 'project___slug',
  ProjectThemeContentfulId = 'project___theme___contentful_id',
  ProjectThemeId = 'project___theme___id',
  ProjectThemeNodeLocale = 'project___theme___node_locale',
  ProjectThemeTitle = 'project___theme___title',
  ProjectThemeSlug = 'project___theme___slug',
  ProjectThemeCoverImageContentfulId = 'project___theme___coverImage___contentful_id',
  ProjectThemeCoverImageId = 'project___theme___coverImage___id',
  ProjectThemeCoverImageSpaceId = 'project___theme___coverImage___spaceId',
  ProjectThemeCoverImageCreatedAt = 'project___theme___coverImage___createdAt',
  ProjectThemeCoverImageUpdatedAt = 'project___theme___coverImage___updatedAt',
  ProjectThemeCoverImageTitle = 'project___theme___coverImage___title',
  ProjectThemeCoverImageDescription = 'project___theme___coverImage___description',
  ProjectThemeCoverImageNodeLocale = 'project___theme___coverImage___node_locale',
  ProjectThemeCoverImageChildren = 'project___theme___coverImage___children',
  ProjectThemeFeaturedPhotos = 'project___theme___featuredPhotos',
  ProjectThemeFeaturedPhotosContentfulId = 'project___theme___featuredPhotos___contentful_id',
  ProjectThemeFeaturedPhotosId = 'project___theme___featuredPhotos___id',
  ProjectThemeFeaturedPhotosSpaceId = 'project___theme___featuredPhotos___spaceId',
  ProjectThemeFeaturedPhotosCreatedAt = 'project___theme___featuredPhotos___createdAt',
  ProjectThemeFeaturedPhotosUpdatedAt = 'project___theme___featuredPhotos___updatedAt',
  ProjectThemeFeaturedPhotosTitle = 'project___theme___featuredPhotos___title',
  ProjectThemeFeaturedPhotosDescription = 'project___theme___featuredPhotos___description',
  ProjectThemeFeaturedPhotosNodeLocale = 'project___theme___featuredPhotos___node_locale',
  ProjectThemeFeaturedPhotosChildren = 'project___theme___featuredPhotos___children',
  ProjectThemeProject = 'project___theme___project',
  ProjectThemeProjectContentfulId = 'project___theme___project___contentful_id',
  ProjectThemeProjectId = 'project___theme___project___id',
  ProjectThemeProjectNodeLocale = 'project___theme___project___node_locale',
  ProjectThemeProjectTitle = 'project___theme___project___title',
  ProjectThemeProjectSlug = 'project___theme___project___slug',
  ProjectThemeProjectPhotos = 'project___theme___project___photos',
  ProjectThemeProjectSpaceId = 'project___theme___project___spaceId',
  ProjectThemeProjectCreatedAt = 'project___theme___project___createdAt',
  ProjectThemeProjectUpdatedAt = 'project___theme___project___updatedAt',
  ProjectThemeProjectHomepageFeatured = 'project___theme___project___homepage___featured',
  ProjectThemeProjectHomepageLatestWork = 'project___theme___project___homepage___latest_work',
  ProjectThemeProjectChildren = 'project___theme___project___children',
  ProjectThemeHomepageFeatured = 'project___theme___homepage___featured',
  ProjectThemeHomepageFeaturedContentfulId = 'project___theme___homepage___featured___contentful_id',
  ProjectThemeHomepageFeaturedId = 'project___theme___homepage___featured___id',
  ProjectThemeHomepageFeaturedNodeLocale = 'project___theme___homepage___featured___node_locale',
  ProjectThemeHomepageFeaturedThemes = 'project___theme___homepage___featured___themes',
  ProjectThemeHomepageFeaturedProjects = 'project___theme___homepage___featured___projects',
  ProjectThemeHomepageFeaturedSpaceId = 'project___theme___homepage___featured___spaceId',
  ProjectThemeHomepageFeaturedCreatedAt = 'project___theme___homepage___featured___createdAt',
  ProjectThemeHomepageFeaturedUpdatedAt = 'project___theme___homepage___featured___updatedAt',
  ProjectThemeHomepageFeaturedChildren = 'project___theme___homepage___featured___children',
  ProjectThemeSpaceId = 'project___theme___spaceId',
  ProjectThemeCreatedAt = 'project___theme___createdAt',
  ProjectThemeUpdatedAt = 'project___theme___updatedAt',
  ProjectThemeSysType = 'project___theme___sys___type',
  ProjectThemeSysRevision = 'project___theme___sys___revision',
  ProjectThemeParentId = 'project___theme___parent___id',
  ProjectThemeParentChildren = 'project___theme___parent___children',
  ProjectThemeChildren = 'project___theme___children',
  ProjectThemeChildrenId = 'project___theme___children___id',
  ProjectThemeChildrenChildren = 'project___theme___children___children',
  ProjectThemeInternalContent = 'project___theme___internal___content',
  ProjectThemeInternalContentDigest = 'project___theme___internal___contentDigest',
  ProjectThemeInternalDescription = 'project___theme___internal___description',
  ProjectThemeInternalFieldOwners = 'project___theme___internal___fieldOwners',
  ProjectThemeInternalIgnoreType = 'project___theme___internal___ignoreType',
  ProjectThemeInternalMediaType = 'project___theme___internal___mediaType',
  ProjectThemeInternalOwner = 'project___theme___internal___owner',
  ProjectThemeInternalType = 'project___theme___internal___type',
  ProjectCoverImageContentfulId = 'project___coverImage___contentful_id',
  ProjectCoverImageId = 'project___coverImage___id',
  ProjectCoverImageSpaceId = 'project___coverImage___spaceId',
  ProjectCoverImageCreatedAt = 'project___coverImage___createdAt',
  ProjectCoverImageUpdatedAt = 'project___coverImage___updatedAt',
  ProjectCoverImageFileUrl = 'project___coverImage___file___url',
  ProjectCoverImageFileFileName = 'project___coverImage___file___fileName',
  ProjectCoverImageFileContentType = 'project___coverImage___file___contentType',
  ProjectCoverImageTitle = 'project___coverImage___title',
  ProjectCoverImageDescription = 'project___coverImage___description',
  ProjectCoverImageNodeLocale = 'project___coverImage___node_locale',
  ProjectCoverImageSysType = 'project___coverImage___sys___type',
  ProjectCoverImageSysRevision = 'project___coverImage___sys___revision',
  ProjectCoverImageLocalFileSourceInstanceName = 'project___coverImage___localFile___sourceInstanceName',
  ProjectCoverImageLocalFileAbsolutePath = 'project___coverImage___localFile___absolutePath',
  ProjectCoverImageLocalFileRelativePath = 'project___coverImage___localFile___relativePath',
  ProjectCoverImageLocalFileExtension = 'project___coverImage___localFile___extension',
  ProjectCoverImageLocalFileSize = 'project___coverImage___localFile___size',
  ProjectCoverImageLocalFilePrettySize = 'project___coverImage___localFile___prettySize',
  ProjectCoverImageLocalFileModifiedTime = 'project___coverImage___localFile___modifiedTime',
  ProjectCoverImageLocalFileAccessTime = 'project___coverImage___localFile___accessTime',
  ProjectCoverImageLocalFileChangeTime = 'project___coverImage___localFile___changeTime',
  ProjectCoverImageLocalFileBirthTime = 'project___coverImage___localFile___birthTime',
  ProjectCoverImageLocalFileRoot = 'project___coverImage___localFile___root',
  ProjectCoverImageLocalFileDir = 'project___coverImage___localFile___dir',
  ProjectCoverImageLocalFileBase = 'project___coverImage___localFile___base',
  ProjectCoverImageLocalFileExt = 'project___coverImage___localFile___ext',
  ProjectCoverImageLocalFileName = 'project___coverImage___localFile___name',
  ProjectCoverImageLocalFileRelativeDirectory = 'project___coverImage___localFile___relativeDirectory',
  ProjectCoverImageLocalFileDev = 'project___coverImage___localFile___dev',
  ProjectCoverImageLocalFileMode = 'project___coverImage___localFile___mode',
  ProjectCoverImageLocalFileNlink = 'project___coverImage___localFile___nlink',
  ProjectCoverImageLocalFileUid = 'project___coverImage___localFile___uid',
  ProjectCoverImageLocalFileGid = 'project___coverImage___localFile___gid',
  ProjectCoverImageLocalFileRdev = 'project___coverImage___localFile___rdev',
  ProjectCoverImageLocalFileIno = 'project___coverImage___localFile___ino',
  ProjectCoverImageLocalFileAtimeMs = 'project___coverImage___localFile___atimeMs',
  ProjectCoverImageLocalFileMtimeMs = 'project___coverImage___localFile___mtimeMs',
  ProjectCoverImageLocalFileCtimeMs = 'project___coverImage___localFile___ctimeMs',
  ProjectCoverImageLocalFileAtime = 'project___coverImage___localFile___atime',
  ProjectCoverImageLocalFileMtime = 'project___coverImage___localFile___mtime',
  ProjectCoverImageLocalFileCtime = 'project___coverImage___localFile___ctime',
  ProjectCoverImageLocalFileBirthtime = 'project___coverImage___localFile___birthtime',
  ProjectCoverImageLocalFileBirthtimeMs = 'project___coverImage___localFile___birthtimeMs',
  ProjectCoverImageLocalFileBlksize = 'project___coverImage___localFile___blksize',
  ProjectCoverImageLocalFileBlocks = 'project___coverImage___localFile___blocks',
  ProjectCoverImageLocalFileUrl = 'project___coverImage___localFile___url',
  ProjectCoverImageLocalFilePublicUrl = 'project___coverImage___localFile___publicURL',
  ProjectCoverImageLocalFileId = 'project___coverImage___localFile___id',
  ProjectCoverImageLocalFileChildren = 'project___coverImage___localFile___children',
  ProjectCoverImageFixedBase64 = 'project___coverImage___fixed___base64',
  ProjectCoverImageFixedTracedSvg = 'project___coverImage___fixed___tracedSVG',
  ProjectCoverImageFixedAspectRatio = 'project___coverImage___fixed___aspectRatio',
  ProjectCoverImageFixedWidth = 'project___coverImage___fixed___width',
  ProjectCoverImageFixedHeight = 'project___coverImage___fixed___height',
  ProjectCoverImageFixedSrc = 'project___coverImage___fixed___src',
  ProjectCoverImageFixedSrcSet = 'project___coverImage___fixed___srcSet',
  ProjectCoverImageFixedSrcWebp = 'project___coverImage___fixed___srcWebp',
  ProjectCoverImageFixedSrcSetWebp = 'project___coverImage___fixed___srcSetWebp',
  ProjectCoverImageResolutionsBase64 = 'project___coverImage___resolutions___base64',
  ProjectCoverImageResolutionsTracedSvg = 'project___coverImage___resolutions___tracedSVG',
  ProjectCoverImageResolutionsAspectRatio = 'project___coverImage___resolutions___aspectRatio',
  ProjectCoverImageResolutionsWidth = 'project___coverImage___resolutions___width',
  ProjectCoverImageResolutionsHeight = 'project___coverImage___resolutions___height',
  ProjectCoverImageResolutionsSrc = 'project___coverImage___resolutions___src',
  ProjectCoverImageResolutionsSrcSet = 'project___coverImage___resolutions___srcSet',
  ProjectCoverImageResolutionsSrcWebp = 'project___coverImage___resolutions___srcWebp',
  ProjectCoverImageResolutionsSrcSetWebp = 'project___coverImage___resolutions___srcSetWebp',
  ProjectCoverImageFluidBase64 = 'project___coverImage___fluid___base64',
  ProjectCoverImageFluidTracedSvg = 'project___coverImage___fluid___tracedSVG',
  ProjectCoverImageFluidAspectRatio = 'project___coverImage___fluid___aspectRatio',
  ProjectCoverImageFluidSrc = 'project___coverImage___fluid___src',
  ProjectCoverImageFluidSrcSet = 'project___coverImage___fluid___srcSet',
  ProjectCoverImageFluidSrcWebp = 'project___coverImage___fluid___srcWebp',
  ProjectCoverImageFluidSrcSetWebp = 'project___coverImage___fluid___srcSetWebp',
  ProjectCoverImageFluidSizes = 'project___coverImage___fluid___sizes',
  ProjectCoverImageSizesBase64 = 'project___coverImage___sizes___base64',
  ProjectCoverImageSizesTracedSvg = 'project___coverImage___sizes___tracedSVG',
  ProjectCoverImageSizesAspectRatio = 'project___coverImage___sizes___aspectRatio',
  ProjectCoverImageSizesSrc = 'project___coverImage___sizes___src',
  ProjectCoverImageSizesSrcSet = 'project___coverImage___sizes___srcSet',
  ProjectCoverImageSizesSrcWebp = 'project___coverImage___sizes___srcWebp',
  ProjectCoverImageSizesSrcSetWebp = 'project___coverImage___sizes___srcSetWebp',
  ProjectCoverImageSizesSizes = 'project___coverImage___sizes___sizes',
  ProjectCoverImageResizeBase64 = 'project___coverImage___resize___base64',
  ProjectCoverImageResizeTracedSvg = 'project___coverImage___resize___tracedSVG',
  ProjectCoverImageResizeSrc = 'project___coverImage___resize___src',
  ProjectCoverImageResizeWidth = 'project___coverImage___resize___width',
  ProjectCoverImageResizeHeight = 'project___coverImage___resize___height',
  ProjectCoverImageResizeAspectRatio = 'project___coverImage___resize___aspectRatio',
  ProjectCoverImageParentId = 'project___coverImage___parent___id',
  ProjectCoverImageParentChildren = 'project___coverImage___parent___children',
  ProjectCoverImageChildren = 'project___coverImage___children',
  ProjectCoverImageChildrenId = 'project___coverImage___children___id',
  ProjectCoverImageChildrenChildren = 'project___coverImage___children___children',
  ProjectCoverImageInternalContent = 'project___coverImage___internal___content',
  ProjectCoverImageInternalContentDigest = 'project___coverImage___internal___contentDigest',
  ProjectCoverImageInternalDescription = 'project___coverImage___internal___description',
  ProjectCoverImageInternalFieldOwners = 'project___coverImage___internal___fieldOwners',
  ProjectCoverImageInternalIgnoreType = 'project___coverImage___internal___ignoreType',
  ProjectCoverImageInternalMediaType = 'project___coverImage___internal___mediaType',
  ProjectCoverImageInternalOwner = 'project___coverImage___internal___owner',
  ProjectCoverImageInternalType = 'project___coverImage___internal___type',
  ProjectPhotos = 'project___photos',
  ProjectPhotosContentfulId = 'project___photos___contentful_id',
  ProjectPhotosId = 'project___photos___id',
  ProjectPhotosSpaceId = 'project___photos___spaceId',
  ProjectPhotosCreatedAt = 'project___photos___createdAt',
  ProjectPhotosUpdatedAt = 'project___photos___updatedAt',
  ProjectPhotosFileUrl = 'project___photos___file___url',
  ProjectPhotosFileFileName = 'project___photos___file___fileName',
  ProjectPhotosFileContentType = 'project___photos___file___contentType',
  ProjectPhotosTitle = 'project___photos___title',
  ProjectPhotosDescription = 'project___photos___description',
  ProjectPhotosNodeLocale = 'project___photos___node_locale',
  ProjectPhotosSysType = 'project___photos___sys___type',
  ProjectPhotosSysRevision = 'project___photos___sys___revision',
  ProjectPhotosLocalFileSourceInstanceName = 'project___photos___localFile___sourceInstanceName',
  ProjectPhotosLocalFileAbsolutePath = 'project___photos___localFile___absolutePath',
  ProjectPhotosLocalFileRelativePath = 'project___photos___localFile___relativePath',
  ProjectPhotosLocalFileExtension = 'project___photos___localFile___extension',
  ProjectPhotosLocalFileSize = 'project___photos___localFile___size',
  ProjectPhotosLocalFilePrettySize = 'project___photos___localFile___prettySize',
  ProjectPhotosLocalFileModifiedTime = 'project___photos___localFile___modifiedTime',
  ProjectPhotosLocalFileAccessTime = 'project___photos___localFile___accessTime',
  ProjectPhotosLocalFileChangeTime = 'project___photos___localFile___changeTime',
  ProjectPhotosLocalFileBirthTime = 'project___photos___localFile___birthTime',
  ProjectPhotosLocalFileRoot = 'project___photos___localFile___root',
  ProjectPhotosLocalFileDir = 'project___photos___localFile___dir',
  ProjectPhotosLocalFileBase = 'project___photos___localFile___base',
  ProjectPhotosLocalFileExt = 'project___photos___localFile___ext',
  ProjectPhotosLocalFileName = 'project___photos___localFile___name',
  ProjectPhotosLocalFileRelativeDirectory = 'project___photos___localFile___relativeDirectory',
  ProjectPhotosLocalFileDev = 'project___photos___localFile___dev',
  ProjectPhotosLocalFileMode = 'project___photos___localFile___mode',
  ProjectPhotosLocalFileNlink = 'project___photos___localFile___nlink',
  ProjectPhotosLocalFileUid = 'project___photos___localFile___uid',
  ProjectPhotosLocalFileGid = 'project___photos___localFile___gid',
  ProjectPhotosLocalFileRdev = 'project___photos___localFile___rdev',
  ProjectPhotosLocalFileIno = 'project___photos___localFile___ino',
  ProjectPhotosLocalFileAtimeMs = 'project___photos___localFile___atimeMs',
  ProjectPhotosLocalFileMtimeMs = 'project___photos___localFile___mtimeMs',
  ProjectPhotosLocalFileCtimeMs = 'project___photos___localFile___ctimeMs',
  ProjectPhotosLocalFileAtime = 'project___photos___localFile___atime',
  ProjectPhotosLocalFileMtime = 'project___photos___localFile___mtime',
  ProjectPhotosLocalFileCtime = 'project___photos___localFile___ctime',
  ProjectPhotosLocalFileBirthtime = 'project___photos___localFile___birthtime',
  ProjectPhotosLocalFileBirthtimeMs = 'project___photos___localFile___birthtimeMs',
  ProjectPhotosLocalFileBlksize = 'project___photos___localFile___blksize',
  ProjectPhotosLocalFileBlocks = 'project___photos___localFile___blocks',
  ProjectPhotosLocalFileUrl = 'project___photos___localFile___url',
  ProjectPhotosLocalFilePublicUrl = 'project___photos___localFile___publicURL',
  ProjectPhotosLocalFileId = 'project___photos___localFile___id',
  ProjectPhotosLocalFileChildren = 'project___photos___localFile___children',
  ProjectPhotosFixedBase64 = 'project___photos___fixed___base64',
  ProjectPhotosFixedTracedSvg = 'project___photos___fixed___tracedSVG',
  ProjectPhotosFixedAspectRatio = 'project___photos___fixed___aspectRatio',
  ProjectPhotosFixedWidth = 'project___photos___fixed___width',
  ProjectPhotosFixedHeight = 'project___photos___fixed___height',
  ProjectPhotosFixedSrc = 'project___photos___fixed___src',
  ProjectPhotosFixedSrcSet = 'project___photos___fixed___srcSet',
  ProjectPhotosFixedSrcWebp = 'project___photos___fixed___srcWebp',
  ProjectPhotosFixedSrcSetWebp = 'project___photos___fixed___srcSetWebp',
  ProjectPhotosResolutionsBase64 = 'project___photos___resolutions___base64',
  ProjectPhotosResolutionsTracedSvg = 'project___photos___resolutions___tracedSVG',
  ProjectPhotosResolutionsAspectRatio = 'project___photos___resolutions___aspectRatio',
  ProjectPhotosResolutionsWidth = 'project___photos___resolutions___width',
  ProjectPhotosResolutionsHeight = 'project___photos___resolutions___height',
  ProjectPhotosResolutionsSrc = 'project___photos___resolutions___src',
  ProjectPhotosResolutionsSrcSet = 'project___photos___resolutions___srcSet',
  ProjectPhotosResolutionsSrcWebp = 'project___photos___resolutions___srcWebp',
  ProjectPhotosResolutionsSrcSetWebp = 'project___photos___resolutions___srcSetWebp',
  ProjectPhotosFluidBase64 = 'project___photos___fluid___base64',
  ProjectPhotosFluidTracedSvg = 'project___photos___fluid___tracedSVG',
  ProjectPhotosFluidAspectRatio = 'project___photos___fluid___aspectRatio',
  ProjectPhotosFluidSrc = 'project___photos___fluid___src',
  ProjectPhotosFluidSrcSet = 'project___photos___fluid___srcSet',
  ProjectPhotosFluidSrcWebp = 'project___photos___fluid___srcWebp',
  ProjectPhotosFluidSrcSetWebp = 'project___photos___fluid___srcSetWebp',
  ProjectPhotosFluidSizes = 'project___photos___fluid___sizes',
  ProjectPhotosSizesBase64 = 'project___photos___sizes___base64',
  ProjectPhotosSizesTracedSvg = 'project___photos___sizes___tracedSVG',
  ProjectPhotosSizesAspectRatio = 'project___photos___sizes___aspectRatio',
  ProjectPhotosSizesSrc = 'project___photos___sizes___src',
  ProjectPhotosSizesSrcSet = 'project___photos___sizes___srcSet',
  ProjectPhotosSizesSrcWebp = 'project___photos___sizes___srcWebp',
  ProjectPhotosSizesSrcSetWebp = 'project___photos___sizes___srcSetWebp',
  ProjectPhotosSizesSizes = 'project___photos___sizes___sizes',
  ProjectPhotosResizeBase64 = 'project___photos___resize___base64',
  ProjectPhotosResizeTracedSvg = 'project___photos___resize___tracedSVG',
  ProjectPhotosResizeSrc = 'project___photos___resize___src',
  ProjectPhotosResizeWidth = 'project___photos___resize___width',
  ProjectPhotosResizeHeight = 'project___photos___resize___height',
  ProjectPhotosResizeAspectRatio = 'project___photos___resize___aspectRatio',
  ProjectPhotosParentId = 'project___photos___parent___id',
  ProjectPhotosParentChildren = 'project___photos___parent___children',
  ProjectPhotosChildren = 'project___photos___children',
  ProjectPhotosChildrenId = 'project___photos___children___id',
  ProjectPhotosChildrenChildren = 'project___photos___children___children',
  ProjectPhotosInternalContent = 'project___photos___internal___content',
  ProjectPhotosInternalContentDigest = 'project___photos___internal___contentDigest',
  ProjectPhotosInternalDescription = 'project___photos___internal___description',
  ProjectPhotosInternalFieldOwners = 'project___photos___internal___fieldOwners',
  ProjectPhotosInternalIgnoreType = 'project___photos___internal___ignoreType',
  ProjectPhotosInternalMediaType = 'project___photos___internal___mediaType',
  ProjectPhotosInternalOwner = 'project___photos___internal___owner',
  ProjectPhotosInternalType = 'project___photos___internal___type',
  ProjectDescriptionId = 'project___description___id',
  ProjectDescriptionParentId = 'project___description___parent___id',
  ProjectDescriptionParentChildren = 'project___description___parent___children',
  ProjectDescriptionChildren = 'project___description___children',
  ProjectDescriptionChildrenId = 'project___description___children___id',
  ProjectDescriptionChildrenChildren = 'project___description___children___children',
  ProjectDescriptionInternalContent = 'project___description___internal___content',
  ProjectDescriptionInternalContentDigest = 'project___description___internal___contentDigest',
  ProjectDescriptionInternalDescription = 'project___description___internal___description',
  ProjectDescriptionInternalFieldOwners = 'project___description___internal___fieldOwners',
  ProjectDescriptionInternalIgnoreType = 'project___description___internal___ignoreType',
  ProjectDescriptionInternalMediaType = 'project___description___internal___mediaType',
  ProjectDescriptionInternalOwner = 'project___description___internal___owner',
  ProjectDescriptionInternalType = 'project___description___internal___type',
  ProjectDescriptionDescription = 'project___description___description',
  ProjectDescriptionSysType = 'project___description___sys___type',
  ProjectSpaceId = 'project___spaceId',
  ProjectCreatedAt = 'project___createdAt',
  ProjectUpdatedAt = 'project___updatedAt',
  ProjectSysType = 'project___sys___type',
  ProjectSysRevision = 'project___sys___revision',
  ProjectHomepageFeatured = 'project___homepage___featured',
  ProjectHomepageFeaturedContentfulId = 'project___homepage___featured___contentful_id',
  ProjectHomepageFeaturedId = 'project___homepage___featured___id',
  ProjectHomepageFeaturedNodeLocale = 'project___homepage___featured___node_locale',
  ProjectHomepageFeaturedThemes = 'project___homepage___featured___themes',
  ProjectHomepageFeaturedThemesContentfulId = 'project___homepage___featured___themes___contentful_id',
  ProjectHomepageFeaturedThemesId = 'project___homepage___featured___themes___id',
  ProjectHomepageFeaturedThemesNodeLocale = 'project___homepage___featured___themes___node_locale',
  ProjectHomepageFeaturedThemesTitle = 'project___homepage___featured___themes___title',
  ProjectHomepageFeaturedThemesSlug = 'project___homepage___featured___themes___slug',
  ProjectHomepageFeaturedThemesFeaturedPhotos = 'project___homepage___featured___themes___featuredPhotos',
  ProjectHomepageFeaturedThemesProject = 'project___homepage___featured___themes___project',
  ProjectHomepageFeaturedThemesHomepageFeatured = 'project___homepage___featured___themes___homepage___featured',
  ProjectHomepageFeaturedThemesSpaceId = 'project___homepage___featured___themes___spaceId',
  ProjectHomepageFeaturedThemesCreatedAt = 'project___homepage___featured___themes___createdAt',
  ProjectHomepageFeaturedThemesUpdatedAt = 'project___homepage___featured___themes___updatedAt',
  ProjectHomepageFeaturedThemesChildren = 'project___homepage___featured___themes___children',
  ProjectHomepageFeaturedProjects = 'project___homepage___featured___projects',
  ProjectHomepageFeaturedProjectsContentfulId = 'project___homepage___featured___projects___contentful_id',
  ProjectHomepageFeaturedProjectsId = 'project___homepage___featured___projects___id',
  ProjectHomepageFeaturedProjectsNodeLocale = 'project___homepage___featured___projects___node_locale',
  ProjectHomepageFeaturedProjectsTitle = 'project___homepage___featured___projects___title',
  ProjectHomepageFeaturedProjectsSlug = 'project___homepage___featured___projects___slug',
  ProjectHomepageFeaturedProjectsPhotos = 'project___homepage___featured___projects___photos',
  ProjectHomepageFeaturedProjectsSpaceId = 'project___homepage___featured___projects___spaceId',
  ProjectHomepageFeaturedProjectsCreatedAt = 'project___homepage___featured___projects___createdAt',
  ProjectHomepageFeaturedProjectsUpdatedAt = 'project___homepage___featured___projects___updatedAt',
  ProjectHomepageFeaturedProjectsHomepageFeatured = 'project___homepage___featured___projects___homepage___featured',
  ProjectHomepageFeaturedProjectsHomepageLatestWork = 'project___homepage___featured___projects___homepage___latest_work',
  ProjectHomepageFeaturedProjectsChildren = 'project___homepage___featured___projects___children',
  ProjectHomepageFeaturedSpaceId = 'project___homepage___featured___spaceId',
  ProjectHomepageFeaturedCreatedAt = 'project___homepage___featured___createdAt',
  ProjectHomepageFeaturedUpdatedAt = 'project___homepage___featured___updatedAt',
  ProjectHomepageFeaturedSysType = 'project___homepage___featured___sys___type',
  ProjectHomepageFeaturedSysRevision = 'project___homepage___featured___sys___revision',
  ProjectHomepageFeaturedParentId = 'project___homepage___featured___parent___id',
  ProjectHomepageFeaturedParentChildren = 'project___homepage___featured___parent___children',
  ProjectHomepageFeaturedChildren = 'project___homepage___featured___children',
  ProjectHomepageFeaturedChildrenId = 'project___homepage___featured___children___id',
  ProjectHomepageFeaturedChildrenChildren = 'project___homepage___featured___children___children',
  ProjectHomepageFeaturedInternalContent = 'project___homepage___featured___internal___content',
  ProjectHomepageFeaturedInternalContentDigest = 'project___homepage___featured___internal___contentDigest',
  ProjectHomepageFeaturedInternalDescription = 'project___homepage___featured___internal___description',
  ProjectHomepageFeaturedInternalFieldOwners = 'project___homepage___featured___internal___fieldOwners',
  ProjectHomepageFeaturedInternalIgnoreType = 'project___homepage___featured___internal___ignoreType',
  ProjectHomepageFeaturedInternalMediaType = 'project___homepage___featured___internal___mediaType',
  ProjectHomepageFeaturedInternalOwner = 'project___homepage___featured___internal___owner',
  ProjectHomepageFeaturedInternalType = 'project___homepage___featured___internal___type',
  ProjectHomepageLatestWork = 'project___homepage___latest_work',
  ProjectHomepageLatestWorkContentfulId = 'project___homepage___latest_work___contentful_id',
  ProjectHomepageLatestWorkId = 'project___homepage___latest_work___id',
  ProjectHomepageLatestWorkNodeLocale = 'project___homepage___latest_work___node_locale',
  ProjectHomepageLatestWorkProjectContentfulId = 'project___homepage___latest_work___project___contentful_id',
  ProjectHomepageLatestWorkProjectId = 'project___homepage___latest_work___project___id',
  ProjectHomepageLatestWorkProjectNodeLocale = 'project___homepage___latest_work___project___node_locale',
  ProjectHomepageLatestWorkProjectTitle = 'project___homepage___latest_work___project___title',
  ProjectHomepageLatestWorkProjectSlug = 'project___homepage___latest_work___project___slug',
  ProjectHomepageLatestWorkProjectPhotos = 'project___homepage___latest_work___project___photos',
  ProjectHomepageLatestWorkProjectSpaceId = 'project___homepage___latest_work___project___spaceId',
  ProjectHomepageLatestWorkProjectCreatedAt = 'project___homepage___latest_work___project___createdAt',
  ProjectHomepageLatestWorkProjectUpdatedAt = 'project___homepage___latest_work___project___updatedAt',
  ProjectHomepageLatestWorkProjectHomepageFeatured = 'project___homepage___latest_work___project___homepage___featured',
  ProjectHomepageLatestWorkProjectHomepageLatestWork = 'project___homepage___latest_work___project___homepage___latest_work',
  ProjectHomepageLatestWorkProjectChildren = 'project___homepage___latest_work___project___children',
  ProjectHomepageLatestWorkFeaturedPhotos = 'project___homepage___latest_work___featuredPhotos',
  ProjectHomepageLatestWorkFeaturedPhotosContentfulId = 'project___homepage___latest_work___featuredPhotos___contentful_id',
  ProjectHomepageLatestWorkFeaturedPhotosId = 'project___homepage___latest_work___featuredPhotos___id',
  ProjectHomepageLatestWorkFeaturedPhotosSpaceId = 'project___homepage___latest_work___featuredPhotos___spaceId',
  ProjectHomepageLatestWorkFeaturedPhotosCreatedAt = 'project___homepage___latest_work___featuredPhotos___createdAt',
  ProjectHomepageLatestWorkFeaturedPhotosUpdatedAt = 'project___homepage___latest_work___featuredPhotos___updatedAt',
  ProjectHomepageLatestWorkFeaturedPhotosTitle = 'project___homepage___latest_work___featuredPhotos___title',
  ProjectHomepageLatestWorkFeaturedPhotosDescription = 'project___homepage___latest_work___featuredPhotos___description',
  ProjectHomepageLatestWorkFeaturedPhotosNodeLocale = 'project___homepage___latest_work___featuredPhotos___node_locale',
  ProjectHomepageLatestWorkFeaturedPhotosChildren = 'project___homepage___latest_work___featuredPhotos___children',
  ProjectHomepageLatestWorkSpaceId = 'project___homepage___latest_work___spaceId',
  ProjectHomepageLatestWorkCreatedAt = 'project___homepage___latest_work___createdAt',
  ProjectHomepageLatestWorkUpdatedAt = 'project___homepage___latest_work___updatedAt',
  ProjectHomepageLatestWorkSysType = 'project___homepage___latest_work___sys___type',
  ProjectHomepageLatestWorkSysRevision = 'project___homepage___latest_work___sys___revision',
  ProjectHomepageLatestWorkParentId = 'project___homepage___latest_work___parent___id',
  ProjectHomepageLatestWorkParentChildren = 'project___homepage___latest_work___parent___children',
  ProjectHomepageLatestWorkChildren = 'project___homepage___latest_work___children',
  ProjectHomepageLatestWorkChildrenId = 'project___homepage___latest_work___children___id',
  ProjectHomepageLatestWorkChildrenChildren = 'project___homepage___latest_work___children___children',
  ProjectHomepageLatestWorkInternalContent = 'project___homepage___latest_work___internal___content',
  ProjectHomepageLatestWorkInternalContentDigest = 'project___homepage___latest_work___internal___contentDigest',
  ProjectHomepageLatestWorkInternalDescription = 'project___homepage___latest_work___internal___description',
  ProjectHomepageLatestWorkInternalFieldOwners = 'project___homepage___latest_work___internal___fieldOwners',
  ProjectHomepageLatestWorkInternalIgnoreType = 'project___homepage___latest_work___internal___ignoreType',
  ProjectHomepageLatestWorkInternalMediaType = 'project___homepage___latest_work___internal___mediaType',
  ProjectHomepageLatestWorkInternalOwner = 'project___homepage___latest_work___internal___owner',
  ProjectHomepageLatestWorkInternalType = 'project___homepage___latest_work___internal___type',
  ProjectParentId = 'project___parent___id',
  ProjectParentParentId = 'project___parent___parent___id',
  ProjectParentParentChildren = 'project___parent___parent___children',
  ProjectParentChildren = 'project___parent___children',
  ProjectParentChildrenId = 'project___parent___children___id',
  ProjectParentChildrenChildren = 'project___parent___children___children',
  ProjectParentInternalContent = 'project___parent___internal___content',
  ProjectParentInternalContentDigest = 'project___parent___internal___contentDigest',
  ProjectParentInternalDescription = 'project___parent___internal___description',
  ProjectParentInternalFieldOwners = 'project___parent___internal___fieldOwners',
  ProjectParentInternalIgnoreType = 'project___parent___internal___ignoreType',
  ProjectParentInternalMediaType = 'project___parent___internal___mediaType',
  ProjectParentInternalOwner = 'project___parent___internal___owner',
  ProjectParentInternalType = 'project___parent___internal___type',
  ProjectChildren = 'project___children',
  ProjectChildrenId = 'project___children___id',
  ProjectChildrenParentId = 'project___children___parent___id',
  ProjectChildrenParentChildren = 'project___children___parent___children',
  ProjectChildrenChildren = 'project___children___children',
  ProjectChildrenChildrenId = 'project___children___children___id',
  ProjectChildrenChildrenChildren = 'project___children___children___children',
  ProjectChildrenInternalContent = 'project___children___internal___content',
  ProjectChildrenInternalContentDigest = 'project___children___internal___contentDigest',
  ProjectChildrenInternalDescription = 'project___children___internal___description',
  ProjectChildrenInternalFieldOwners = 'project___children___internal___fieldOwners',
  ProjectChildrenInternalIgnoreType = 'project___children___internal___ignoreType',
  ProjectChildrenInternalMediaType = 'project___children___internal___mediaType',
  ProjectChildrenInternalOwner = 'project___children___internal___owner',
  ProjectChildrenInternalType = 'project___children___internal___type',
  ProjectInternalContent = 'project___internal___content',
  ProjectInternalContentDigest = 'project___internal___contentDigest',
  ProjectInternalDescription = 'project___internal___description',
  ProjectInternalFieldOwners = 'project___internal___fieldOwners',
  ProjectInternalIgnoreType = 'project___internal___ignoreType',
  ProjectInternalMediaType = 'project___internal___mediaType',
  ProjectInternalOwner = 'project___internal___owner',
  ProjectInternalType = 'project___internal___type',
  ProjectChildContentfulProjectDescriptionTextNodeId = 'project___childContentfulProjectDescriptionTextNode___id',
  ProjectChildContentfulProjectDescriptionTextNodeParentId = 'project___childContentfulProjectDescriptionTextNode___parent___id',
  ProjectChildContentfulProjectDescriptionTextNodeParentChildren = 'project___childContentfulProjectDescriptionTextNode___parent___children',
  ProjectChildContentfulProjectDescriptionTextNodeChildren = 'project___childContentfulProjectDescriptionTextNode___children',
  ProjectChildContentfulProjectDescriptionTextNodeChildrenId = 'project___childContentfulProjectDescriptionTextNode___children___id',
  ProjectChildContentfulProjectDescriptionTextNodeChildrenChildren = 'project___childContentfulProjectDescriptionTextNode___children___children',
  ProjectChildContentfulProjectDescriptionTextNodeInternalContent = 'project___childContentfulProjectDescriptionTextNode___internal___content',
  ProjectChildContentfulProjectDescriptionTextNodeInternalContentDigest = 'project___childContentfulProjectDescriptionTextNode___internal___contentDigest',
  ProjectChildContentfulProjectDescriptionTextNodeInternalDescription = 'project___childContentfulProjectDescriptionTextNode___internal___description',
  ProjectChildContentfulProjectDescriptionTextNodeInternalFieldOwners = 'project___childContentfulProjectDescriptionTextNode___internal___fieldOwners',
  ProjectChildContentfulProjectDescriptionTextNodeInternalIgnoreType = 'project___childContentfulProjectDescriptionTextNode___internal___ignoreType',
  ProjectChildContentfulProjectDescriptionTextNodeInternalMediaType = 'project___childContentfulProjectDescriptionTextNode___internal___mediaType',
  ProjectChildContentfulProjectDescriptionTextNodeInternalOwner = 'project___childContentfulProjectDescriptionTextNode___internal___owner',
  ProjectChildContentfulProjectDescriptionTextNodeInternalType = 'project___childContentfulProjectDescriptionTextNode___internal___type',
  ProjectChildContentfulProjectDescriptionTextNodeDescription = 'project___childContentfulProjectDescriptionTextNode___description',
  ProjectChildContentfulProjectDescriptionTextNodeSysType = 'project___childContentfulProjectDescriptionTextNode___sys___type',
  HomepageFeatured = 'homepage___featured',
  HomepageFeaturedContentfulId = 'homepage___featured___contentful_id',
  HomepageFeaturedId = 'homepage___featured___id',
  HomepageFeaturedNodeLocale = 'homepage___featured___node_locale',
  HomepageFeaturedThemes = 'homepage___featured___themes',
  HomepageFeaturedThemesContentfulId = 'homepage___featured___themes___contentful_id',
  HomepageFeaturedThemesId = 'homepage___featured___themes___id',
  HomepageFeaturedThemesNodeLocale = 'homepage___featured___themes___node_locale',
  HomepageFeaturedThemesTitle = 'homepage___featured___themes___title',
  HomepageFeaturedThemesSlug = 'homepage___featured___themes___slug',
  HomepageFeaturedThemesCoverImageContentfulId = 'homepage___featured___themes___coverImage___contentful_id',
  HomepageFeaturedThemesCoverImageId = 'homepage___featured___themes___coverImage___id',
  HomepageFeaturedThemesCoverImageSpaceId = 'homepage___featured___themes___coverImage___spaceId',
  HomepageFeaturedThemesCoverImageCreatedAt = 'homepage___featured___themes___coverImage___createdAt',
  HomepageFeaturedThemesCoverImageUpdatedAt = 'homepage___featured___themes___coverImage___updatedAt',
  HomepageFeaturedThemesCoverImageTitle = 'homepage___featured___themes___coverImage___title',
  HomepageFeaturedThemesCoverImageDescription = 'homepage___featured___themes___coverImage___description',
  HomepageFeaturedThemesCoverImageNodeLocale = 'homepage___featured___themes___coverImage___node_locale',
  HomepageFeaturedThemesCoverImageChildren = 'homepage___featured___themes___coverImage___children',
  HomepageFeaturedThemesFeaturedPhotos = 'homepage___featured___themes___featuredPhotos',
  HomepageFeaturedThemesFeaturedPhotosContentfulId = 'homepage___featured___themes___featuredPhotos___contentful_id',
  HomepageFeaturedThemesFeaturedPhotosId = 'homepage___featured___themes___featuredPhotos___id',
  HomepageFeaturedThemesFeaturedPhotosSpaceId = 'homepage___featured___themes___featuredPhotos___spaceId',
  HomepageFeaturedThemesFeaturedPhotosCreatedAt = 'homepage___featured___themes___featuredPhotos___createdAt',
  HomepageFeaturedThemesFeaturedPhotosUpdatedAt = 'homepage___featured___themes___featuredPhotos___updatedAt',
  HomepageFeaturedThemesFeaturedPhotosTitle = 'homepage___featured___themes___featuredPhotos___title',
  HomepageFeaturedThemesFeaturedPhotosDescription = 'homepage___featured___themes___featuredPhotos___description',
  HomepageFeaturedThemesFeaturedPhotosNodeLocale = 'homepage___featured___themes___featuredPhotos___node_locale',
  HomepageFeaturedThemesFeaturedPhotosChildren = 'homepage___featured___themes___featuredPhotos___children',
  HomepageFeaturedThemesProject = 'homepage___featured___themes___project',
  HomepageFeaturedThemesProjectContentfulId = 'homepage___featured___themes___project___contentful_id',
  HomepageFeaturedThemesProjectId = 'homepage___featured___themes___project___id',
  HomepageFeaturedThemesProjectNodeLocale = 'homepage___featured___themes___project___node_locale',
  HomepageFeaturedThemesProjectTitle = 'homepage___featured___themes___project___title',
  HomepageFeaturedThemesProjectSlug = 'homepage___featured___themes___project___slug',
  HomepageFeaturedThemesProjectPhotos = 'homepage___featured___themes___project___photos',
  HomepageFeaturedThemesProjectSpaceId = 'homepage___featured___themes___project___spaceId',
  HomepageFeaturedThemesProjectCreatedAt = 'homepage___featured___themes___project___createdAt',
  HomepageFeaturedThemesProjectUpdatedAt = 'homepage___featured___themes___project___updatedAt',
  HomepageFeaturedThemesProjectHomepageFeatured = 'homepage___featured___themes___project___homepage___featured',
  HomepageFeaturedThemesProjectHomepageLatestWork = 'homepage___featured___themes___project___homepage___latest_work',
  HomepageFeaturedThemesProjectChildren = 'homepage___featured___themes___project___children',
  HomepageFeaturedThemesHomepageFeatured = 'homepage___featured___themes___homepage___featured',
  HomepageFeaturedThemesHomepageFeaturedContentfulId = 'homepage___featured___themes___homepage___featured___contentful_id',
  HomepageFeaturedThemesHomepageFeaturedId = 'homepage___featured___themes___homepage___featured___id',
  HomepageFeaturedThemesHomepageFeaturedNodeLocale = 'homepage___featured___themes___homepage___featured___node_locale',
  HomepageFeaturedThemesHomepageFeaturedThemes = 'homepage___featured___themes___homepage___featured___themes',
  HomepageFeaturedThemesHomepageFeaturedProjects = 'homepage___featured___themes___homepage___featured___projects',
  HomepageFeaturedThemesHomepageFeaturedSpaceId = 'homepage___featured___themes___homepage___featured___spaceId',
  HomepageFeaturedThemesHomepageFeaturedCreatedAt = 'homepage___featured___themes___homepage___featured___createdAt',
  HomepageFeaturedThemesHomepageFeaturedUpdatedAt = 'homepage___featured___themes___homepage___featured___updatedAt',
  HomepageFeaturedThemesHomepageFeaturedChildren = 'homepage___featured___themes___homepage___featured___children',
  HomepageFeaturedThemesSpaceId = 'homepage___featured___themes___spaceId',
  HomepageFeaturedThemesCreatedAt = 'homepage___featured___themes___createdAt',
  HomepageFeaturedThemesUpdatedAt = 'homepage___featured___themes___updatedAt',
  HomepageFeaturedThemesSysType = 'homepage___featured___themes___sys___type',
  HomepageFeaturedThemesSysRevision = 'homepage___featured___themes___sys___revision',
  HomepageFeaturedThemesParentId = 'homepage___featured___themes___parent___id',
  HomepageFeaturedThemesParentChildren = 'homepage___featured___themes___parent___children',
  HomepageFeaturedThemesChildren = 'homepage___featured___themes___children',
  HomepageFeaturedThemesChildrenId = 'homepage___featured___themes___children___id',
  HomepageFeaturedThemesChildrenChildren = 'homepage___featured___themes___children___children',
  HomepageFeaturedThemesInternalContent = 'homepage___featured___themes___internal___content',
  HomepageFeaturedThemesInternalContentDigest = 'homepage___featured___themes___internal___contentDigest',
  HomepageFeaturedThemesInternalDescription = 'homepage___featured___themes___internal___description',
  HomepageFeaturedThemesInternalFieldOwners = 'homepage___featured___themes___internal___fieldOwners',
  HomepageFeaturedThemesInternalIgnoreType = 'homepage___featured___themes___internal___ignoreType',
  HomepageFeaturedThemesInternalMediaType = 'homepage___featured___themes___internal___mediaType',
  HomepageFeaturedThemesInternalOwner = 'homepage___featured___themes___internal___owner',
  HomepageFeaturedThemesInternalType = 'homepage___featured___themes___internal___type',
  HomepageFeaturedProjects = 'homepage___featured___projects',
  HomepageFeaturedProjectsContentfulId = 'homepage___featured___projects___contentful_id',
  HomepageFeaturedProjectsId = 'homepage___featured___projects___id',
  HomepageFeaturedProjectsNodeLocale = 'homepage___featured___projects___node_locale',
  HomepageFeaturedProjectsTitle = 'homepage___featured___projects___title',
  HomepageFeaturedProjectsSlug = 'homepage___featured___projects___slug',
  HomepageFeaturedProjectsThemeContentfulId = 'homepage___featured___projects___theme___contentful_id',
  HomepageFeaturedProjectsThemeId = 'homepage___featured___projects___theme___id',
  HomepageFeaturedProjectsThemeNodeLocale = 'homepage___featured___projects___theme___node_locale',
  HomepageFeaturedProjectsThemeTitle = 'homepage___featured___projects___theme___title',
  HomepageFeaturedProjectsThemeSlug = 'homepage___featured___projects___theme___slug',
  HomepageFeaturedProjectsThemeFeaturedPhotos = 'homepage___featured___projects___theme___featuredPhotos',
  HomepageFeaturedProjectsThemeProject = 'homepage___featured___projects___theme___project',
  HomepageFeaturedProjectsThemeHomepageFeatured = 'homepage___featured___projects___theme___homepage___featured',
  HomepageFeaturedProjectsThemeSpaceId = 'homepage___featured___projects___theme___spaceId',
  HomepageFeaturedProjectsThemeCreatedAt = 'homepage___featured___projects___theme___createdAt',
  HomepageFeaturedProjectsThemeUpdatedAt = 'homepage___featured___projects___theme___updatedAt',
  HomepageFeaturedProjectsThemeChildren = 'homepage___featured___projects___theme___children',
  HomepageFeaturedProjectsCoverImageContentfulId = 'homepage___featured___projects___coverImage___contentful_id',
  HomepageFeaturedProjectsCoverImageId = 'homepage___featured___projects___coverImage___id',
  HomepageFeaturedProjectsCoverImageSpaceId = 'homepage___featured___projects___coverImage___spaceId',
  HomepageFeaturedProjectsCoverImageCreatedAt = 'homepage___featured___projects___coverImage___createdAt',
  HomepageFeaturedProjectsCoverImageUpdatedAt = 'homepage___featured___projects___coverImage___updatedAt',
  HomepageFeaturedProjectsCoverImageTitle = 'homepage___featured___projects___coverImage___title',
  HomepageFeaturedProjectsCoverImageDescription = 'homepage___featured___projects___coverImage___description',
  HomepageFeaturedProjectsCoverImageNodeLocale = 'homepage___featured___projects___coverImage___node_locale',
  HomepageFeaturedProjectsCoverImageChildren = 'homepage___featured___projects___coverImage___children',
  HomepageFeaturedProjectsPhotos = 'homepage___featured___projects___photos',
  HomepageFeaturedProjectsPhotosContentfulId = 'homepage___featured___projects___photos___contentful_id',
  HomepageFeaturedProjectsPhotosId = 'homepage___featured___projects___photos___id',
  HomepageFeaturedProjectsPhotosSpaceId = 'homepage___featured___projects___photos___spaceId',
  HomepageFeaturedProjectsPhotosCreatedAt = 'homepage___featured___projects___photos___createdAt',
  HomepageFeaturedProjectsPhotosUpdatedAt = 'homepage___featured___projects___photos___updatedAt',
  HomepageFeaturedProjectsPhotosTitle = 'homepage___featured___projects___photos___title',
  HomepageFeaturedProjectsPhotosDescription = 'homepage___featured___projects___photos___description',
  HomepageFeaturedProjectsPhotosNodeLocale = 'homepage___featured___projects___photos___node_locale',
  HomepageFeaturedProjectsPhotosChildren = 'homepage___featured___projects___photos___children',
  HomepageFeaturedProjectsDescriptionId = 'homepage___featured___projects___description___id',
  HomepageFeaturedProjectsDescriptionChildren = 'homepage___featured___projects___description___children',
  HomepageFeaturedProjectsDescriptionDescription = 'homepage___featured___projects___description___description',
  HomepageFeaturedProjectsSpaceId = 'homepage___featured___projects___spaceId',
  HomepageFeaturedProjectsCreatedAt = 'homepage___featured___projects___createdAt',
  HomepageFeaturedProjectsUpdatedAt = 'homepage___featured___projects___updatedAt',
  HomepageFeaturedProjectsSysType = 'homepage___featured___projects___sys___type',
  HomepageFeaturedProjectsSysRevision = 'homepage___featured___projects___sys___revision',
  HomepageFeaturedProjectsHomepageFeatured = 'homepage___featured___projects___homepage___featured',
  HomepageFeaturedProjectsHomepageFeaturedContentfulId = 'homepage___featured___projects___homepage___featured___contentful_id',
  HomepageFeaturedProjectsHomepageFeaturedId = 'homepage___featured___projects___homepage___featured___id',
  HomepageFeaturedProjectsHomepageFeaturedNodeLocale = 'homepage___featured___projects___homepage___featured___node_locale',
  HomepageFeaturedProjectsHomepageFeaturedThemes = 'homepage___featured___projects___homepage___featured___themes',
  HomepageFeaturedProjectsHomepageFeaturedProjects = 'homepage___featured___projects___homepage___featured___projects',
  HomepageFeaturedProjectsHomepageFeaturedSpaceId = 'homepage___featured___projects___homepage___featured___spaceId',
  HomepageFeaturedProjectsHomepageFeaturedCreatedAt = 'homepage___featured___projects___homepage___featured___createdAt',
  HomepageFeaturedProjectsHomepageFeaturedUpdatedAt = 'homepage___featured___projects___homepage___featured___updatedAt',
  HomepageFeaturedProjectsHomepageFeaturedChildren = 'homepage___featured___projects___homepage___featured___children',
  HomepageFeaturedProjectsHomepageLatestWork = 'homepage___featured___projects___homepage___latest_work',
  HomepageFeaturedProjectsHomepageLatestWorkContentfulId = 'homepage___featured___projects___homepage___latest_work___contentful_id',
  HomepageFeaturedProjectsHomepageLatestWorkId = 'homepage___featured___projects___homepage___latest_work___id',
  HomepageFeaturedProjectsHomepageLatestWorkNodeLocale = 'homepage___featured___projects___homepage___latest_work___node_locale',
  HomepageFeaturedProjectsHomepageLatestWorkFeaturedPhotos = 'homepage___featured___projects___homepage___latest_work___featuredPhotos',
  HomepageFeaturedProjectsHomepageLatestWorkSpaceId = 'homepage___featured___projects___homepage___latest_work___spaceId',
  HomepageFeaturedProjectsHomepageLatestWorkCreatedAt = 'homepage___featured___projects___homepage___latest_work___createdAt',
  HomepageFeaturedProjectsHomepageLatestWorkUpdatedAt = 'homepage___featured___projects___homepage___latest_work___updatedAt',
  HomepageFeaturedProjectsHomepageLatestWorkChildren = 'homepage___featured___projects___homepage___latest_work___children',
  HomepageFeaturedProjectsParentId = 'homepage___featured___projects___parent___id',
  HomepageFeaturedProjectsParentChildren = 'homepage___featured___projects___parent___children',
  HomepageFeaturedProjectsChildren = 'homepage___featured___projects___children',
  HomepageFeaturedProjectsChildrenId = 'homepage___featured___projects___children___id',
  HomepageFeaturedProjectsChildrenChildren = 'homepage___featured___projects___children___children',
  HomepageFeaturedProjectsInternalContent = 'homepage___featured___projects___internal___content',
  HomepageFeaturedProjectsInternalContentDigest = 'homepage___featured___projects___internal___contentDigest',
  HomepageFeaturedProjectsInternalDescription = 'homepage___featured___projects___internal___description',
  HomepageFeaturedProjectsInternalFieldOwners = 'homepage___featured___projects___internal___fieldOwners',
  HomepageFeaturedProjectsInternalIgnoreType = 'homepage___featured___projects___internal___ignoreType',
  HomepageFeaturedProjectsInternalMediaType = 'homepage___featured___projects___internal___mediaType',
  HomepageFeaturedProjectsInternalOwner = 'homepage___featured___projects___internal___owner',
  HomepageFeaturedProjectsInternalType = 'homepage___featured___projects___internal___type',
  HomepageFeaturedProjectsChildContentfulProjectDescriptionTextNodeId = 'homepage___featured___projects___childContentfulProjectDescriptionTextNode___id',
  HomepageFeaturedProjectsChildContentfulProjectDescriptionTextNodeChildren = 'homepage___featured___projects___childContentfulProjectDescriptionTextNode___children',
  HomepageFeaturedProjectsChildContentfulProjectDescriptionTextNodeDescription = 'homepage___featured___projects___childContentfulProjectDescriptionTextNode___description',
  HomepageFeaturedSpaceId = 'homepage___featured___spaceId',
  HomepageFeaturedCreatedAt = 'homepage___featured___createdAt',
  HomepageFeaturedUpdatedAt = 'homepage___featured___updatedAt',
  HomepageFeaturedSysType = 'homepage___featured___sys___type',
  HomepageFeaturedSysRevision = 'homepage___featured___sys___revision',
  HomepageFeaturedParentId = 'homepage___featured___parent___id',
  HomepageFeaturedParentParentId = 'homepage___featured___parent___parent___id',
  HomepageFeaturedParentParentChildren = 'homepage___featured___parent___parent___children',
  HomepageFeaturedParentChildren = 'homepage___featured___parent___children',
  HomepageFeaturedParentChildrenId = 'homepage___featured___parent___children___id',
  HomepageFeaturedParentChildrenChildren = 'homepage___featured___parent___children___children',
  HomepageFeaturedParentInternalContent = 'homepage___featured___parent___internal___content',
  HomepageFeaturedParentInternalContentDigest = 'homepage___featured___parent___internal___contentDigest',
  HomepageFeaturedParentInternalDescription = 'homepage___featured___parent___internal___description',
  HomepageFeaturedParentInternalFieldOwners = 'homepage___featured___parent___internal___fieldOwners',
  HomepageFeaturedParentInternalIgnoreType = 'homepage___featured___parent___internal___ignoreType',
  HomepageFeaturedParentInternalMediaType = 'homepage___featured___parent___internal___mediaType',
  HomepageFeaturedParentInternalOwner = 'homepage___featured___parent___internal___owner',
  HomepageFeaturedParentInternalType = 'homepage___featured___parent___internal___type',
  HomepageFeaturedChildren = 'homepage___featured___children',
  HomepageFeaturedChildrenId = 'homepage___featured___children___id',
  HomepageFeaturedChildrenParentId = 'homepage___featured___children___parent___id',
  HomepageFeaturedChildrenParentChildren = 'homepage___featured___children___parent___children',
  HomepageFeaturedChildrenChildren = 'homepage___featured___children___children',
  HomepageFeaturedChildrenChildrenId = 'homepage___featured___children___children___id',
  HomepageFeaturedChildrenChildrenChildren = 'homepage___featured___children___children___children',
  HomepageFeaturedChildrenInternalContent = 'homepage___featured___children___internal___content',
  HomepageFeaturedChildrenInternalContentDigest = 'homepage___featured___children___internal___contentDigest',
  HomepageFeaturedChildrenInternalDescription = 'homepage___featured___children___internal___description',
  HomepageFeaturedChildrenInternalFieldOwners = 'homepage___featured___children___internal___fieldOwners',
  HomepageFeaturedChildrenInternalIgnoreType = 'homepage___featured___children___internal___ignoreType',
  HomepageFeaturedChildrenInternalMediaType = 'homepage___featured___children___internal___mediaType',
  HomepageFeaturedChildrenInternalOwner = 'homepage___featured___children___internal___owner',
  HomepageFeaturedChildrenInternalType = 'homepage___featured___children___internal___type',
  HomepageFeaturedInternalContent = 'homepage___featured___internal___content',
  HomepageFeaturedInternalContentDigest = 'homepage___featured___internal___contentDigest',
  HomepageFeaturedInternalDescription = 'homepage___featured___internal___description',
  HomepageFeaturedInternalFieldOwners = 'homepage___featured___internal___fieldOwners',
  HomepageFeaturedInternalIgnoreType = 'homepage___featured___internal___ignoreType',
  HomepageFeaturedInternalMediaType = 'homepage___featured___internal___mediaType',
  HomepageFeaturedInternalOwner = 'homepage___featured___internal___owner',
  HomepageFeaturedInternalType = 'homepage___featured___internal___type',
  SpaceId = 'spaceId',
  CreatedAt = 'createdAt',
  UpdatedAt = 'updatedAt',
  SysType = 'sys___type',
  SysRevision = 'sys___revision',
  SysContentTypeSysType = 'sys___contentType___sys___type',
  SysContentTypeSysLinkType = 'sys___contentType___sys___linkType',
  SysContentTypeSysId = 'sys___contentType___sys___id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
}

export type ContentfulThemeFilterInput = {
  contentful_id?: Maybe<StringQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  node_locale?: Maybe<StringQueryOperatorInput>
  title?: Maybe<StringQueryOperatorInput>
  slug?: Maybe<StringQueryOperatorInput>
  coverImage?: Maybe<ContentfulAssetFilterInput>
  featuredPhotos?: Maybe<ContentfulAssetFilterListInput>
  project?: Maybe<ContentfulProjectFilterListInput>
  homepage___featured?: Maybe<ContentfulHomepageFeaturedFilterListInput>
  spaceId?: Maybe<StringQueryOperatorInput>
  createdAt?: Maybe<DateQueryOperatorInput>
  updatedAt?: Maybe<DateQueryOperatorInput>
  sys?: Maybe<ContentfulThemeSysFilterInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type ContentfulThemeFilterListInput = {
  elemMatch?: Maybe<ContentfulThemeFilterInput>
}

export type ContentfulThemeGroupConnection = {
  __typename?: 'ContentfulThemeGroupConnection'
  totalCount: Scalars['Int']
  edges: Array<ContentfulThemeEdge>
  nodes: Array<ContentfulTheme>
  pageInfo: PageInfo
  field: Scalars['String']
  fieldValue?: Maybe<Scalars['String']>
}

export type ContentfulThemeSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulThemeFieldsEnum>>>
  order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type ContentfulThemeSys = {
  __typename?: 'ContentfulThemeSys'
  type?: Maybe<Scalars['String']>
  revision?: Maybe<Scalars['Int']>
  contentType?: Maybe<ContentfulThemeSysContentType>
}

export type ContentfulThemeSysContentType = {
  __typename?: 'ContentfulThemeSysContentType'
  sys?: Maybe<ContentfulThemeSysContentTypeSys>
}

export type ContentfulThemeSysContentTypeFilterInput = {
  sys?: Maybe<ContentfulThemeSysContentTypeSysFilterInput>
}

export type ContentfulThemeSysContentTypeSys = {
  __typename?: 'ContentfulThemeSysContentTypeSys'
  type?: Maybe<Scalars['String']>
  linkType?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['String']>
}

export type ContentfulThemeSysContentTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>
  linkType?: Maybe<StringQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
}

export type ContentfulThemeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>
  revision?: Maybe<IntQueryOperatorInput>
  contentType?: Maybe<ContentfulThemeSysContentTypeFilterInput>
}

export type DateQueryOperatorInput = {
  eq?: Maybe<Scalars['Date']>
  ne?: Maybe<Scalars['Date']>
  gt?: Maybe<Scalars['Date']>
  gte?: Maybe<Scalars['Date']>
  lt?: Maybe<Scalars['Date']>
  lte?: Maybe<Scalars['Date']>
  in?: Maybe<Array<Maybe<Scalars['Date']>>>
  nin?: Maybe<Array<Maybe<Scalars['Date']>>>
}

export type Directory = Node & {
  __typename?: 'Directory'
  sourceInstanceName: Scalars['String']
  absolutePath: Scalars['String']
  relativePath: Scalars['String']
  extension: Scalars['String']
  size: Scalars['Int']
  prettySize: Scalars['String']
  modifiedTime: Scalars['Date']
  accessTime: Scalars['Date']
  changeTime: Scalars['Date']
  birthTime: Scalars['Date']
  root: Scalars['String']
  dir: Scalars['String']
  base: Scalars['String']
  ext: Scalars['String']
  name: Scalars['String']
  relativeDirectory: Scalars['String']
  dev: Scalars['Int']
  mode: Scalars['Int']
  nlink: Scalars['Int']
  uid: Scalars['Int']
  gid: Scalars['Int']
  rdev: Scalars['Int']
  ino: Scalars['Float']
  atimeMs: Scalars['Float']
  mtimeMs: Scalars['Float']
  ctimeMs: Scalars['Float']
  atime: Scalars['Date']
  mtime: Scalars['Date']
  ctime: Scalars['Date']
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>
  blksize?: Maybe<Scalars['Int']>
  blocks?: Maybe<Scalars['Int']>
  id: Scalars['ID']
  parent?: Maybe<Node>
  children: Array<Node>
  internal: Internal
}

export type DirectoryModifiedTimeArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type DirectoryAccessTimeArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type DirectoryChangeTimeArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type DirectoryBirthTimeArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type DirectoryAtimeArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type DirectoryMtimeArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type DirectoryCtimeArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type DirectoryConnection = {
  __typename?: 'DirectoryConnection'
  totalCount: Scalars['Int']
  edges: Array<DirectoryEdge>
  nodes: Array<Directory>
  pageInfo: PageInfo
  distinct: Array<Scalars['String']>
  group: Array<DirectoryGroupConnection>
}

export type DirectoryConnectionDistinctArgs = {
  field: DirectoryFieldsEnum
}

export type DirectoryConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  field: DirectoryFieldsEnum
}

export type DirectoryEdge = {
  __typename?: 'DirectoryEdge'
  next?: Maybe<Directory>
  node: Directory
  previous?: Maybe<Directory>
}

export enum DirectoryFieldsEnum {
  SourceInstanceName = 'sourceInstanceName',
  AbsolutePath = 'absolutePath',
  RelativePath = 'relativePath',
  Extension = 'extension',
  Size = 'size',
  PrettySize = 'prettySize',
  ModifiedTime = 'modifiedTime',
  AccessTime = 'accessTime',
  ChangeTime = 'changeTime',
  BirthTime = 'birthTime',
  Root = 'root',
  Dir = 'dir',
  Base = 'base',
  Ext = 'ext',
  Name = 'name',
  RelativeDirectory = 'relativeDirectory',
  Dev = 'dev',
  Mode = 'mode',
  Nlink = 'nlink',
  Uid = 'uid',
  Gid = 'gid',
  Rdev = 'rdev',
  Ino = 'ino',
  AtimeMs = 'atimeMs',
  MtimeMs = 'mtimeMs',
  CtimeMs = 'ctimeMs',
  Atime = 'atime',
  Mtime = 'mtime',
  Ctime = 'ctime',
  Birthtime = 'birthtime',
  BirthtimeMs = 'birthtimeMs',
  Blksize = 'blksize',
  Blocks = 'blocks',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
}

export type DirectoryFilterInput = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>
  absolutePath?: Maybe<StringQueryOperatorInput>
  relativePath?: Maybe<StringQueryOperatorInput>
  extension?: Maybe<StringQueryOperatorInput>
  size?: Maybe<IntQueryOperatorInput>
  prettySize?: Maybe<StringQueryOperatorInput>
  modifiedTime?: Maybe<DateQueryOperatorInput>
  accessTime?: Maybe<DateQueryOperatorInput>
  changeTime?: Maybe<DateQueryOperatorInput>
  birthTime?: Maybe<DateQueryOperatorInput>
  root?: Maybe<StringQueryOperatorInput>
  dir?: Maybe<StringQueryOperatorInput>
  base?: Maybe<StringQueryOperatorInput>
  ext?: Maybe<StringQueryOperatorInput>
  name?: Maybe<StringQueryOperatorInput>
  relativeDirectory?: Maybe<StringQueryOperatorInput>
  dev?: Maybe<IntQueryOperatorInput>
  mode?: Maybe<IntQueryOperatorInput>
  nlink?: Maybe<IntQueryOperatorInput>
  uid?: Maybe<IntQueryOperatorInput>
  gid?: Maybe<IntQueryOperatorInput>
  rdev?: Maybe<IntQueryOperatorInput>
  ino?: Maybe<FloatQueryOperatorInput>
  atimeMs?: Maybe<FloatQueryOperatorInput>
  mtimeMs?: Maybe<FloatQueryOperatorInput>
  ctimeMs?: Maybe<FloatQueryOperatorInput>
  atime?: Maybe<DateQueryOperatorInput>
  mtime?: Maybe<DateQueryOperatorInput>
  ctime?: Maybe<DateQueryOperatorInput>
  birthtime?: Maybe<DateQueryOperatorInput>
  birthtimeMs?: Maybe<FloatQueryOperatorInput>
  blksize?: Maybe<IntQueryOperatorInput>
  blocks?: Maybe<IntQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type DirectoryGroupConnection = {
  __typename?: 'DirectoryGroupConnection'
  totalCount: Scalars['Int']
  edges: Array<DirectoryEdge>
  nodes: Array<Directory>
  pageInfo: PageInfo
  field: Scalars['String']
  fieldValue?: Maybe<Scalars['String']>
}

export type DirectorySortInput = {
  fields?: Maybe<Array<Maybe<DirectoryFieldsEnum>>>
  order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type DuotoneGradient = {
  highlight: Scalars['String']
  shadow: Scalars['String']
  opacity?: Maybe<Scalars['Int']>
}

export type File = Node & {
  __typename?: 'File'
  sourceInstanceName: Scalars['String']
  absolutePath: Scalars['String']
  relativePath: Scalars['String']
  extension: Scalars['String']
  size: Scalars['Int']
  prettySize: Scalars['String']
  modifiedTime: Scalars['Date']
  accessTime: Scalars['Date']
  changeTime: Scalars['Date']
  birthTime: Scalars['Date']
  root: Scalars['String']
  dir: Scalars['String']
  base: Scalars['String']
  ext: Scalars['String']
  name: Scalars['String']
  relativeDirectory: Scalars['String']
  dev: Scalars['Int']
  mode: Scalars['Int']
  nlink: Scalars['Int']
  uid: Scalars['Int']
  gid: Scalars['Int']
  rdev: Scalars['Int']
  ino: Scalars['Float']
  atimeMs: Scalars['Float']
  mtimeMs: Scalars['Float']
  ctimeMs: Scalars['Float']
  atime: Scalars['Date']
  mtime: Scalars['Date']
  ctime: Scalars['Date']
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>
  blksize?: Maybe<Scalars['Int']>
  blocks?: Maybe<Scalars['Int']>
  url?: Maybe<Scalars['String']>
  /** Copy file to static directory and return public url to it */
  publicURL?: Maybe<Scalars['String']>
  childImageSharp?: Maybe<ImageSharp>
  id: Scalars['ID']
  parent?: Maybe<Node>
  children: Array<Node>
  internal: Internal
}

export type FileModifiedTimeArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type FileAccessTimeArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type FileChangeTimeArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type FileBirthTimeArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type FileAtimeArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type FileMtimeArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type FileCtimeArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type FileConnection = {
  __typename?: 'FileConnection'
  totalCount: Scalars['Int']
  edges: Array<FileEdge>
  nodes: Array<File>
  pageInfo: PageInfo
  distinct: Array<Scalars['String']>
  group: Array<FileGroupConnection>
}

export type FileConnectionDistinctArgs = {
  field: FileFieldsEnum
}

export type FileConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  field: FileFieldsEnum
}

export type FileEdge = {
  __typename?: 'FileEdge'
  next?: Maybe<File>
  node: File
  previous?: Maybe<File>
}

export enum FileFieldsEnum {
  SourceInstanceName = 'sourceInstanceName',
  AbsolutePath = 'absolutePath',
  RelativePath = 'relativePath',
  Extension = 'extension',
  Size = 'size',
  PrettySize = 'prettySize',
  ModifiedTime = 'modifiedTime',
  AccessTime = 'accessTime',
  ChangeTime = 'changeTime',
  BirthTime = 'birthTime',
  Root = 'root',
  Dir = 'dir',
  Base = 'base',
  Ext = 'ext',
  Name = 'name',
  RelativeDirectory = 'relativeDirectory',
  Dev = 'dev',
  Mode = 'mode',
  Nlink = 'nlink',
  Uid = 'uid',
  Gid = 'gid',
  Rdev = 'rdev',
  Ino = 'ino',
  AtimeMs = 'atimeMs',
  MtimeMs = 'mtimeMs',
  CtimeMs = 'ctimeMs',
  Atime = 'atime',
  Mtime = 'mtime',
  Ctime = 'ctime',
  Birthtime = 'birthtime',
  BirthtimeMs = 'birthtimeMs',
  Blksize = 'blksize',
  Blocks = 'blocks',
  Url = 'url',
  PublicUrl = 'publicURL',
  ChildImageSharpFixedBase64 = 'childImageSharp___fixed___base64',
  ChildImageSharpFixedTracedSvg = 'childImageSharp___fixed___tracedSVG',
  ChildImageSharpFixedAspectRatio = 'childImageSharp___fixed___aspectRatio',
  ChildImageSharpFixedWidth = 'childImageSharp___fixed___width',
  ChildImageSharpFixedHeight = 'childImageSharp___fixed___height',
  ChildImageSharpFixedSrc = 'childImageSharp___fixed___src',
  ChildImageSharpFixedSrcSet = 'childImageSharp___fixed___srcSet',
  ChildImageSharpFixedSrcWebp = 'childImageSharp___fixed___srcWebp',
  ChildImageSharpFixedSrcSetWebp = 'childImageSharp___fixed___srcSetWebp',
  ChildImageSharpFixedOriginalName = 'childImageSharp___fixed___originalName',
  ChildImageSharpResolutionsBase64 = 'childImageSharp___resolutions___base64',
  ChildImageSharpResolutionsTracedSvg = 'childImageSharp___resolutions___tracedSVG',
  ChildImageSharpResolutionsAspectRatio = 'childImageSharp___resolutions___aspectRatio',
  ChildImageSharpResolutionsWidth = 'childImageSharp___resolutions___width',
  ChildImageSharpResolutionsHeight = 'childImageSharp___resolutions___height',
  ChildImageSharpResolutionsSrc = 'childImageSharp___resolutions___src',
  ChildImageSharpResolutionsSrcSet = 'childImageSharp___resolutions___srcSet',
  ChildImageSharpResolutionsSrcWebp = 'childImageSharp___resolutions___srcWebp',
  ChildImageSharpResolutionsSrcSetWebp = 'childImageSharp___resolutions___srcSetWebp',
  ChildImageSharpResolutionsOriginalName = 'childImageSharp___resolutions___originalName',
  ChildImageSharpFluidBase64 = 'childImageSharp___fluid___base64',
  ChildImageSharpFluidTracedSvg = 'childImageSharp___fluid___tracedSVG',
  ChildImageSharpFluidAspectRatio = 'childImageSharp___fluid___aspectRatio',
  ChildImageSharpFluidSrc = 'childImageSharp___fluid___src',
  ChildImageSharpFluidSrcSet = 'childImageSharp___fluid___srcSet',
  ChildImageSharpFluidSrcWebp = 'childImageSharp___fluid___srcWebp',
  ChildImageSharpFluidSrcSetWebp = 'childImageSharp___fluid___srcSetWebp',
  ChildImageSharpFluidSizes = 'childImageSharp___fluid___sizes',
  ChildImageSharpFluidOriginalImg = 'childImageSharp___fluid___originalImg',
  ChildImageSharpFluidOriginalName = 'childImageSharp___fluid___originalName',
  ChildImageSharpFluidPresentationWidth = 'childImageSharp___fluid___presentationWidth',
  ChildImageSharpFluidPresentationHeight = 'childImageSharp___fluid___presentationHeight',
  ChildImageSharpSizesBase64 = 'childImageSharp___sizes___base64',
  ChildImageSharpSizesTracedSvg = 'childImageSharp___sizes___tracedSVG',
  ChildImageSharpSizesAspectRatio = 'childImageSharp___sizes___aspectRatio',
  ChildImageSharpSizesSrc = 'childImageSharp___sizes___src',
  ChildImageSharpSizesSrcSet = 'childImageSharp___sizes___srcSet',
  ChildImageSharpSizesSrcWebp = 'childImageSharp___sizes___srcWebp',
  ChildImageSharpSizesSrcSetWebp = 'childImageSharp___sizes___srcSetWebp',
  ChildImageSharpSizesSizes = 'childImageSharp___sizes___sizes',
  ChildImageSharpSizesOriginalImg = 'childImageSharp___sizes___originalImg',
  ChildImageSharpSizesOriginalName = 'childImageSharp___sizes___originalName',
  ChildImageSharpSizesPresentationWidth = 'childImageSharp___sizes___presentationWidth',
  ChildImageSharpSizesPresentationHeight = 'childImageSharp___sizes___presentationHeight',
  ChildImageSharpGatsbyImageData = 'childImageSharp___gatsbyImageData',
  ChildImageSharpOriginalWidth = 'childImageSharp___original___width',
  ChildImageSharpOriginalHeight = 'childImageSharp___original___height',
  ChildImageSharpOriginalSrc = 'childImageSharp___original___src',
  ChildImageSharpResizeSrc = 'childImageSharp___resize___src',
  ChildImageSharpResizeTracedSvg = 'childImageSharp___resize___tracedSVG',
  ChildImageSharpResizeWidth = 'childImageSharp___resize___width',
  ChildImageSharpResizeHeight = 'childImageSharp___resize___height',
  ChildImageSharpResizeAspectRatio = 'childImageSharp___resize___aspectRatio',
  ChildImageSharpResizeOriginalName = 'childImageSharp___resize___originalName',
  ChildImageSharpId = 'childImageSharp___id',
  ChildImageSharpParentId = 'childImageSharp___parent___id',
  ChildImageSharpParentParentId = 'childImageSharp___parent___parent___id',
  ChildImageSharpParentParentChildren = 'childImageSharp___parent___parent___children',
  ChildImageSharpParentChildren = 'childImageSharp___parent___children',
  ChildImageSharpParentChildrenId = 'childImageSharp___parent___children___id',
  ChildImageSharpParentChildrenChildren = 'childImageSharp___parent___children___children',
  ChildImageSharpParentInternalContent = 'childImageSharp___parent___internal___content',
  ChildImageSharpParentInternalContentDigest = 'childImageSharp___parent___internal___contentDigest',
  ChildImageSharpParentInternalDescription = 'childImageSharp___parent___internal___description',
  ChildImageSharpParentInternalFieldOwners = 'childImageSharp___parent___internal___fieldOwners',
  ChildImageSharpParentInternalIgnoreType = 'childImageSharp___parent___internal___ignoreType',
  ChildImageSharpParentInternalMediaType = 'childImageSharp___parent___internal___mediaType',
  ChildImageSharpParentInternalOwner = 'childImageSharp___parent___internal___owner',
  ChildImageSharpParentInternalType = 'childImageSharp___parent___internal___type',
  ChildImageSharpChildren = 'childImageSharp___children',
  ChildImageSharpChildrenId = 'childImageSharp___children___id',
  ChildImageSharpChildrenParentId = 'childImageSharp___children___parent___id',
  ChildImageSharpChildrenParentChildren = 'childImageSharp___children___parent___children',
  ChildImageSharpChildrenChildren = 'childImageSharp___children___children',
  ChildImageSharpChildrenChildrenId = 'childImageSharp___children___children___id',
  ChildImageSharpChildrenChildrenChildren = 'childImageSharp___children___children___children',
  ChildImageSharpChildrenInternalContent = 'childImageSharp___children___internal___content',
  ChildImageSharpChildrenInternalContentDigest = 'childImageSharp___children___internal___contentDigest',
  ChildImageSharpChildrenInternalDescription = 'childImageSharp___children___internal___description',
  ChildImageSharpChildrenInternalFieldOwners = 'childImageSharp___children___internal___fieldOwners',
  ChildImageSharpChildrenInternalIgnoreType = 'childImageSharp___children___internal___ignoreType',
  ChildImageSharpChildrenInternalMediaType = 'childImageSharp___children___internal___mediaType',
  ChildImageSharpChildrenInternalOwner = 'childImageSharp___children___internal___owner',
  ChildImageSharpChildrenInternalType = 'childImageSharp___children___internal___type',
  ChildImageSharpInternalContent = 'childImageSharp___internal___content',
  ChildImageSharpInternalContentDigest = 'childImageSharp___internal___contentDigest',
  ChildImageSharpInternalDescription = 'childImageSharp___internal___description',
  ChildImageSharpInternalFieldOwners = 'childImageSharp___internal___fieldOwners',
  ChildImageSharpInternalIgnoreType = 'childImageSharp___internal___ignoreType',
  ChildImageSharpInternalMediaType = 'childImageSharp___internal___mediaType',
  ChildImageSharpInternalOwner = 'childImageSharp___internal___owner',
  ChildImageSharpInternalType = 'childImageSharp___internal___type',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
}

export type FileFilterInput = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>
  absolutePath?: Maybe<StringQueryOperatorInput>
  relativePath?: Maybe<StringQueryOperatorInput>
  extension?: Maybe<StringQueryOperatorInput>
  size?: Maybe<IntQueryOperatorInput>
  prettySize?: Maybe<StringQueryOperatorInput>
  modifiedTime?: Maybe<DateQueryOperatorInput>
  accessTime?: Maybe<DateQueryOperatorInput>
  changeTime?: Maybe<DateQueryOperatorInput>
  birthTime?: Maybe<DateQueryOperatorInput>
  root?: Maybe<StringQueryOperatorInput>
  dir?: Maybe<StringQueryOperatorInput>
  base?: Maybe<StringQueryOperatorInput>
  ext?: Maybe<StringQueryOperatorInput>
  name?: Maybe<StringQueryOperatorInput>
  relativeDirectory?: Maybe<StringQueryOperatorInput>
  dev?: Maybe<IntQueryOperatorInput>
  mode?: Maybe<IntQueryOperatorInput>
  nlink?: Maybe<IntQueryOperatorInput>
  uid?: Maybe<IntQueryOperatorInput>
  gid?: Maybe<IntQueryOperatorInput>
  rdev?: Maybe<IntQueryOperatorInput>
  ino?: Maybe<FloatQueryOperatorInput>
  atimeMs?: Maybe<FloatQueryOperatorInput>
  mtimeMs?: Maybe<FloatQueryOperatorInput>
  ctimeMs?: Maybe<FloatQueryOperatorInput>
  atime?: Maybe<DateQueryOperatorInput>
  mtime?: Maybe<DateQueryOperatorInput>
  ctime?: Maybe<DateQueryOperatorInput>
  birthtime?: Maybe<DateQueryOperatorInput>
  birthtimeMs?: Maybe<FloatQueryOperatorInput>
  blksize?: Maybe<IntQueryOperatorInput>
  blocks?: Maybe<IntQueryOperatorInput>
  url?: Maybe<StringQueryOperatorInput>
  publicURL?: Maybe<StringQueryOperatorInput>
  childImageSharp?: Maybe<ImageSharpFilterInput>
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type FileGroupConnection = {
  __typename?: 'FileGroupConnection'
  totalCount: Scalars['Int']
  edges: Array<FileEdge>
  nodes: Array<File>
  pageInfo: PageInfo
  field: Scalars['String']
  fieldValue?: Maybe<Scalars['String']>
}

export type FileSortInput = {
  fields?: Maybe<Array<Maybe<FileFieldsEnum>>>
  order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type FloatQueryOperatorInput = {
  eq?: Maybe<Scalars['Float']>
  ne?: Maybe<Scalars['Float']>
  gt?: Maybe<Scalars['Float']>
  gte?: Maybe<Scalars['Float']>
  lt?: Maybe<Scalars['Float']>
  lte?: Maybe<Scalars['Float']>
  in?: Maybe<Array<Maybe<Scalars['Float']>>>
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>
}

export enum ImageCropFocus {
  Center = 'CENTER',
  North = 'NORTH',
  Northeast = 'NORTHEAST',
  East = 'EAST',
  Southeast = 'SOUTHEAST',
  South = 'SOUTH',
  Southwest = 'SOUTHWEST',
  West = 'WEST',
  Northwest = 'NORTHWEST',
  Entropy = 'ENTROPY',
  Attention = 'ATTENTION',
}

export enum ImageFit {
  Cover = 'COVER',
  Contain = 'CONTAIN',
  Fill = 'FILL',
  Inside = 'INSIDE',
  Outside = 'OUTSIDE',
}

export enum ImageFormat {
  NoChange = 'NO_CHANGE',
  Auto = 'AUTO',
  Jpg = 'JPG',
  Png = 'PNG',
  Webp = 'WEBP',
}

export enum ImageLayout {
  Fixed = 'FIXED',
  Fluid = 'FLUID',
  Constrained = 'CONSTRAINED',
}

export enum ImagePlaceholder {
  DominantColor = 'DOMINANT_COLOR',
  TracedSvg = 'TRACED_SVG',
  Blurred = 'BLURRED',
  None = 'NONE',
}

export enum ImageResizingBehavior {
  NoChange = 'NO_CHANGE',
  /** Same as the default resizing, but adds padding so that the generated image has the specified dimensions. */
  Pad = 'PAD',
  /** Crop a part of the original image to match the specified size. */
  Crop = 'CROP',
  /**
   * Crop the image to the specified dimensions, if the original image is smaller
   * than these dimensions, then the image will be upscaled.
   */
  Fill = 'FILL',
  /** When used in association with the f parameter below, creates a thumbnail from the image based on a focus area. */
  Thumb = 'THUMB',
  /** Scale the image regardless of the original aspect ratio. */
  Scale = 'SCALE',
}

export type ImageSharp = Node & {
  __typename?: 'ImageSharp'
  fixed?: Maybe<ImageSharpFixed>
  /** @deprecated Resolutions was deprecated in Gatsby v2. It's been renamed to "fixed" https://example.com/write-docs-and-fix-this-example-link */
  resolutions?: Maybe<ImageSharpResolutions>
  fluid?: Maybe<ImageSharpFluid>
  /** @deprecated Sizes was deprecated in Gatsby v2. It's been renamed to "fluid" https://example.com/write-docs-and-fix-this-example-link */
  sizes?: Maybe<ImageSharpSizes>
  gatsbyImageData: Scalars['JSON']
  original?: Maybe<ImageSharpOriginal>
  resize?: Maybe<ImageSharpResize>
  id: Scalars['ID']
  parent?: Maybe<Node>
  children: Array<Node>
  internal: Internal
}

export type ImageSharpFixedArgs = {
  width?: Maybe<Scalars['Int']>
  height?: Maybe<Scalars['Int']>
  base64Width?: Maybe<Scalars['Int']>
  jpegProgressive?: Maybe<Scalars['Boolean']>
  pngCompressionSpeed?: Maybe<Scalars['Int']>
  grayscale?: Maybe<Scalars['Boolean']>
  duotone?: Maybe<DuotoneGradient>
  traceSVG?: Maybe<Potrace>
  quality?: Maybe<Scalars['Int']>
  jpegQuality?: Maybe<Scalars['Int']>
  pngQuality?: Maybe<Scalars['Int']>
  webpQuality?: Maybe<Scalars['Int']>
  toFormat?: Maybe<ImageFormat>
  toFormatBase64?: Maybe<ImageFormat>
  cropFocus?: Maybe<ImageCropFocus>
  fit?: Maybe<ImageFit>
  background?: Maybe<Scalars['String']>
  rotate?: Maybe<Scalars['Int']>
  trim?: Maybe<Scalars['Float']>
}

export type ImageSharpResolutionsArgs = {
  width?: Maybe<Scalars['Int']>
  height?: Maybe<Scalars['Int']>
  base64Width?: Maybe<Scalars['Int']>
  jpegProgressive?: Maybe<Scalars['Boolean']>
  pngCompressionSpeed?: Maybe<Scalars['Int']>
  grayscale?: Maybe<Scalars['Boolean']>
  duotone?: Maybe<DuotoneGradient>
  traceSVG?: Maybe<Potrace>
  quality?: Maybe<Scalars['Int']>
  jpegQuality?: Maybe<Scalars['Int']>
  pngQuality?: Maybe<Scalars['Int']>
  webpQuality?: Maybe<Scalars['Int']>
  toFormat?: Maybe<ImageFormat>
  toFormatBase64?: Maybe<ImageFormat>
  cropFocus?: Maybe<ImageCropFocus>
  fit?: Maybe<ImageFit>
  background?: Maybe<Scalars['String']>
  rotate?: Maybe<Scalars['Int']>
  trim?: Maybe<Scalars['Float']>
}

export type ImageSharpFluidArgs = {
  maxWidth?: Maybe<Scalars['Int']>
  maxHeight?: Maybe<Scalars['Int']>
  base64Width?: Maybe<Scalars['Int']>
  grayscale?: Maybe<Scalars['Boolean']>
  jpegProgressive?: Maybe<Scalars['Boolean']>
  pngCompressionSpeed?: Maybe<Scalars['Int']>
  duotone?: Maybe<DuotoneGradient>
  traceSVG?: Maybe<Potrace>
  quality?: Maybe<Scalars['Int']>
  jpegQuality?: Maybe<Scalars['Int']>
  pngQuality?: Maybe<Scalars['Int']>
  webpQuality?: Maybe<Scalars['Int']>
  toFormat?: Maybe<ImageFormat>
  toFormatBase64?: Maybe<ImageFormat>
  cropFocus?: Maybe<ImageCropFocus>
  fit?: Maybe<ImageFit>
  background?: Maybe<Scalars['String']>
  rotate?: Maybe<Scalars['Int']>
  trim?: Maybe<Scalars['Float']>
  sizes?: Maybe<Scalars['String']>
  srcSetBreakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>
}

export type ImageSharpSizesArgs = {
  maxWidth?: Maybe<Scalars['Int']>
  maxHeight?: Maybe<Scalars['Int']>
  base64Width?: Maybe<Scalars['Int']>
  grayscale?: Maybe<Scalars['Boolean']>
  jpegProgressive?: Maybe<Scalars['Boolean']>
  pngCompressionSpeed?: Maybe<Scalars['Int']>
  duotone?: Maybe<DuotoneGradient>
  traceSVG?: Maybe<Potrace>
  quality?: Maybe<Scalars['Int']>
  jpegQuality?: Maybe<Scalars['Int']>
  pngQuality?: Maybe<Scalars['Int']>
  webpQuality?: Maybe<Scalars['Int']>
  toFormat?: Maybe<ImageFormat>
  toFormatBase64?: Maybe<ImageFormat>
  cropFocus?: Maybe<ImageCropFocus>
  fit?: Maybe<ImageFit>
  background?: Maybe<Scalars['String']>
  rotate?: Maybe<Scalars['Int']>
  trim?: Maybe<Scalars['Float']>
  sizes?: Maybe<Scalars['String']>
  srcSetBreakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>
}

export type ImageSharpGatsbyImageDataArgs = {
  layout?: Maybe<ImageLayout>
  maxWidth?: Maybe<Scalars['Int']>
  maxHeight?: Maybe<Scalars['Int']>
  width?: Maybe<Scalars['Int']>
  height?: Maybe<Scalars['Int']>
  placeholder?: Maybe<ImagePlaceholder>
  blurredOptions?: Maybe<BlurredOptions>
  tracedSVGOptions?: Maybe<Potrace>
  formats?: Maybe<Array<Maybe<ImageFormat>>>
  outputPixelDensities?: Maybe<Array<Maybe<Scalars['Float']>>>
  sizes?: Maybe<Scalars['String']>
  quality?: Maybe<Scalars['Int']>
  jpgOptions?: Maybe<JpgOptions>
  pngOptions?: Maybe<PngOptions>
  webpOptions?: Maybe<WebPOptions>
  transformOptions?: Maybe<TransformOptions>
  background?: Maybe<Scalars['String']>
}

export type ImageSharpResizeArgs = {
  width?: Maybe<Scalars['Int']>
  height?: Maybe<Scalars['Int']>
  quality?: Maybe<Scalars['Int']>
  jpegQuality?: Maybe<Scalars['Int']>
  pngQuality?: Maybe<Scalars['Int']>
  webpQuality?: Maybe<Scalars['Int']>
  jpegProgressive?: Maybe<Scalars['Boolean']>
  pngCompressionLevel?: Maybe<Scalars['Int']>
  pngCompressionSpeed?: Maybe<Scalars['Int']>
  grayscale?: Maybe<Scalars['Boolean']>
  duotone?: Maybe<DuotoneGradient>
  base64?: Maybe<Scalars['Boolean']>
  traceSVG?: Maybe<Potrace>
  toFormat?: Maybe<ImageFormat>
  cropFocus?: Maybe<ImageCropFocus>
  fit?: Maybe<ImageFit>
  background?: Maybe<Scalars['String']>
  rotate?: Maybe<Scalars['Int']>
  trim?: Maybe<Scalars['Float']>
}

export type ImageSharpConnection = {
  __typename?: 'ImageSharpConnection'
  totalCount: Scalars['Int']
  edges: Array<ImageSharpEdge>
  nodes: Array<ImageSharp>
  pageInfo: PageInfo
  distinct: Array<Scalars['String']>
  group: Array<ImageSharpGroupConnection>
}

export type ImageSharpConnectionDistinctArgs = {
  field: ImageSharpFieldsEnum
}

export type ImageSharpConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  field: ImageSharpFieldsEnum
}

export type ImageSharpEdge = {
  __typename?: 'ImageSharpEdge'
  next?: Maybe<ImageSharp>
  node: ImageSharp
  previous?: Maybe<ImageSharp>
}

export enum ImageSharpFieldsEnum {
  FixedBase64 = 'fixed___base64',
  FixedTracedSvg = 'fixed___tracedSVG',
  FixedAspectRatio = 'fixed___aspectRatio',
  FixedWidth = 'fixed___width',
  FixedHeight = 'fixed___height',
  FixedSrc = 'fixed___src',
  FixedSrcSet = 'fixed___srcSet',
  FixedSrcWebp = 'fixed___srcWebp',
  FixedSrcSetWebp = 'fixed___srcSetWebp',
  FixedOriginalName = 'fixed___originalName',
  ResolutionsBase64 = 'resolutions___base64',
  ResolutionsTracedSvg = 'resolutions___tracedSVG',
  ResolutionsAspectRatio = 'resolutions___aspectRatio',
  ResolutionsWidth = 'resolutions___width',
  ResolutionsHeight = 'resolutions___height',
  ResolutionsSrc = 'resolutions___src',
  ResolutionsSrcSet = 'resolutions___srcSet',
  ResolutionsSrcWebp = 'resolutions___srcWebp',
  ResolutionsSrcSetWebp = 'resolutions___srcSetWebp',
  ResolutionsOriginalName = 'resolutions___originalName',
  FluidBase64 = 'fluid___base64',
  FluidTracedSvg = 'fluid___tracedSVG',
  FluidAspectRatio = 'fluid___aspectRatio',
  FluidSrc = 'fluid___src',
  FluidSrcSet = 'fluid___srcSet',
  FluidSrcWebp = 'fluid___srcWebp',
  FluidSrcSetWebp = 'fluid___srcSetWebp',
  FluidSizes = 'fluid___sizes',
  FluidOriginalImg = 'fluid___originalImg',
  FluidOriginalName = 'fluid___originalName',
  FluidPresentationWidth = 'fluid___presentationWidth',
  FluidPresentationHeight = 'fluid___presentationHeight',
  SizesBase64 = 'sizes___base64',
  SizesTracedSvg = 'sizes___tracedSVG',
  SizesAspectRatio = 'sizes___aspectRatio',
  SizesSrc = 'sizes___src',
  SizesSrcSet = 'sizes___srcSet',
  SizesSrcWebp = 'sizes___srcWebp',
  SizesSrcSetWebp = 'sizes___srcSetWebp',
  SizesSizes = 'sizes___sizes',
  SizesOriginalImg = 'sizes___originalImg',
  SizesOriginalName = 'sizes___originalName',
  SizesPresentationWidth = 'sizes___presentationWidth',
  SizesPresentationHeight = 'sizes___presentationHeight',
  GatsbyImageData = 'gatsbyImageData',
  OriginalWidth = 'original___width',
  OriginalHeight = 'original___height',
  OriginalSrc = 'original___src',
  ResizeSrc = 'resize___src',
  ResizeTracedSvg = 'resize___tracedSVG',
  ResizeWidth = 'resize___width',
  ResizeHeight = 'resize___height',
  ResizeAspectRatio = 'resize___aspectRatio',
  ResizeOriginalName = 'resize___originalName',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
}

export type ImageSharpFilterInput = {
  fixed?: Maybe<ImageSharpFixedFilterInput>
  resolutions?: Maybe<ImageSharpResolutionsFilterInput>
  fluid?: Maybe<ImageSharpFluidFilterInput>
  sizes?: Maybe<ImageSharpSizesFilterInput>
  gatsbyImageData?: Maybe<JsonQueryOperatorInput>
  original?: Maybe<ImageSharpOriginalFilterInput>
  resize?: Maybe<ImageSharpResizeFilterInput>
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type ImageSharpFixed = {
  __typename?: 'ImageSharpFixed'
  base64?: Maybe<Scalars['String']>
  tracedSVG?: Maybe<Scalars['String']>
  aspectRatio?: Maybe<Scalars['Float']>
  width: Scalars['Float']
  height: Scalars['Float']
  src: Scalars['String']
  srcSet: Scalars['String']
  srcWebp?: Maybe<Scalars['String']>
  srcSetWebp?: Maybe<Scalars['String']>
  originalName?: Maybe<Scalars['String']>
}

export type ImageSharpFixedFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>
  tracedSVG?: Maybe<StringQueryOperatorInput>
  aspectRatio?: Maybe<FloatQueryOperatorInput>
  width?: Maybe<FloatQueryOperatorInput>
  height?: Maybe<FloatQueryOperatorInput>
  src?: Maybe<StringQueryOperatorInput>
  srcSet?: Maybe<StringQueryOperatorInput>
  srcWebp?: Maybe<StringQueryOperatorInput>
  srcSetWebp?: Maybe<StringQueryOperatorInput>
  originalName?: Maybe<StringQueryOperatorInput>
}

export type ImageSharpFluid = {
  __typename?: 'ImageSharpFluid'
  base64?: Maybe<Scalars['String']>
  tracedSVG?: Maybe<Scalars['String']>
  aspectRatio: Scalars['Float']
  src: Scalars['String']
  srcSet: Scalars['String']
  srcWebp?: Maybe<Scalars['String']>
  srcSetWebp?: Maybe<Scalars['String']>
  sizes: Scalars['String']
  originalImg?: Maybe<Scalars['String']>
  originalName?: Maybe<Scalars['String']>
  presentationWidth: Scalars['Int']
  presentationHeight: Scalars['Int']
}

export type ImageSharpFluidFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>
  tracedSVG?: Maybe<StringQueryOperatorInput>
  aspectRatio?: Maybe<FloatQueryOperatorInput>
  src?: Maybe<StringQueryOperatorInput>
  srcSet?: Maybe<StringQueryOperatorInput>
  srcWebp?: Maybe<StringQueryOperatorInput>
  srcSetWebp?: Maybe<StringQueryOperatorInput>
  sizes?: Maybe<StringQueryOperatorInput>
  originalImg?: Maybe<StringQueryOperatorInput>
  originalName?: Maybe<StringQueryOperatorInput>
  presentationWidth?: Maybe<IntQueryOperatorInput>
  presentationHeight?: Maybe<IntQueryOperatorInput>
}

export type ImageSharpGroupConnection = {
  __typename?: 'ImageSharpGroupConnection'
  totalCount: Scalars['Int']
  edges: Array<ImageSharpEdge>
  nodes: Array<ImageSharp>
  pageInfo: PageInfo
  field: Scalars['String']
  fieldValue?: Maybe<Scalars['String']>
}

export type ImageSharpOriginal = {
  __typename?: 'ImageSharpOriginal'
  width?: Maybe<Scalars['Float']>
  height?: Maybe<Scalars['Float']>
  src?: Maybe<Scalars['String']>
}

export type ImageSharpOriginalFilterInput = {
  width?: Maybe<FloatQueryOperatorInput>
  height?: Maybe<FloatQueryOperatorInput>
  src?: Maybe<StringQueryOperatorInput>
}

export type ImageSharpResize = {
  __typename?: 'ImageSharpResize'
  src?: Maybe<Scalars['String']>
  tracedSVG?: Maybe<Scalars['String']>
  width?: Maybe<Scalars['Int']>
  height?: Maybe<Scalars['Int']>
  aspectRatio?: Maybe<Scalars['Float']>
  originalName?: Maybe<Scalars['String']>
}

export type ImageSharpResizeFilterInput = {
  src?: Maybe<StringQueryOperatorInput>
  tracedSVG?: Maybe<StringQueryOperatorInput>
  width?: Maybe<IntQueryOperatorInput>
  height?: Maybe<IntQueryOperatorInput>
  aspectRatio?: Maybe<FloatQueryOperatorInput>
  originalName?: Maybe<StringQueryOperatorInput>
}

export type ImageSharpResolutions = {
  __typename?: 'ImageSharpResolutions'
  base64?: Maybe<Scalars['String']>
  tracedSVG?: Maybe<Scalars['String']>
  aspectRatio?: Maybe<Scalars['Float']>
  width: Scalars['Float']
  height: Scalars['Float']
  src: Scalars['String']
  srcSet: Scalars['String']
  srcWebp?: Maybe<Scalars['String']>
  srcSetWebp?: Maybe<Scalars['String']>
  originalName?: Maybe<Scalars['String']>
}

export type ImageSharpResolutionsFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>
  tracedSVG?: Maybe<StringQueryOperatorInput>
  aspectRatio?: Maybe<FloatQueryOperatorInput>
  width?: Maybe<FloatQueryOperatorInput>
  height?: Maybe<FloatQueryOperatorInput>
  src?: Maybe<StringQueryOperatorInput>
  srcSet?: Maybe<StringQueryOperatorInput>
  srcWebp?: Maybe<StringQueryOperatorInput>
  srcSetWebp?: Maybe<StringQueryOperatorInput>
  originalName?: Maybe<StringQueryOperatorInput>
}

export type ImageSharpSizes = {
  __typename?: 'ImageSharpSizes'
  base64?: Maybe<Scalars['String']>
  tracedSVG?: Maybe<Scalars['String']>
  aspectRatio: Scalars['Float']
  src: Scalars['String']
  srcSet: Scalars['String']
  srcWebp?: Maybe<Scalars['String']>
  srcSetWebp?: Maybe<Scalars['String']>
  sizes: Scalars['String']
  originalImg?: Maybe<Scalars['String']>
  originalName?: Maybe<Scalars['String']>
  presentationWidth: Scalars['Int']
  presentationHeight: Scalars['Int']
}

export type ImageSharpSizesFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>
  tracedSVG?: Maybe<StringQueryOperatorInput>
  aspectRatio?: Maybe<FloatQueryOperatorInput>
  src?: Maybe<StringQueryOperatorInput>
  srcSet?: Maybe<StringQueryOperatorInput>
  srcWebp?: Maybe<StringQueryOperatorInput>
  srcSetWebp?: Maybe<StringQueryOperatorInput>
  sizes?: Maybe<StringQueryOperatorInput>
  originalImg?: Maybe<StringQueryOperatorInput>
  originalName?: Maybe<StringQueryOperatorInput>
  presentationWidth?: Maybe<IntQueryOperatorInput>
  presentationHeight?: Maybe<IntQueryOperatorInput>
}

export type ImageSharpSortInput = {
  fields?: Maybe<Array<Maybe<ImageSharpFieldsEnum>>>
  order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type Internal = {
  __typename?: 'Internal'
  content?: Maybe<Scalars['String']>
  contentDigest: Scalars['String']
  description?: Maybe<Scalars['String']>
  fieldOwners?: Maybe<Array<Maybe<Scalars['String']>>>
  ignoreType?: Maybe<Scalars['Boolean']>
  mediaType?: Maybe<Scalars['String']>
  owner: Scalars['String']
  type: Scalars['String']
}

export type InternalFilterInput = {
  content?: Maybe<StringQueryOperatorInput>
  contentDigest?: Maybe<StringQueryOperatorInput>
  description?: Maybe<StringQueryOperatorInput>
  fieldOwners?: Maybe<StringQueryOperatorInput>
  ignoreType?: Maybe<BooleanQueryOperatorInput>
  mediaType?: Maybe<StringQueryOperatorInput>
  owner?: Maybe<StringQueryOperatorInput>
  type?: Maybe<StringQueryOperatorInput>
}

export type IntQueryOperatorInput = {
  eq?: Maybe<Scalars['Int']>
  ne?: Maybe<Scalars['Int']>
  gt?: Maybe<Scalars['Int']>
  gte?: Maybe<Scalars['Int']>
  lt?: Maybe<Scalars['Int']>
  lte?: Maybe<Scalars['Int']>
  in?: Maybe<Array<Maybe<Scalars['Int']>>>
  nin?: Maybe<Array<Maybe<Scalars['Int']>>>
}

export type JpgOptions = {
  quality?: Maybe<Scalars['Int']>
  progressive?: Maybe<Scalars['Boolean']>
}

export type JsonQueryOperatorInput = {
  eq?: Maybe<Scalars['JSON']>
  ne?: Maybe<Scalars['JSON']>
  in?: Maybe<Array<Maybe<Scalars['JSON']>>>
  nin?: Maybe<Array<Maybe<Scalars['JSON']>>>
  regex?: Maybe<Scalars['JSON']>
  glob?: Maybe<Scalars['JSON']>
}

/** Node Interface */
export type Node = {
  id: Scalars['ID']
  parent?: Maybe<Node>
  children: Array<Node>
  internal: Internal
}

export type NodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type NodeFilterListInput = {
  elemMatch?: Maybe<NodeFilterInput>
}

export type PageInfo = {
  __typename?: 'PageInfo'
  currentPage: Scalars['Int']
  hasPreviousPage: Scalars['Boolean']
  hasNextPage: Scalars['Boolean']
  itemCount: Scalars['Int']
  pageCount: Scalars['Int']
  perPage?: Maybe<Scalars['Int']>
  totalCount: Scalars['Int']
}

export type PngOptions = {
  quality?: Maybe<Scalars['Int']>
  compressionSpeed?: Maybe<Scalars['Int']>
}

export type Potrace = {
  turnPolicy?: Maybe<PotraceTurnPolicy>
  turdSize?: Maybe<Scalars['Float']>
  alphaMax?: Maybe<Scalars['Float']>
  optCurve?: Maybe<Scalars['Boolean']>
  optTolerance?: Maybe<Scalars['Float']>
  threshold?: Maybe<Scalars['Int']>
  blackOnWhite?: Maybe<Scalars['Boolean']>
  color?: Maybe<Scalars['String']>
  background?: Maybe<Scalars['String']>
}

export enum PotraceTurnPolicy {
  TurnpolicyBlack = 'TURNPOLICY_BLACK',
  TurnpolicyWhite = 'TURNPOLICY_WHITE',
  TurnpolicyLeft = 'TURNPOLICY_LEFT',
  TurnpolicyRight = 'TURNPOLICY_RIGHT',
  TurnpolicyMinority = 'TURNPOLICY_MINORITY',
  TurnpolicyMajority = 'TURNPOLICY_MAJORITY',
}

export type Query = {
  __typename?: 'Query'
  contentfulEntry?: Maybe<ContentfulEntry>
  allContentfulEntry: ContentfulEntryConnection
  file?: Maybe<File>
  allFile: FileConnection
  directory?: Maybe<Directory>
  allDirectory: DirectoryConnection
  site?: Maybe<Site>
  allSite: SiteConnection
  sitePage?: Maybe<SitePage>
  allSitePage: SitePageConnection
  imageSharp?: Maybe<ImageSharp>
  allImageSharp: ImageSharpConnection
  contentfulAsset?: Maybe<ContentfulAsset>
  allContentfulAsset: ContentfulAssetConnection
  contentfulProject?: Maybe<ContentfulProject>
  allContentfulProject: ContentfulProjectConnection
  contentfulTheme?: Maybe<ContentfulTheme>
  allContentfulTheme: ContentfulThemeConnection
  contentfulLogo?: Maybe<ContentfulLogo>
  allContentfulLogo: ContentfulLogoConnection
  contentfulHomepageJumbotron?: Maybe<ContentfulHomepageJumbotron>
  allContentfulHomepageJumbotron: ContentfulHomepageJumbotronConnection
  contentfulHomepageFeatured?: Maybe<ContentfulHomepageFeatured>
  allContentfulHomepageFeatured: ContentfulHomepageFeaturedConnection
  contentfulHomepageAboutMe?: Maybe<ContentfulHomepageAboutMe>
  allContentfulHomepageAboutMe: ContentfulHomepageAboutMeConnection
  contentfulHomepageLatestWork?: Maybe<ContentfulHomepageLatestWork>
  allContentfulHomepageLatestWork: ContentfulHomepageLatestWorkConnection
  contentfulContactInfo?: Maybe<ContentfulContactInfo>
  allContentfulContactInfo: ContentfulContactInfoConnection
  contentfulProjectDescriptionTextNode?: Maybe<ContentfulProjectDescriptionTextNode>
  allContentfulProjectDescriptionTextNode: ContentfulProjectDescriptionTextNodeConnection
  contentfulContentType?: Maybe<ContentfulContentType>
  allContentfulContentType: ContentfulContentTypeConnection
  siteBuildMetadata?: Maybe<SiteBuildMetadata>
  allSiteBuildMetadata: SiteBuildMetadataConnection
  sitePlugin?: Maybe<SitePlugin>
  allSitePlugin: SitePluginConnection
}

export type QueryContentfulEntryArgs = {
  contentful_id?: Maybe<StringQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  node_locale?: Maybe<StringQueryOperatorInput>
}

export type QueryAllContentfulEntryArgs = {
  filter?: Maybe<ContentfulEntryFilterInput>
  sort?: Maybe<ContentfulEntrySortInput>
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
}

export type QueryFileArgs = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>
  absolutePath?: Maybe<StringQueryOperatorInput>
  relativePath?: Maybe<StringQueryOperatorInput>
  extension?: Maybe<StringQueryOperatorInput>
  size?: Maybe<IntQueryOperatorInput>
  prettySize?: Maybe<StringQueryOperatorInput>
  modifiedTime?: Maybe<DateQueryOperatorInput>
  accessTime?: Maybe<DateQueryOperatorInput>
  changeTime?: Maybe<DateQueryOperatorInput>
  birthTime?: Maybe<DateQueryOperatorInput>
  root?: Maybe<StringQueryOperatorInput>
  dir?: Maybe<StringQueryOperatorInput>
  base?: Maybe<StringQueryOperatorInput>
  ext?: Maybe<StringQueryOperatorInput>
  name?: Maybe<StringQueryOperatorInput>
  relativeDirectory?: Maybe<StringQueryOperatorInput>
  dev?: Maybe<IntQueryOperatorInput>
  mode?: Maybe<IntQueryOperatorInput>
  nlink?: Maybe<IntQueryOperatorInput>
  uid?: Maybe<IntQueryOperatorInput>
  gid?: Maybe<IntQueryOperatorInput>
  rdev?: Maybe<IntQueryOperatorInput>
  ino?: Maybe<FloatQueryOperatorInput>
  atimeMs?: Maybe<FloatQueryOperatorInput>
  mtimeMs?: Maybe<FloatQueryOperatorInput>
  ctimeMs?: Maybe<FloatQueryOperatorInput>
  atime?: Maybe<DateQueryOperatorInput>
  mtime?: Maybe<DateQueryOperatorInput>
  ctime?: Maybe<DateQueryOperatorInput>
  birthtime?: Maybe<DateQueryOperatorInput>
  birthtimeMs?: Maybe<FloatQueryOperatorInput>
  blksize?: Maybe<IntQueryOperatorInput>
  blocks?: Maybe<IntQueryOperatorInput>
  url?: Maybe<StringQueryOperatorInput>
  publicURL?: Maybe<StringQueryOperatorInput>
  childImageSharp?: Maybe<ImageSharpFilterInput>
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type QueryAllFileArgs = {
  filter?: Maybe<FileFilterInput>
  sort?: Maybe<FileSortInput>
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
}

export type QueryDirectoryArgs = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>
  absolutePath?: Maybe<StringQueryOperatorInput>
  relativePath?: Maybe<StringQueryOperatorInput>
  extension?: Maybe<StringQueryOperatorInput>
  size?: Maybe<IntQueryOperatorInput>
  prettySize?: Maybe<StringQueryOperatorInput>
  modifiedTime?: Maybe<DateQueryOperatorInput>
  accessTime?: Maybe<DateQueryOperatorInput>
  changeTime?: Maybe<DateQueryOperatorInput>
  birthTime?: Maybe<DateQueryOperatorInput>
  root?: Maybe<StringQueryOperatorInput>
  dir?: Maybe<StringQueryOperatorInput>
  base?: Maybe<StringQueryOperatorInput>
  ext?: Maybe<StringQueryOperatorInput>
  name?: Maybe<StringQueryOperatorInput>
  relativeDirectory?: Maybe<StringQueryOperatorInput>
  dev?: Maybe<IntQueryOperatorInput>
  mode?: Maybe<IntQueryOperatorInput>
  nlink?: Maybe<IntQueryOperatorInput>
  uid?: Maybe<IntQueryOperatorInput>
  gid?: Maybe<IntQueryOperatorInput>
  rdev?: Maybe<IntQueryOperatorInput>
  ino?: Maybe<FloatQueryOperatorInput>
  atimeMs?: Maybe<FloatQueryOperatorInput>
  mtimeMs?: Maybe<FloatQueryOperatorInput>
  ctimeMs?: Maybe<FloatQueryOperatorInput>
  atime?: Maybe<DateQueryOperatorInput>
  mtime?: Maybe<DateQueryOperatorInput>
  ctime?: Maybe<DateQueryOperatorInput>
  birthtime?: Maybe<DateQueryOperatorInput>
  birthtimeMs?: Maybe<FloatQueryOperatorInput>
  blksize?: Maybe<IntQueryOperatorInput>
  blocks?: Maybe<IntQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type QueryAllDirectoryArgs = {
  filter?: Maybe<DirectoryFilterInput>
  sort?: Maybe<DirectorySortInput>
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
}

export type QuerySiteArgs = {
  buildTime?: Maybe<DateQueryOperatorInput>
  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>
  port?: Maybe<IntQueryOperatorInput>
  host?: Maybe<StringQueryOperatorInput>
  polyfill?: Maybe<BooleanQueryOperatorInput>
  pathPrefix?: Maybe<StringQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type QueryAllSiteArgs = {
  filter?: Maybe<SiteFilterInput>
  sort?: Maybe<SiteSortInput>
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
}

export type QuerySitePageArgs = {
  path?: Maybe<StringQueryOperatorInput>
  component?: Maybe<StringQueryOperatorInput>
  internalComponentName?: Maybe<StringQueryOperatorInput>
  componentChunkName?: Maybe<StringQueryOperatorInput>
  matchPath?: Maybe<StringQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>
  context?: Maybe<SitePageContextFilterInput>
  pluginCreator?: Maybe<SitePluginFilterInput>
  pluginCreatorId?: Maybe<StringQueryOperatorInput>
  componentPath?: Maybe<StringQueryOperatorInput>
}

export type QueryAllSitePageArgs = {
  filter?: Maybe<SitePageFilterInput>
  sort?: Maybe<SitePageSortInput>
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
}

export type QueryImageSharpArgs = {
  fixed?: Maybe<ImageSharpFixedFilterInput>
  resolutions?: Maybe<ImageSharpResolutionsFilterInput>
  fluid?: Maybe<ImageSharpFluidFilterInput>
  sizes?: Maybe<ImageSharpSizesFilterInput>
  gatsbyImageData?: Maybe<JsonQueryOperatorInput>
  original?: Maybe<ImageSharpOriginalFilterInput>
  resize?: Maybe<ImageSharpResizeFilterInput>
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type QueryAllImageSharpArgs = {
  filter?: Maybe<ImageSharpFilterInput>
  sort?: Maybe<ImageSharpSortInput>
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
}

export type QueryContentfulAssetArgs = {
  contentful_id?: Maybe<StringQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  spaceId?: Maybe<StringQueryOperatorInput>
  createdAt?: Maybe<DateQueryOperatorInput>
  updatedAt?: Maybe<DateQueryOperatorInput>
  file?: Maybe<ContentfulAssetFileFilterInput>
  title?: Maybe<StringQueryOperatorInput>
  description?: Maybe<StringQueryOperatorInput>
  node_locale?: Maybe<StringQueryOperatorInput>
  sys?: Maybe<ContentfulAssetSysFilterInput>
  localFile?: Maybe<FileFilterInput>
  fixed?: Maybe<ContentfulFixedFilterInput>
  resolutions?: Maybe<ContentfulResolutionsFilterInput>
  fluid?: Maybe<ContentfulFluidFilterInput>
  sizes?: Maybe<ContentfulSizesFilterInput>
  resize?: Maybe<ContentfulResizeFilterInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type QueryAllContentfulAssetArgs = {
  filter?: Maybe<ContentfulAssetFilterInput>
  sort?: Maybe<ContentfulAssetSortInput>
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
}

export type QueryContentfulProjectArgs = {
  contentful_id?: Maybe<StringQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  node_locale?: Maybe<StringQueryOperatorInput>
  title?: Maybe<StringQueryOperatorInput>
  slug?: Maybe<StringQueryOperatorInput>
  theme?: Maybe<ContentfulThemeFilterInput>
  coverImage?: Maybe<ContentfulAssetFilterInput>
  photos?: Maybe<ContentfulAssetFilterListInput>
  description?: Maybe<ContentfulProjectDescriptionTextNodeFilterInput>
  spaceId?: Maybe<StringQueryOperatorInput>
  createdAt?: Maybe<DateQueryOperatorInput>
  updatedAt?: Maybe<DateQueryOperatorInput>
  sys?: Maybe<ContentfulProjectSysFilterInput>
  homepage___featured?: Maybe<ContentfulHomepageFeaturedFilterListInput>
  homepage___latest_work?: Maybe<ContentfulHomepageLatestWorkFilterListInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
  childContentfulProjectDescriptionTextNode?: Maybe<ContentfulProjectDescriptionTextNodeFilterInput>
}

export type QueryAllContentfulProjectArgs = {
  filter?: Maybe<ContentfulProjectFilterInput>
  sort?: Maybe<ContentfulProjectSortInput>
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
}

export type QueryContentfulThemeArgs = {
  contentful_id?: Maybe<StringQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  node_locale?: Maybe<StringQueryOperatorInput>
  title?: Maybe<StringQueryOperatorInput>
  slug?: Maybe<StringQueryOperatorInput>
  coverImage?: Maybe<ContentfulAssetFilterInput>
  featuredPhotos?: Maybe<ContentfulAssetFilterListInput>
  project?: Maybe<ContentfulProjectFilterListInput>
  homepage___featured?: Maybe<ContentfulHomepageFeaturedFilterListInput>
  spaceId?: Maybe<StringQueryOperatorInput>
  createdAt?: Maybe<DateQueryOperatorInput>
  updatedAt?: Maybe<DateQueryOperatorInput>
  sys?: Maybe<ContentfulThemeSysFilterInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type QueryAllContentfulThemeArgs = {
  filter?: Maybe<ContentfulThemeFilterInput>
  sort?: Maybe<ContentfulThemeSortInput>
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
}

export type QueryContentfulLogoArgs = {
  contentful_id?: Maybe<StringQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  node_locale?: Maybe<StringQueryOperatorInput>
  logo?: Maybe<ContentfulAssetFilterInput>
  spaceId?: Maybe<StringQueryOperatorInput>
  createdAt?: Maybe<DateQueryOperatorInput>
  updatedAt?: Maybe<DateQueryOperatorInput>
  sys?: Maybe<ContentfulLogoSysFilterInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type QueryAllContentfulLogoArgs = {
  filter?: Maybe<ContentfulLogoFilterInput>
  sort?: Maybe<ContentfulLogoSortInput>
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
}

export type QueryContentfulHomepageJumbotronArgs = {
  contentful_id?: Maybe<StringQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  node_locale?: Maybe<StringQueryOperatorInput>
  text?: Maybe<StringQueryOperatorInput>
  image?: Maybe<ContentfulAssetFilterInput>
  spaceId?: Maybe<StringQueryOperatorInput>
  createdAt?: Maybe<DateQueryOperatorInput>
  updatedAt?: Maybe<DateQueryOperatorInput>
  sys?: Maybe<ContentfulHomepageJumbotronSysFilterInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type QueryAllContentfulHomepageJumbotronArgs = {
  filter?: Maybe<ContentfulHomepageJumbotronFilterInput>
  sort?: Maybe<ContentfulHomepageJumbotronSortInput>
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
}

export type QueryContentfulHomepageFeaturedArgs = {
  contentful_id?: Maybe<StringQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  node_locale?: Maybe<StringQueryOperatorInput>
  themes?: Maybe<ContentfulThemeFilterListInput>
  projects?: Maybe<ContentfulProjectFilterListInput>
  spaceId?: Maybe<StringQueryOperatorInput>
  createdAt?: Maybe<DateQueryOperatorInput>
  updatedAt?: Maybe<DateQueryOperatorInput>
  sys?: Maybe<ContentfulHomepageFeaturedSysFilterInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type QueryAllContentfulHomepageFeaturedArgs = {
  filter?: Maybe<ContentfulHomepageFeaturedFilterInput>
  sort?: Maybe<ContentfulHomepageFeaturedSortInput>
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
}

export type QueryContentfulHomepageAboutMeArgs = {
  contentful_id?: Maybe<StringQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  node_locale?: Maybe<StringQueryOperatorInput>
  text?: Maybe<ContentfulHomepageAboutMeTextFilterInput>
  image?: Maybe<ContentfulAssetFilterInput>
  spaceId?: Maybe<StringQueryOperatorInput>
  createdAt?: Maybe<DateQueryOperatorInput>
  updatedAt?: Maybe<DateQueryOperatorInput>
  sys?: Maybe<ContentfulHomepageAboutMeSysFilterInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type QueryAllContentfulHomepageAboutMeArgs = {
  filter?: Maybe<ContentfulHomepageAboutMeFilterInput>
  sort?: Maybe<ContentfulHomepageAboutMeSortInput>
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
}

export type QueryContentfulHomepageLatestWorkArgs = {
  contentful_id?: Maybe<StringQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  node_locale?: Maybe<StringQueryOperatorInput>
  project?: Maybe<ContentfulProjectFilterInput>
  featuredPhotos?: Maybe<ContentfulAssetFilterListInput>
  spaceId?: Maybe<StringQueryOperatorInput>
  createdAt?: Maybe<DateQueryOperatorInput>
  updatedAt?: Maybe<DateQueryOperatorInput>
  sys?: Maybe<ContentfulHomepageLatestWorkSysFilterInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type QueryAllContentfulHomepageLatestWorkArgs = {
  filter?: Maybe<ContentfulHomepageLatestWorkFilterInput>
  sort?: Maybe<ContentfulHomepageLatestWorkSortInput>
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
}

export type QueryContentfulContactInfoArgs = {
  contentful_id?: Maybe<StringQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  node_locale?: Maybe<StringQueryOperatorInput>
  facebookPage?: Maybe<StringQueryOperatorInput>
  instagramPage?: Maybe<StringQueryOperatorInput>
  email?: Maybe<StringQueryOperatorInput>
  phoneNumber?: Maybe<StringQueryOperatorInput>
  spaceId?: Maybe<StringQueryOperatorInput>
  createdAt?: Maybe<DateQueryOperatorInput>
  updatedAt?: Maybe<DateQueryOperatorInput>
  sys?: Maybe<ContentfulContactInfoSysFilterInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type QueryAllContentfulContactInfoArgs = {
  filter?: Maybe<ContentfulContactInfoFilterInput>
  sort?: Maybe<ContentfulContactInfoSortInput>
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
}

export type QueryContentfulProjectDescriptionTextNodeArgs = {
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
  description?: Maybe<StringQueryOperatorInput>
  sys?: Maybe<ContentfulProjectDescriptionTextNodeSysFilterInput>
}

export type QueryAllContentfulProjectDescriptionTextNodeArgs = {
  filter?: Maybe<ContentfulProjectDescriptionTextNodeFilterInput>
  sort?: Maybe<ContentfulProjectDescriptionTextNodeSortInput>
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
}

export type QueryContentfulContentTypeArgs = {
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
  name?: Maybe<StringQueryOperatorInput>
  displayField?: Maybe<StringQueryOperatorInput>
  description?: Maybe<StringQueryOperatorInput>
  sys?: Maybe<ContentfulContentTypeSysFilterInput>
}

export type QueryAllContentfulContentTypeArgs = {
  filter?: Maybe<ContentfulContentTypeFilterInput>
  sort?: Maybe<ContentfulContentTypeSortInput>
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
}

export type QuerySiteBuildMetadataArgs = {
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
  buildTime?: Maybe<DateQueryOperatorInput>
}

export type QueryAllSiteBuildMetadataArgs = {
  filter?: Maybe<SiteBuildMetadataFilterInput>
  sort?: Maybe<SiteBuildMetadataSortInput>
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
}

export type QuerySitePluginArgs = {
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
  resolve?: Maybe<StringQueryOperatorInput>
  name?: Maybe<StringQueryOperatorInput>
  version?: Maybe<StringQueryOperatorInput>
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>
  nodeAPIs?: Maybe<StringQueryOperatorInput>
  ssrAPIs?: Maybe<StringQueryOperatorInput>
  pluginFilepath?: Maybe<StringQueryOperatorInput>
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>
}

export type QueryAllSitePluginArgs = {
  filter?: Maybe<SitePluginFilterInput>
  sort?: Maybe<SitePluginSortInput>
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
}

export type Site = Node & {
  __typename?: 'Site'
  buildTime?: Maybe<Scalars['Date']>
  siteMetadata?: Maybe<SiteSiteMetadata>
  port?: Maybe<Scalars['Int']>
  host?: Maybe<Scalars['String']>
  polyfill?: Maybe<Scalars['Boolean']>
  pathPrefix?: Maybe<Scalars['String']>
  id: Scalars['ID']
  parent?: Maybe<Node>
  children: Array<Node>
  internal: Internal
}

export type SiteBuildTimeArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type SiteBuildMetadata = Node & {
  __typename?: 'SiteBuildMetadata'
  id: Scalars['ID']
  parent?: Maybe<Node>
  children: Array<Node>
  internal: Internal
  buildTime?: Maybe<Scalars['Date']>
}

export type SiteBuildMetadataBuildTimeArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type SiteBuildMetadataConnection = {
  __typename?: 'SiteBuildMetadataConnection'
  totalCount: Scalars['Int']
  edges: Array<SiteBuildMetadataEdge>
  nodes: Array<SiteBuildMetadata>
  pageInfo: PageInfo
  distinct: Array<Scalars['String']>
  group: Array<SiteBuildMetadataGroupConnection>
}

export type SiteBuildMetadataConnectionDistinctArgs = {
  field: SiteBuildMetadataFieldsEnum
}

export type SiteBuildMetadataConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  field: SiteBuildMetadataFieldsEnum
}

export type SiteBuildMetadataEdge = {
  __typename?: 'SiteBuildMetadataEdge'
  next?: Maybe<SiteBuildMetadata>
  node: SiteBuildMetadata
  previous?: Maybe<SiteBuildMetadata>
}

export enum SiteBuildMetadataFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  BuildTime = 'buildTime',
}

export type SiteBuildMetadataFilterInput = {
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
  buildTime?: Maybe<DateQueryOperatorInput>
}

export type SiteBuildMetadataGroupConnection = {
  __typename?: 'SiteBuildMetadataGroupConnection'
  totalCount: Scalars['Int']
  edges: Array<SiteBuildMetadataEdge>
  nodes: Array<SiteBuildMetadata>
  pageInfo: PageInfo
  field: Scalars['String']
  fieldValue?: Maybe<Scalars['String']>
}

export type SiteBuildMetadataSortInput = {
  fields?: Maybe<Array<Maybe<SiteBuildMetadataFieldsEnum>>>
  order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type SiteConnection = {
  __typename?: 'SiteConnection'
  totalCount: Scalars['Int']
  edges: Array<SiteEdge>
  nodes: Array<Site>
  pageInfo: PageInfo
  distinct: Array<Scalars['String']>
  group: Array<SiteGroupConnection>
}

export type SiteConnectionDistinctArgs = {
  field: SiteFieldsEnum
}

export type SiteConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  field: SiteFieldsEnum
}

export type SiteEdge = {
  __typename?: 'SiteEdge'
  next?: Maybe<Site>
  node: Site
  previous?: Maybe<Site>
}

export enum SiteFieldsEnum {
  BuildTime = 'buildTime',
  SiteMetadataTitle = 'siteMetadata___title',
  SiteMetadataDescription = 'siteMetadata___description',
  Port = 'port',
  Host = 'host',
  Polyfill = 'polyfill',
  PathPrefix = 'pathPrefix',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
}

export type SiteFilterInput = {
  buildTime?: Maybe<DateQueryOperatorInput>
  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>
  port?: Maybe<IntQueryOperatorInput>
  host?: Maybe<StringQueryOperatorInput>
  polyfill?: Maybe<BooleanQueryOperatorInput>
  pathPrefix?: Maybe<StringQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type SiteGroupConnection = {
  __typename?: 'SiteGroupConnection'
  totalCount: Scalars['Int']
  edges: Array<SiteEdge>
  nodes: Array<Site>
  pageInfo: PageInfo
  field: Scalars['String']
  fieldValue?: Maybe<Scalars['String']>
}

export type SitePage = Node & {
  __typename?: 'SitePage'
  path: Scalars['String']
  component: Scalars['String']
  internalComponentName: Scalars['String']
  componentChunkName: Scalars['String']
  matchPath?: Maybe<Scalars['String']>
  id: Scalars['ID']
  parent?: Maybe<Node>
  children: Array<Node>
  internal: Internal
  isCreatedByStatefulCreatePages?: Maybe<Scalars['Boolean']>
  context?: Maybe<SitePageContext>
  pluginCreator?: Maybe<SitePlugin>
  pluginCreatorId?: Maybe<Scalars['String']>
  componentPath?: Maybe<Scalars['String']>
}

export type SitePageConnection = {
  __typename?: 'SitePageConnection'
  totalCount: Scalars['Int']
  edges: Array<SitePageEdge>
  nodes: Array<SitePage>
  pageInfo: PageInfo
  distinct: Array<Scalars['String']>
  group: Array<SitePageGroupConnection>
}

export type SitePageConnectionDistinctArgs = {
  field: SitePageFieldsEnum
}

export type SitePageConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  field: SitePageFieldsEnum
}

export type SitePageContext = {
  __typename?: 'SitePageContext'
  id?: Maybe<Scalars['String']>
}

export type SitePageContextFilterInput = {
  id?: Maybe<StringQueryOperatorInput>
}

export type SitePageEdge = {
  __typename?: 'SitePageEdge'
  next?: Maybe<SitePage>
  node: SitePage
  previous?: Maybe<SitePage>
}

export enum SitePageFieldsEnum {
  Path = 'path',
  Component = 'component',
  InternalComponentName = 'internalComponentName',
  ComponentChunkName = 'componentChunkName',
  MatchPath = 'matchPath',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  IsCreatedByStatefulCreatePages = 'isCreatedByStatefulCreatePages',
  ContextId = 'context___id',
  PluginCreatorId = 'pluginCreator___id',
  PluginCreatorParentId = 'pluginCreator___parent___id',
  PluginCreatorParentParentId = 'pluginCreator___parent___parent___id',
  PluginCreatorParentParentChildren = 'pluginCreator___parent___parent___children',
  PluginCreatorParentChildren = 'pluginCreator___parent___children',
  PluginCreatorParentChildrenId = 'pluginCreator___parent___children___id',
  PluginCreatorParentChildrenChildren = 'pluginCreator___parent___children___children',
  PluginCreatorParentInternalContent = 'pluginCreator___parent___internal___content',
  PluginCreatorParentInternalContentDigest = 'pluginCreator___parent___internal___contentDigest',
  PluginCreatorParentInternalDescription = 'pluginCreator___parent___internal___description',
  PluginCreatorParentInternalFieldOwners = 'pluginCreator___parent___internal___fieldOwners',
  PluginCreatorParentInternalIgnoreType = 'pluginCreator___parent___internal___ignoreType',
  PluginCreatorParentInternalMediaType = 'pluginCreator___parent___internal___mediaType',
  PluginCreatorParentInternalOwner = 'pluginCreator___parent___internal___owner',
  PluginCreatorParentInternalType = 'pluginCreator___parent___internal___type',
  PluginCreatorChildren = 'pluginCreator___children',
  PluginCreatorChildrenId = 'pluginCreator___children___id',
  PluginCreatorChildrenParentId = 'pluginCreator___children___parent___id',
  PluginCreatorChildrenParentChildren = 'pluginCreator___children___parent___children',
  PluginCreatorChildrenChildren = 'pluginCreator___children___children',
  PluginCreatorChildrenChildrenId = 'pluginCreator___children___children___id',
  PluginCreatorChildrenChildrenChildren = 'pluginCreator___children___children___children',
  PluginCreatorChildrenInternalContent = 'pluginCreator___children___internal___content',
  PluginCreatorChildrenInternalContentDigest = 'pluginCreator___children___internal___contentDigest',
  PluginCreatorChildrenInternalDescription = 'pluginCreator___children___internal___description',
  PluginCreatorChildrenInternalFieldOwners = 'pluginCreator___children___internal___fieldOwners',
  PluginCreatorChildrenInternalIgnoreType = 'pluginCreator___children___internal___ignoreType',
  PluginCreatorChildrenInternalMediaType = 'pluginCreator___children___internal___mediaType',
  PluginCreatorChildrenInternalOwner = 'pluginCreator___children___internal___owner',
  PluginCreatorChildrenInternalType = 'pluginCreator___children___internal___type',
  PluginCreatorInternalContent = 'pluginCreator___internal___content',
  PluginCreatorInternalContentDigest = 'pluginCreator___internal___contentDigest',
  PluginCreatorInternalDescription = 'pluginCreator___internal___description',
  PluginCreatorInternalFieldOwners = 'pluginCreator___internal___fieldOwners',
  PluginCreatorInternalIgnoreType = 'pluginCreator___internal___ignoreType',
  PluginCreatorInternalMediaType = 'pluginCreator___internal___mediaType',
  PluginCreatorInternalOwner = 'pluginCreator___internal___owner',
  PluginCreatorInternalType = 'pluginCreator___internal___type',
  PluginCreatorResolve = 'pluginCreator___resolve',
  PluginCreatorName = 'pluginCreator___name',
  PluginCreatorVersion = 'pluginCreator___version',
  PluginCreatorPluginOptionsSpaceId = 'pluginCreator___pluginOptions___spaceId',
  PluginCreatorPluginOptionsAccessToken = 'pluginCreator___pluginOptions___accessToken',
  PluginCreatorPluginOptionsDownloadLocal = 'pluginCreator___pluginOptions___downloadLocal',
  PluginCreatorPluginOptionsHost = 'pluginCreator___pluginOptions___host',
  PluginCreatorPluginOptionsEnvironment = 'pluginCreator___pluginOptions___environment',
  PluginCreatorPluginOptionsForceFullSync = 'pluginCreator___pluginOptions___forceFullSync',
  PluginCreatorPluginOptionsPageLimit = 'pluginCreator___pluginOptions___pageLimit',
  PluginCreatorPluginOptionsAssetDownloadWorkers = 'pluginCreator___pluginOptions___assetDownloadWorkers',
  PluginCreatorPluginOptionsUseNameForId = 'pluginCreator___pluginOptions___useNameForId',
  PluginCreatorPluginOptionsPath = 'pluginCreator___pluginOptions___path',
  PluginCreatorPluginOptionsName = 'pluginCreator___pluginOptions___name',
  PluginCreatorPluginOptionsBase64Width = 'pluginCreator___pluginOptions___base64Width',
  PluginCreatorPluginOptionsStripMetadata = 'pluginCreator___pluginOptions___stripMetadata',
  PluginCreatorPluginOptionsDefaultQuality = 'pluginCreator___pluginOptions___defaultQuality',
  PluginCreatorPluginOptionsFailOnError = 'pluginCreator___pluginOptions___failOnError',
  PluginCreatorPluginOptionsDisplayName = 'pluginCreator___pluginOptions___displayName',
  PluginCreatorPluginOptionsFileName = 'pluginCreator___pluginOptions___fileName',
  PluginCreatorPluginOptionsMinify = 'pluginCreator___pluginOptions___minify',
  PluginCreatorPluginOptionsTranspileTemplateLiterals = 'pluginCreator___pluginOptions___transpileTemplateLiterals',
  PluginCreatorPluginOptionsPure = 'pluginCreator___pluginOptions___pure',
  PluginCreatorPluginOptionsPathCheck = 'pluginCreator___pluginOptions___pathCheck',
  PluginCreatorPluginOptionsAllExtensions = 'pluginCreator___pluginOptions___allExtensions',
  PluginCreatorPluginOptionsIsTsx = 'pluginCreator___pluginOptions___isTSX',
  PluginCreatorPluginOptionsJsxPragma = 'pluginCreator___pluginOptions___jsxPragma',
  PluginCreatorNodeApIs = 'pluginCreator___nodeAPIs',
  PluginCreatorSsrApIs = 'pluginCreator___ssrAPIs',
  PluginCreatorPluginFilepath = 'pluginCreator___pluginFilepath',
  PluginCreatorPackageJsonName = 'pluginCreator___packageJson___name',
  PluginCreatorPackageJsonDescription = 'pluginCreator___packageJson___description',
  PluginCreatorPackageJsonVersion = 'pluginCreator___packageJson___version',
  PluginCreatorPackageJsonMain = 'pluginCreator___packageJson___main',
  PluginCreatorPackageJsonAuthor = 'pluginCreator___packageJson___author',
  PluginCreatorPackageJsonLicense = 'pluginCreator___packageJson___license',
  PluginCreatorPackageJsonDependencies = 'pluginCreator___packageJson___dependencies',
  PluginCreatorPackageJsonDependenciesName = 'pluginCreator___packageJson___dependencies___name',
  PluginCreatorPackageJsonDependenciesVersion = 'pluginCreator___packageJson___dependencies___version',
  PluginCreatorPackageJsonDevDependencies = 'pluginCreator___packageJson___devDependencies',
  PluginCreatorPackageJsonDevDependenciesName = 'pluginCreator___packageJson___devDependencies___name',
  PluginCreatorPackageJsonDevDependenciesVersion = 'pluginCreator___packageJson___devDependencies___version',
  PluginCreatorPackageJsonPeerDependencies = 'pluginCreator___packageJson___peerDependencies',
  PluginCreatorPackageJsonPeerDependenciesName = 'pluginCreator___packageJson___peerDependencies___name',
  PluginCreatorPackageJsonPeerDependenciesVersion = 'pluginCreator___packageJson___peerDependencies___version',
  PluginCreatorPackageJsonKeywords = 'pluginCreator___packageJson___keywords',
  PluginCreatorId = 'pluginCreatorId',
  ComponentPath = 'componentPath',
}

export type SitePageFilterInput = {
  path?: Maybe<StringQueryOperatorInput>
  component?: Maybe<StringQueryOperatorInput>
  internalComponentName?: Maybe<StringQueryOperatorInput>
  componentChunkName?: Maybe<StringQueryOperatorInput>
  matchPath?: Maybe<StringQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>
  context?: Maybe<SitePageContextFilterInput>
  pluginCreator?: Maybe<SitePluginFilterInput>
  pluginCreatorId?: Maybe<StringQueryOperatorInput>
  componentPath?: Maybe<StringQueryOperatorInput>
}

export type SitePageGroupConnection = {
  __typename?: 'SitePageGroupConnection'
  totalCount: Scalars['Int']
  edges: Array<SitePageEdge>
  nodes: Array<SitePage>
  pageInfo: PageInfo
  field: Scalars['String']
  fieldValue?: Maybe<Scalars['String']>
}

export type SitePageSortInput = {
  fields?: Maybe<Array<Maybe<SitePageFieldsEnum>>>
  order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type SitePlugin = Node & {
  __typename?: 'SitePlugin'
  id: Scalars['ID']
  parent?: Maybe<Node>
  children: Array<Node>
  internal: Internal
  resolve?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  version?: Maybe<Scalars['String']>
  pluginOptions?: Maybe<SitePluginPluginOptions>
  nodeAPIs?: Maybe<Array<Maybe<Scalars['String']>>>
  ssrAPIs?: Maybe<Array<Maybe<Scalars['String']>>>
  pluginFilepath?: Maybe<Scalars['String']>
  packageJson?: Maybe<SitePluginPackageJson>
}

export type SitePluginConnection = {
  __typename?: 'SitePluginConnection'
  totalCount: Scalars['Int']
  edges: Array<SitePluginEdge>
  nodes: Array<SitePlugin>
  pageInfo: PageInfo
  distinct: Array<Scalars['String']>
  group: Array<SitePluginGroupConnection>
}

export type SitePluginConnectionDistinctArgs = {
  field: SitePluginFieldsEnum
}

export type SitePluginConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  field: SitePluginFieldsEnum
}

export type SitePluginEdge = {
  __typename?: 'SitePluginEdge'
  next?: Maybe<SitePlugin>
  node: SitePlugin
  previous?: Maybe<SitePlugin>
}

export enum SitePluginFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  Resolve = 'resolve',
  Name = 'name',
  Version = 'version',
  PluginOptionsSpaceId = 'pluginOptions___spaceId',
  PluginOptionsAccessToken = 'pluginOptions___accessToken',
  PluginOptionsDownloadLocal = 'pluginOptions___downloadLocal',
  PluginOptionsHost = 'pluginOptions___host',
  PluginOptionsEnvironment = 'pluginOptions___environment',
  PluginOptionsForceFullSync = 'pluginOptions___forceFullSync',
  PluginOptionsPageLimit = 'pluginOptions___pageLimit',
  PluginOptionsAssetDownloadWorkers = 'pluginOptions___assetDownloadWorkers',
  PluginOptionsUseNameForId = 'pluginOptions___useNameForId',
  PluginOptionsPath = 'pluginOptions___path',
  PluginOptionsName = 'pluginOptions___name',
  PluginOptionsBase64Width = 'pluginOptions___base64Width',
  PluginOptionsStripMetadata = 'pluginOptions___stripMetadata',
  PluginOptionsDefaultQuality = 'pluginOptions___defaultQuality',
  PluginOptionsFailOnError = 'pluginOptions___failOnError',
  PluginOptionsDisplayName = 'pluginOptions___displayName',
  PluginOptionsFileName = 'pluginOptions___fileName',
  PluginOptionsMinify = 'pluginOptions___minify',
  PluginOptionsTranspileTemplateLiterals = 'pluginOptions___transpileTemplateLiterals',
  PluginOptionsPure = 'pluginOptions___pure',
  PluginOptionsPathCheck = 'pluginOptions___pathCheck',
  PluginOptionsAllExtensions = 'pluginOptions___allExtensions',
  PluginOptionsIsTsx = 'pluginOptions___isTSX',
  PluginOptionsJsxPragma = 'pluginOptions___jsxPragma',
  NodeApIs = 'nodeAPIs',
  SsrApIs = 'ssrAPIs',
  PluginFilepath = 'pluginFilepath',
  PackageJsonName = 'packageJson___name',
  PackageJsonDescription = 'packageJson___description',
  PackageJsonVersion = 'packageJson___version',
  PackageJsonMain = 'packageJson___main',
  PackageJsonAuthor = 'packageJson___author',
  PackageJsonLicense = 'packageJson___license',
  PackageJsonDependencies = 'packageJson___dependencies',
  PackageJsonDependenciesName = 'packageJson___dependencies___name',
  PackageJsonDependenciesVersion = 'packageJson___dependencies___version',
  PackageJsonDevDependencies = 'packageJson___devDependencies',
  PackageJsonDevDependenciesName = 'packageJson___devDependencies___name',
  PackageJsonDevDependenciesVersion = 'packageJson___devDependencies___version',
  PackageJsonPeerDependencies = 'packageJson___peerDependencies',
  PackageJsonPeerDependenciesName = 'packageJson___peerDependencies___name',
  PackageJsonPeerDependenciesVersion = 'packageJson___peerDependencies___version',
  PackageJsonKeywords = 'packageJson___keywords',
}

export type SitePluginFilterInput = {
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
  resolve?: Maybe<StringQueryOperatorInput>
  name?: Maybe<StringQueryOperatorInput>
  version?: Maybe<StringQueryOperatorInput>
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>
  nodeAPIs?: Maybe<StringQueryOperatorInput>
  ssrAPIs?: Maybe<StringQueryOperatorInput>
  pluginFilepath?: Maybe<StringQueryOperatorInput>
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>
}

export type SitePluginGroupConnection = {
  __typename?: 'SitePluginGroupConnection'
  totalCount: Scalars['Int']
  edges: Array<SitePluginEdge>
  nodes: Array<SitePlugin>
  pageInfo: PageInfo
  field: Scalars['String']
  fieldValue?: Maybe<Scalars['String']>
}

export type SitePluginPackageJson = {
  __typename?: 'SitePluginPackageJson'
  name?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
  version?: Maybe<Scalars['String']>
  main?: Maybe<Scalars['String']>
  author?: Maybe<Scalars['String']>
  license?: Maybe<Scalars['String']>
  dependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDependencies>>>
  devDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDevDependencies>>>
  peerDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonPeerDependencies>>>
  keywords?: Maybe<Array<Maybe<Scalars['String']>>>
}

export type SitePluginPackageJsonDependencies = {
  __typename?: 'SitePluginPackageJsonDependencies'
  name?: Maybe<Scalars['String']>
  version?: Maybe<Scalars['String']>
}

export type SitePluginPackageJsonDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>
  version?: Maybe<StringQueryOperatorInput>
}

export type SitePluginPackageJsonDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonDependenciesFilterInput>
}

export type SitePluginPackageJsonDevDependencies = {
  __typename?: 'SitePluginPackageJsonDevDependencies'
  name?: Maybe<Scalars['String']>
  version?: Maybe<Scalars['String']>
}

export type SitePluginPackageJsonDevDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>
  version?: Maybe<StringQueryOperatorInput>
}

export type SitePluginPackageJsonDevDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonDevDependenciesFilterInput>
}

export type SitePluginPackageJsonFilterInput = {
  name?: Maybe<StringQueryOperatorInput>
  description?: Maybe<StringQueryOperatorInput>
  version?: Maybe<StringQueryOperatorInput>
  main?: Maybe<StringQueryOperatorInput>
  author?: Maybe<StringQueryOperatorInput>
  license?: Maybe<StringQueryOperatorInput>
  dependencies?: Maybe<SitePluginPackageJsonDependenciesFilterListInput>
  devDependencies?: Maybe<SitePluginPackageJsonDevDependenciesFilterListInput>
  peerDependencies?: Maybe<SitePluginPackageJsonPeerDependenciesFilterListInput>
  keywords?: Maybe<StringQueryOperatorInput>
}

export type SitePluginPackageJsonPeerDependencies = {
  __typename?: 'SitePluginPackageJsonPeerDependencies'
  name?: Maybe<Scalars['String']>
  version?: Maybe<Scalars['String']>
}

export type SitePluginPackageJsonPeerDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>
  version?: Maybe<StringQueryOperatorInput>
}

export type SitePluginPackageJsonPeerDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonPeerDependenciesFilterInput>
}

export type SitePluginPluginOptions = {
  __typename?: 'SitePluginPluginOptions'
  spaceId?: Maybe<Scalars['String']>
  accessToken?: Maybe<Scalars['String']>
  downloadLocal?: Maybe<Scalars['Boolean']>
  host?: Maybe<Scalars['String']>
  environment?: Maybe<Scalars['String']>
  forceFullSync?: Maybe<Scalars['Boolean']>
  pageLimit?: Maybe<Scalars['Int']>
  assetDownloadWorkers?: Maybe<Scalars['Int']>
  useNameForId?: Maybe<Scalars['Boolean']>
  path?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  base64Width?: Maybe<Scalars['Int']>
  stripMetadata?: Maybe<Scalars['Boolean']>
  defaultQuality?: Maybe<Scalars['Int']>
  failOnError?: Maybe<Scalars['Boolean']>
  displayName?: Maybe<Scalars['Boolean']>
  fileName?: Maybe<Scalars['Boolean']>
  minify?: Maybe<Scalars['Boolean']>
  transpileTemplateLiterals?: Maybe<Scalars['Boolean']>
  pure?: Maybe<Scalars['Boolean']>
  pathCheck?: Maybe<Scalars['Boolean']>
  allExtensions?: Maybe<Scalars['Boolean']>
  isTSX?: Maybe<Scalars['Boolean']>
  jsxPragma?: Maybe<Scalars['String']>
}

export type SitePluginPluginOptionsFilterInput = {
  spaceId?: Maybe<StringQueryOperatorInput>
  accessToken?: Maybe<StringQueryOperatorInput>
  downloadLocal?: Maybe<BooleanQueryOperatorInput>
  host?: Maybe<StringQueryOperatorInput>
  environment?: Maybe<StringQueryOperatorInput>
  forceFullSync?: Maybe<BooleanQueryOperatorInput>
  pageLimit?: Maybe<IntQueryOperatorInput>
  assetDownloadWorkers?: Maybe<IntQueryOperatorInput>
  useNameForId?: Maybe<BooleanQueryOperatorInput>
  path?: Maybe<StringQueryOperatorInput>
  name?: Maybe<StringQueryOperatorInput>
  base64Width?: Maybe<IntQueryOperatorInput>
  stripMetadata?: Maybe<BooleanQueryOperatorInput>
  defaultQuality?: Maybe<IntQueryOperatorInput>
  failOnError?: Maybe<BooleanQueryOperatorInput>
  displayName?: Maybe<BooleanQueryOperatorInput>
  fileName?: Maybe<BooleanQueryOperatorInput>
  minify?: Maybe<BooleanQueryOperatorInput>
  transpileTemplateLiterals?: Maybe<BooleanQueryOperatorInput>
  pure?: Maybe<BooleanQueryOperatorInput>
  pathCheck?: Maybe<BooleanQueryOperatorInput>
  allExtensions?: Maybe<BooleanQueryOperatorInput>
  isTSX?: Maybe<BooleanQueryOperatorInput>
  jsxPragma?: Maybe<StringQueryOperatorInput>
}

export type SitePluginSortInput = {
  fields?: Maybe<Array<Maybe<SitePluginFieldsEnum>>>
  order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type SiteSiteMetadata = {
  __typename?: 'SiteSiteMetadata'
  title?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
}

export type SiteSiteMetadataFilterInput = {
  title?: Maybe<StringQueryOperatorInput>
  description?: Maybe<StringQueryOperatorInput>
}

export type SiteSortInput = {
  fields?: Maybe<Array<Maybe<SiteFieldsEnum>>>
  order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export enum SortOrderEnum {
  Asc = 'ASC',
  Desc = 'DESC',
}

export type StringQueryOperatorInput = {
  eq?: Maybe<Scalars['String']>
  ne?: Maybe<Scalars['String']>
  in?: Maybe<Array<Maybe<Scalars['String']>>>
  nin?: Maybe<Array<Maybe<Scalars['String']>>>
  regex?: Maybe<Scalars['String']>
  glob?: Maybe<Scalars['String']>
}

export type TransformOptions = {
  grayscale?: Maybe<Scalars['Boolean']>
  duotone?: Maybe<DuotoneGradient>
  rotate?: Maybe<Scalars['Int']>
  trim?: Maybe<Scalars['Float']>
  cropFocus?: Maybe<ImageCropFocus>
  fit?: Maybe<ImageFit>
}

export type WebPOptions = {
  quality?: Maybe<Scalars['Int']>
}

export type GatsbyImageSharpFixedFragment = {
  __typename?: 'ImageSharpFixed'
} & Pick<ImageSharpFixed, 'base64' | 'width' | 'height' | 'src' | 'srcSet'>

export type GatsbyImageSharpFixed_TracedSvgFragment = {
  __typename?: 'ImageSharpFixed'
} & Pick<ImageSharpFixed, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet'>

export type GatsbyImageSharpFixed_WithWebpFragment = {
  __typename?: 'ImageSharpFixed'
} & Pick<
  ImageSharpFixed,
  'base64' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'
>

export type GatsbyImageSharpFixed_WithWebp_TracedSvgFragment = {
  __typename?: 'ImageSharpFixed'
} & Pick<
  ImageSharpFixed,
  'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'
>

export type GatsbyImageSharpFixed_NoBase64Fragment = {
  __typename?: 'ImageSharpFixed'
} & Pick<ImageSharpFixed, 'width' | 'height' | 'src' | 'srcSet'>

export type GatsbyImageSharpFixed_WithWebp_NoBase64Fragment = {
  __typename?: 'ImageSharpFixed'
} & Pick<
  ImageSharpFixed,
  'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'
>

export type GatsbyImageSharpFluidFragment = {
  __typename?: 'ImageSharpFluid'
} & Pick<ImageSharpFluid, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>

export type GatsbyImageSharpFluidLimitPresentationSizeFragment = {
  __typename?: 'ImageSharpFluid'
} & {
  maxHeight: ImageSharpFluid['presentationHeight']
  maxWidth: ImageSharpFluid['presentationWidth']
}

export type GatsbyImageSharpFluid_TracedSvgFragment = {
  __typename?: 'ImageSharpFluid'
} & Pick<
  ImageSharpFluid,
  'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'
>

export type GatsbyImageSharpFluid_WithWebpFragment = {
  __typename?: 'ImageSharpFluid'
} & Pick<
  ImageSharpFluid,
  | 'base64'
  | 'aspectRatio'
  | 'src'
  | 'srcSet'
  | 'srcWebp'
  | 'srcSetWebp'
  | 'sizes'
>

export type GatsbyImageSharpFluid_WithWebp_TracedSvgFragment = {
  __typename?: 'ImageSharpFluid'
} & Pick<
  ImageSharpFluid,
  | 'tracedSVG'
  | 'aspectRatio'
  | 'src'
  | 'srcSet'
  | 'srcWebp'
  | 'srcSetWebp'
  | 'sizes'
>

export type GatsbyImageSharpFluid_NoBase64Fragment = {
  __typename?: 'ImageSharpFluid'
} & Pick<ImageSharpFluid, 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>

export type GatsbyImageSharpFluid_WithWebp_NoBase64Fragment = {
  __typename?: 'ImageSharpFluid'
} & Pick<
  ImageSharpFluid,
  'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'
>

export type GatsbyImageSharpResolutionsFragment = {
  __typename?: 'ImageSharpResolutions'
} & Pick<
  ImageSharpResolutions,
  'base64' | 'width' | 'height' | 'src' | 'srcSet'
>

export type GatsbyImageSharpResolutions_TracedSvgFragment = {
  __typename?: 'ImageSharpResolutions'
} & Pick<
  ImageSharpResolutions,
  'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet'
>

export type GatsbyImageSharpResolutions_WithWebpFragment = {
  __typename?: 'ImageSharpResolutions'
} & Pick<
  ImageSharpResolutions,
  'base64' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'
>

export type GatsbyImageSharpResolutions_WithWebp_TracedSvgFragment = {
  __typename?: 'ImageSharpResolutions'
} & Pick<
  ImageSharpResolutions,
  'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'
>

export type GatsbyImageSharpResolutions_NoBase64Fragment = {
  __typename?: 'ImageSharpResolutions'
} & Pick<ImageSharpResolutions, 'width' | 'height' | 'src' | 'srcSet'>

export type GatsbyImageSharpResolutions_WithWebp_NoBase64Fragment = {
  __typename?: 'ImageSharpResolutions'
} & Pick<
  ImageSharpResolutions,
  'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'
>

export type GatsbyImageSharpSizesFragment = {
  __typename?: 'ImageSharpSizes'
} & Pick<ImageSharpSizes, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>

export type GatsbyImageSharpSizes_TracedSvgFragment = {
  __typename?: 'ImageSharpSizes'
} & Pick<
  ImageSharpSizes,
  'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'
>

export type GatsbyImageSharpSizes_WithWebpFragment = {
  __typename?: 'ImageSharpSizes'
} & Pick<
  ImageSharpSizes,
  | 'base64'
  | 'aspectRatio'
  | 'src'
  | 'srcSet'
  | 'srcWebp'
  | 'srcSetWebp'
  | 'sizes'
>

export type GatsbyImageSharpSizes_WithWebp_TracedSvgFragment = {
  __typename?: 'ImageSharpSizes'
} & Pick<
  ImageSharpSizes,
  | 'tracedSVG'
  | 'aspectRatio'
  | 'src'
  | 'srcSet'
  | 'srcWebp'
  | 'srcSetWebp'
  | 'sizes'
>

export type GatsbyImageSharpSizes_NoBase64Fragment = {
  __typename?: 'ImageSharpSizes'
} & Pick<ImageSharpSizes, 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>

export type GatsbyImageSharpSizes_WithWebp_NoBase64Fragment = {
  __typename?: 'ImageSharpSizes'
} & Pick<
  ImageSharpSizes,
  'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'
>

export type AboutMeQueryVariables = Exact<{ [key: string]: never }>

export type AboutMeQuery = { __typename?: 'Query' } & {
  contentfulHomepageAboutMe?: Maybe<
    { __typename?: 'ContentfulHomepageAboutMe' } & {
      text?: Maybe<
        { __typename?: 'ContentfulHomepageAboutMeText' } & Pick<
          ContentfulHomepageAboutMeText,
          'raw'
        >
      >
      image?: Maybe<
        { __typename?: 'ContentfulAsset' } & {
          localFile?: Maybe<
            { __typename?: 'File' } & {
              childImageSharp?: Maybe<
                { __typename?: 'ImageSharp' } & {
                  fluid?: Maybe<
                    {
                      __typename?: 'ImageSharpFluid'
                    } & GatsbyImageSharpFluidFragment
                  >
                }
              >
            }
          >
        }
      >
    }
  >
}

export type FeaturedQueryVariables = Exact<{ [key: string]: never }>

export type FeaturedQuery = { __typename?: 'Query' } & {
  contentfulHomepageFeatured?: Maybe<
    { __typename?: 'ContentfulHomepageFeatured' } & {
      projects?: Maybe<
        Array<
          Maybe<{ __typename?: 'ContentfulProject' } & ProjectThumbnailFragment>
        >
      >
      themes?: Maybe<
        Array<
          Maybe<{ __typename?: 'ContentfulTheme' } & ThemeThumbnailFragment>
        >
      >
    }
  >
}

export type FooterQueryVariables = Exact<{ [key: string]: never }>

export type FooterQuery = { __typename?: 'Query' } & {
  contentfulContactInfo?: Maybe<
    { __typename?: 'ContentfulContactInfo' } & Pick<
      ContentfulContactInfo,
      'email' | 'facebookPage' | 'instagramPage' | 'phoneNumber'
    >
  >
  instagram?: Maybe<{ __typename?: 'File' } & Pick<File, 'publicURL'>>
  facebook?: Maybe<{ __typename?: 'File' } & Pick<File, 'publicURL'>>
}

export type GalleryFragment = { __typename?: 'ContentfulAsset' } & Pick<
  ContentfulAsset,
  'id'
> & {
    localFile?: Maybe<
      { __typename?: 'File' } & {
        childImageSharp?: Maybe<
          { __typename?: 'ImageSharp' } & {
            fluid?: Maybe<
              { __typename?: 'ImageSharpFluid' } & GatsbyImageSharpFluidFragment
            >
          }
        >
      }
    >
  }

export type HeaderQueryVariables = Exact<{ [key: string]: never }>

export type HeaderQuery = { __typename?: 'Query' } & {
  contentfulLogo?: Maybe<
    { __typename?: 'ContentfulLogo' } & {
      logo?: Maybe<
        { __typename?: 'ContentfulAsset' } & {
          localFile?: Maybe<{ __typename?: 'File' } & Pick<File, 'publicURL'>>
        }
      >
    }
  >
}

export type HomeJumbotronQueryVariables = Exact<{ [key: string]: never }>

export type HomeJumbotronQuery = { __typename?: 'Query' } & {
  contentfulHomepageJumbotron?: Maybe<
    { __typename?: 'ContentfulHomepageJumbotron' } & Pick<
      ContentfulHomepageJumbotron,
      'text'
    > & {
        image?: Maybe<
          { __typename?: 'ContentfulAsset' } & JumbotronImageFragment
        >
      }
  >
}

export type JumbotronImageFragment = { __typename?: 'ContentfulAsset' } & Pick<
  ContentfulAsset,
  'id'
> & {
    localFile?: Maybe<
      { __typename?: 'File' } & {
        childImageSharp?: Maybe<
          { __typename?: 'ImageSharp' } & {
            fluid?: Maybe<
              { __typename?: 'ImageSharpFluid' } & GatsbyImageSharpFluidFragment
            >
          }
        >
      }
    >
  }

export type LatestWorkQueryVariables = Exact<{ [key: string]: never }>

export type LatestWorkQuery = { __typename?: 'Query' } & {
  contentfulHomepageLatestWork?: Maybe<
    { __typename?: 'ContentfulHomepageLatestWork' } & {
      project?: Maybe<
        { __typename?: 'ContentfulProject' } & Pick<
          ContentfulProject,
          'slug' | 'title'
        > & {
            description?: Maybe<
              { __typename?: 'contentfulProjectDescriptionTextNode' } & Pick<
                ContentfulProjectDescriptionTextNode,
                'description'
              >
            >
          }
      >
      featuredPhotos?: Maybe<
        Array<Maybe<{ __typename?: 'ContentfulAsset' } & GalleryFragment>>
      >
    }
  >
}

export type ProjectThumbnailFragment = {
  __typename?: 'ContentfulProject'
} & Pick<ContentfulProject, 'id' | 'slug' | 'title'> & {
    coverImage?: Maybe<
      { __typename?: 'ContentfulAsset' } & {
        localFile?: Maybe<
          { __typename?: 'File' } & {
            childImageSharp?: Maybe<
              { __typename?: 'ImageSharp' } & {
                fixed?: Maybe<
                  { __typename?: 'ImageSharpFixed' } & Pick<
                    ImageSharpFixed,
                    'src'
                  >
                >
              }
            >
          }
        >
      }
    >
  }

export type ThemeThumbnailFragment = { __typename?: 'ContentfulTheme' } & Pick<
  ContentfulTheme,
  'id' | 'slug' | 'title'
> & {
    coverImage?: Maybe<
      { __typename?: 'ContentfulAsset' } & {
        localFile?: Maybe<
          { __typename?: 'File' } & {
            childImageSharp?: Maybe<
              { __typename?: 'ImageSharp' } & {
                fixed?: Maybe<
                  { __typename?: 'ImageSharpFixed' } & Pick<
                    ImageSharpFixed,
                    'src'
                  >
                >
              }
            >
          }
        >
      }
    >
  }

export type Unnamed_1_QueryVariables = Exact<{ [key: string]: never }>

export type Unnamed_1_Query = { __typename?: 'Query' } & {
  site?: Maybe<
    { __typename?: 'Site' } & {
      siteMetadata?: Maybe<
        { __typename?: 'SiteSiteMetadata' } & Pick<SiteSiteMetadata, 'title'>
      >
    }
  >
}

export type ProjectPagesGeneratorQueryVariables = Exact<{
  [key: string]: never
}>

export type ProjectPagesGeneratorQuery = { __typename?: 'Query' } & {
  allContentfulProject: { __typename?: 'ContentfulProjectConnection' } & {
    nodes: Array<
      { __typename?: 'ContentfulProject' } & Pick<
        ContentfulProject,
        'id' | 'slug'
      >
    >
  }
}

export type GalleryPageQueryVariables = Exact<{ [key: string]: never }>

export type GalleryPageQuery = { __typename?: 'Query' } & {
  allContentfulTheme: { __typename?: 'ContentfulThemeConnection' } & {
    nodes: Array<
      { __typename?: 'ContentfulTheme' } & Pick<
        ContentfulTheme,
        'title' | 'slug'
      > & {
          featuredPhotos?: Maybe<
            Array<Maybe<{ __typename?: 'ContentfulAsset' } & GalleryFragment>>
          >
          coverImage?: Maybe<
            { __typename?: 'ContentfulAsset' } & JumbotronImageFragment
          >
        }
    >
  }
}

export type ProjectPageQueryVariables = Exact<{
  id: Scalars['String']
}>

export type ProjectPageQuery = { __typename?: 'Query' } & {
  contentfulProject?: Maybe<
    { __typename?: 'ContentfulProject' } & Pick<
      ContentfulProject,
      'id' | 'title'
    > & {
        coverImage?: Maybe<
          { __typename?: 'ContentfulAsset' } & JumbotronImageFragment
        >
        photos?: Maybe<
          Array<Maybe<{ __typename?: 'ContentfulAsset' } & GalleryFragment>>
        >
      }
  >
}
