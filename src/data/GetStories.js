import fs from "fs"

export const getStoriesList = async () => {

    const stories = fs.readFileSync("./src/data/dataFiles/stories.json")
    return {
        status: 200,
        stories: JSON.parse(stories.toString())
    }

}

export const getStoryById = async(id) => {
    try{

    const story= fs.readFileSync(`./src/data/dataFiles/story_${id}.txt`)
    const response =  {
        status: 200,
        story: story.toString()
    }

    console.log(response)

    return response

} catch (e) {
    console.error(e)
        return {
            status: 404,
            story: "404 - History not found"
        }
    }
}
