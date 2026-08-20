import { getStoriesList_ByFile, getStoryById_ByFile } from "./dataFiles/GetStoriesByFile.js"

export const getStoriesList = async () => {

    const {stories, status} = await getStoriesList_ByFile()
    return { status, stories }

}

export const getStoryById = async(id) => {
    const {story, status} = await getStoryById_ByFile(id)
    return {story, status}
}