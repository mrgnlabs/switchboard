import type {
  CategoryIndexMatcher,
  DocMetadataBase,
} from "@docusaurus/plugin-content-docs";
import path from "path";

// By convention, Docusaurus considers some docs are "indexes":
// - index.md
// - readme.md
// - <folder>/<folder>.md
//
// This function is the default implementation of this convention
//
// Those index docs produce a different behavior
// - Slugs do not end with a weird "/index" suffix
// - Auto-generated sidebar categories link to them as intro
export const isCategoryIndex: CategoryIndexMatcher = ({
  fileName,
  directories,
}): boolean => {
  const eligibleDocIndexNames = [
    "index",
    "readme",
    directories[0]?.toLowerCase(),
  ];
  return eligibleDocIndexNames.includes(fileName.toLowerCase());
};

/**
 * `guides/sidebar/autogenerated.md` ->
 *   `'autogenerated', '.md', ['sidebar', 'guides']`
 */
export function toCategoryIndexMatcherParam({
  source,
  sourceDirName,
}: Pick<
  DocMetadataBase,
  "source" | "sourceDirName"
>): Parameters<CategoryIndexMatcher>[0] {
  // source + sourceDirName are always posix-style
  return {
    fileName: path.posix.parse(source).name,
    extension: path.posix.parse(source).ext,
    directories: sourceDirName.split(path.posix.sep).reverse(),
  };
}
