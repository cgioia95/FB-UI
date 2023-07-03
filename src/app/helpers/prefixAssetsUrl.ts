import { getEnv } from "./getEnv";

export const prefixAssetImagesUrl = (filePath: string): string => {
    return `${getEnv().ASSETS_URL}/${filePath}`;
}