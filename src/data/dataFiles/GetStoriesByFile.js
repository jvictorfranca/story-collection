import fs from "fs"

export const getStoriesList_ByFile = async () => {

    const stories = fs.readFileSync("./src/data/dataFiles/stories.json")
    return {
        status: 200,
        stories: JSON.parse(stories.toString())
    }

}

export const getStoryById_ByFile = async(id) => {
    try{

    const story= fs.readFileSync(`./src/data/dataFiles/story_${id}.txt`)
    const response =  {
        status: 200,
        story: story.toString()
    }


    return response

} catch (e) {
        return {
            status: 404,
            story: "404 - History not found"
        }
    }
}
