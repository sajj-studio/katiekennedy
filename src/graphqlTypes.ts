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
    parent?: Maybe<Node>
    children: Array<Node>
    internal: Internal
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
  ThemesHomepageFeaturedProjectsHomepageFeatured = 'themes___homepage___featured___projects___homepage___featured',
  ThemesHomepageFeaturedProjectsSpaceId = 'themes___homepage___featured___projects___spaceId',
  ThemesHomepageFeaturedProjectsCreatedAt = 'themes___homepage___featured___projects___createdAt',
  ThemesHomepageFeaturedProjectsUpdatedAt = 'themes___homepage___featured___projects___updatedAt',
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
  ProjectsHomepageFeaturedProjectsHomepageFeatured = 'projects___homepage___featured___projects___homepage___featured',
  ProjectsHomepageFeaturedProjectsSpaceId = 'projects___homepage___featured___projects___spaceId',
  ProjectsHomepageFeaturedProjectsCreatedAt = 'projects___homepage___featured___projects___createdAt',
  ProjectsHomepageFeaturedProjectsUpdatedAt = 'projects___homepage___featured___projects___updatedAt',
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
  ProjectsSpaceId = 'projects___spaceId',
  ProjectsCreatedAt = 'projects___createdAt',
  ProjectsUpdatedAt = 'projects___updatedAt',
  ProjectsSysType = 'projects___sys___type',
  ProjectsSysRevision = 'projects___sys___revision',
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
    parent?: Maybe<Node>
    children: Array<Node>
    internal: Internal
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
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
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
    coverImage?: Maybe<ContentfulAsset>
    homepage___featured?: Maybe<Array<Maybe<ContentfulHomepageFeatured>>>
    spaceId?: Maybe<Scalars['String']>
    createdAt?: Maybe<Scalars['Date']>
    updatedAt?: Maybe<Scalars['Date']>
    sys?: Maybe<ContentfulProjectSys>
    parent?: Maybe<Node>
    children: Array<Node>
    internal: Internal
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
  HomepageFeaturedProjectsCoverImageContentfulId = 'homepage___featured___projects___coverImage___contentful_id',
  HomepageFeaturedProjectsCoverImageId = 'homepage___featured___projects___coverImage___id',
  HomepageFeaturedProjectsCoverImageSpaceId = 'homepage___featured___projects___coverImage___spaceId',
  HomepageFeaturedProjectsCoverImageCreatedAt = 'homepage___featured___projects___coverImage___createdAt',
  HomepageFeaturedProjectsCoverImageUpdatedAt = 'homepage___featured___projects___coverImage___updatedAt',
  HomepageFeaturedProjectsCoverImageTitle = 'homepage___featured___projects___coverImage___title',
  HomepageFeaturedProjectsCoverImageDescription = 'homepage___featured___projects___coverImage___description',
  HomepageFeaturedProjectsCoverImageNodeLocale = 'homepage___featured___projects___coverImage___node_locale',
  HomepageFeaturedProjectsCoverImageChildren = 'homepage___featured___projects___coverImage___children',
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
  HomepageFeaturedProjectsSpaceId = 'homepage___featured___projects___spaceId',
  HomepageFeaturedProjectsCreatedAt = 'homepage___featured___projects___createdAt',
  HomepageFeaturedProjectsUpdatedAt = 'homepage___featured___projects___updatedAt',
  HomepageFeaturedProjectsSysType = 'homepage___featured___projects___sys___type',
  HomepageFeaturedProjectsSysRevision = 'homepage___featured___projects___sys___revision',
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

export type ContentfulProjectFilterInput = {
  contentful_id?: Maybe<StringQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  node_locale?: Maybe<StringQueryOperatorInput>
  title?: Maybe<StringQueryOperatorInput>
  slug?: Maybe<StringQueryOperatorInput>
  coverImage?: Maybe<ContentfulAssetFilterInput>
  homepage___featured?: Maybe<ContentfulHomepageFeaturedFilterListInput>
  spaceId?: Maybe<StringQueryOperatorInput>
  createdAt?: Maybe<DateQueryOperatorInput>
  updatedAt?: Maybe<DateQueryOperatorInput>
  sys?: Maybe<ContentfulProjectSysFilterInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
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
  HomepageFeaturedProjectsCoverImageContentfulId = 'homepage___featured___projects___coverImage___contentful_id',
  HomepageFeaturedProjectsCoverImageId = 'homepage___featured___projects___coverImage___id',
  HomepageFeaturedProjectsCoverImageSpaceId = 'homepage___featured___projects___coverImage___spaceId',
  HomepageFeaturedProjectsCoverImageCreatedAt = 'homepage___featured___projects___coverImage___createdAt',
  HomepageFeaturedProjectsCoverImageUpdatedAt = 'homepage___featured___projects___coverImage___updatedAt',
  HomepageFeaturedProjectsCoverImageTitle = 'homepage___featured___projects___coverImage___title',
  HomepageFeaturedProjectsCoverImageDescription = 'homepage___featured___projects___coverImage___description',
  HomepageFeaturedProjectsCoverImageNodeLocale = 'homepage___featured___projects___coverImage___node_locale',
  HomepageFeaturedProjectsCoverImageChildren = 'homepage___featured___projects___coverImage___children',
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
  HomepageFeaturedProjectsSpaceId = 'homepage___featured___projects___spaceId',
  HomepageFeaturedProjectsCreatedAt = 'homepage___featured___projects___createdAt',
  HomepageFeaturedProjectsUpdatedAt = 'homepage___featured___projects___updatedAt',
  HomepageFeaturedProjectsSysType = 'homepage___featured___projects___sys___type',
  HomepageFeaturedProjectsSysRevision = 'homepage___featured___projects___sys___revision',
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
  coverImage?: Maybe<ContentfulAssetFilterInput>
  homepage___featured?: Maybe<ContentfulHomepageFeaturedFilterListInput>
  spaceId?: Maybe<StringQueryOperatorInput>
  createdAt?: Maybe<DateQueryOperatorInput>
  updatedAt?: Maybe<DateQueryOperatorInput>
  sys?: Maybe<ContentfulProjectSysFilterInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
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
  browserAPIs?: Maybe<StringQueryOperatorInput>
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
  PluginCreatorPluginOptionsBase64Width = 'pluginCreator___pluginOptions___base64Width',
  PluginCreatorPluginOptionsStripMetadata = 'pluginCreator___pluginOptions___stripMetadata',
  PluginCreatorPluginOptionsDefaultQuality = 'pluginCreator___pluginOptions___defaultQuality',
  PluginCreatorPluginOptionsFailOnError = 'pluginCreator___pluginOptions___failOnError',
  PluginCreatorPluginOptionsDisplayName = 'pluginCreator___pluginOptions___displayName',
  PluginCreatorPluginOptionsFileName = 'pluginCreator___pluginOptions___fileName',
  PluginCreatorPluginOptionsMinify = 'pluginCreator___pluginOptions___minify',
  PluginCreatorPluginOptionsTranspileTemplateLiterals = 'pluginCreator___pluginOptions___transpileTemplateLiterals',
  PluginCreatorPluginOptionsPure = 'pluginCreator___pluginOptions___pure',
  PluginCreatorPluginOptionsName = 'pluginCreator___pluginOptions___name',
  PluginCreatorPluginOptionsShortName = 'pluginCreator___pluginOptions___short_name',
  PluginCreatorPluginOptionsStartUrl = 'pluginCreator___pluginOptions___start_url',
  PluginCreatorPluginOptionsBackgroundColor = 'pluginCreator___pluginOptions___background_color',
  PluginCreatorPluginOptionsThemeColor = 'pluginCreator___pluginOptions___theme_color',
  PluginCreatorPluginOptionsDisplay = 'pluginCreator___pluginOptions___display',
  PluginCreatorPluginOptionsIcon = 'pluginCreator___pluginOptions___icon',
  PluginCreatorPluginOptionsLegacy = 'pluginCreator___pluginOptions___legacy',
  PluginCreatorPluginOptionsThemeColorInHead = 'pluginCreator___pluginOptions___theme_color_in_head',
  PluginCreatorPluginOptionsCacheBustingMode = 'pluginCreator___pluginOptions___cache_busting_mode',
  PluginCreatorPluginOptionsCrossOrigin = 'pluginCreator___pluginOptions___crossOrigin',
  PluginCreatorPluginOptionsIncludeFavicon = 'pluginCreator___pluginOptions___include_favicon',
  PluginCreatorPluginOptionsPathCheck = 'pluginCreator___pluginOptions___pathCheck',
  PluginCreatorPluginOptionsAllExtensions = 'pluginCreator___pluginOptions___allExtensions',
  PluginCreatorPluginOptionsIsTsx = 'pluginCreator___pluginOptions___isTSX',
  PluginCreatorPluginOptionsJsxPragma = 'pluginCreator___pluginOptions___jsxPragma',
  PluginCreatorNodeApIs = 'pluginCreator___nodeAPIs',
  PluginCreatorBrowserApIs = 'pluginCreator___browserAPIs',
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
  browserAPIs?: Maybe<Array<Maybe<Scalars['String']>>>
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
  PluginOptionsBase64Width = 'pluginOptions___base64Width',
  PluginOptionsStripMetadata = 'pluginOptions___stripMetadata',
  PluginOptionsDefaultQuality = 'pluginOptions___defaultQuality',
  PluginOptionsFailOnError = 'pluginOptions___failOnError',
  PluginOptionsDisplayName = 'pluginOptions___displayName',
  PluginOptionsFileName = 'pluginOptions___fileName',
  PluginOptionsMinify = 'pluginOptions___minify',
  PluginOptionsTranspileTemplateLiterals = 'pluginOptions___transpileTemplateLiterals',
  PluginOptionsPure = 'pluginOptions___pure',
  PluginOptionsName = 'pluginOptions___name',
  PluginOptionsShortName = 'pluginOptions___short_name',
  PluginOptionsStartUrl = 'pluginOptions___start_url',
  PluginOptionsBackgroundColor = 'pluginOptions___background_color',
  PluginOptionsThemeColor = 'pluginOptions___theme_color',
  PluginOptionsDisplay = 'pluginOptions___display',
  PluginOptionsIcon = 'pluginOptions___icon',
  PluginOptionsLegacy = 'pluginOptions___legacy',
  PluginOptionsThemeColorInHead = 'pluginOptions___theme_color_in_head',
  PluginOptionsCacheBustingMode = 'pluginOptions___cache_busting_mode',
  PluginOptionsCrossOrigin = 'pluginOptions___crossOrigin',
  PluginOptionsIncludeFavicon = 'pluginOptions___include_favicon',
  PluginOptionsPathCheck = 'pluginOptions___pathCheck',
  PluginOptionsAllExtensions = 'pluginOptions___allExtensions',
  PluginOptionsIsTsx = 'pluginOptions___isTSX',
  PluginOptionsJsxPragma = 'pluginOptions___jsxPragma',
  NodeApIs = 'nodeAPIs',
  BrowserApIs = 'browserAPIs',
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
  browserAPIs?: Maybe<StringQueryOperatorInput>
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
  base64Width?: Maybe<Scalars['Int']>
  stripMetadata?: Maybe<Scalars['Boolean']>
  defaultQuality?: Maybe<Scalars['Int']>
  failOnError?: Maybe<Scalars['Boolean']>
  displayName?: Maybe<Scalars['Boolean']>
  fileName?: Maybe<Scalars['Boolean']>
  minify?: Maybe<Scalars['Boolean']>
  transpileTemplateLiterals?: Maybe<Scalars['Boolean']>
  pure?: Maybe<Scalars['Boolean']>
  name?: Maybe<Scalars['String']>
  short_name?: Maybe<Scalars['String']>
  start_url?: Maybe<Scalars['String']>
  background_color?: Maybe<Scalars['String']>
  theme_color?: Maybe<Scalars['String']>
  display?: Maybe<Scalars['String']>
  icon?: Maybe<Scalars['String']>
  legacy?: Maybe<Scalars['Boolean']>
  theme_color_in_head?: Maybe<Scalars['Boolean']>
  cache_busting_mode?: Maybe<Scalars['String']>
  crossOrigin?: Maybe<Scalars['String']>
  include_favicon?: Maybe<Scalars['Boolean']>
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
  base64Width?: Maybe<IntQueryOperatorInput>
  stripMetadata?: Maybe<BooleanQueryOperatorInput>
  defaultQuality?: Maybe<IntQueryOperatorInput>
  failOnError?: Maybe<BooleanQueryOperatorInput>
  displayName?: Maybe<BooleanQueryOperatorInput>
  fileName?: Maybe<BooleanQueryOperatorInput>
  minify?: Maybe<BooleanQueryOperatorInput>
  transpileTemplateLiterals?: Maybe<BooleanQueryOperatorInput>
  pure?: Maybe<BooleanQueryOperatorInput>
  name?: Maybe<StringQueryOperatorInput>
  short_name?: Maybe<StringQueryOperatorInput>
  start_url?: Maybe<StringQueryOperatorInput>
  background_color?: Maybe<StringQueryOperatorInput>
  theme_color?: Maybe<StringQueryOperatorInput>
  display?: Maybe<StringQueryOperatorInput>
  icon?: Maybe<StringQueryOperatorInput>
  legacy?: Maybe<BooleanQueryOperatorInput>
  theme_color_in_head?: Maybe<BooleanQueryOperatorInput>
  cache_busting_mode?: Maybe<StringQueryOperatorInput>
  crossOrigin?: Maybe<StringQueryOperatorInput>
  include_favicon?: Maybe<BooleanQueryOperatorInput>
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

export type JumbotronQueryVariables = Exact<{ [key: string]: never }>

export type JumbotronQuery = { __typename?: 'Query' } & {
  contentfulHomepageJumbotron?: Maybe<
    { __typename?: 'ContentfulHomepageJumbotron' } & Pick<
      ContentfulHomepageJumbotron,
      'text'
    > & {
        image?: Maybe<
          { __typename?: 'ContentfulAsset' } & {
            localFile?: Maybe<
              { __typename?: 'File' } & {
                childImageSharp?: Maybe<
                  { __typename?: 'ImageSharp' } & {
                    fluid?: Maybe<
                      { __typename?: 'ImageSharpFluid' } & Pick<
                        ImageSharpFluid,
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
