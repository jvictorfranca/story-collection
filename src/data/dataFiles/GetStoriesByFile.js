import stories from "./stories.json"

import story1 from "./story_1.txt?raw"
import story2 from "./story_2.txt?raw"
import story3 from "./story_3.txt?raw"
import story4 from "./story_4.txt?raw"
import story5 from "./story_5.txt?raw"
import story6 from "./story_6.txt?raw"
import story7 from "./story_7.txt?raw"
import story8 from "./story_8.txt?raw"
import story9 from "./story_9.txt?raw"
import story10 from "./story_10.txt?raw"

const delay = (ms) => {
    return new Promise(resolve => {
        setTimeout(resolve, ms)
    })
}

export const getStoriesList_ByFile = async () => {

    await delay(1000)
    const storiesFromFile = stories
    return {
        status: 200,
        stories: storiesFromFile
    }


}

export const getStoryById_ByFile = async(id) => {
    try{

        await delay(1000)

        const storyFiles = {
            1: story1,
            2: story2,
            3: story3,
            4: story4,
            5: story5,
            6: story6,
            7: story7,
            8: story8,
            9: story9,
            10: story10
        }
    const story= storyFiles[id]

        if (!story) {
            throw new Error("Story not found")
        }

    
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
