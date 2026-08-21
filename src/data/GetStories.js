import { getStoriesList_ByFile, getStoryById_ByFile } from "./dataFiles/getStoriesByFile.js"

export const getStoriesList = async () => {

    const {stories, status} = await getStoriesList_ByFile()
    return { status, stories }

}

export const getStoryDataById = async (id) => {

    const {stories, status} = await getStoriesList_ByFile()
    const filteredStory = stories.find(story => story.id == id)
    return {
        storyData: filteredStory, status
}
}

export const getStoryById = async(id) => {
    const {story, status} = await getStoryById_ByFile(id)
    return {story, status}
}