import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { useLanguage } from "../context/LanguageContext"
import { getStoryById, getStoryDataById } from "../data/GetStories"
import LoadingComponent from "../components/LoadingComponent"
import { ArrowLeft, BookOpen, User } from "lucide-react"
import getStoryColor from "../utils/getStoryColors"

const StoryDetail = () => {

    const [story, setStory] = useState(null)
    const [status, setStatus] = useState(0)
    const [loading, setloading] = useState(false)
    const [storyData, setStoryData] = useState(null)

    const {language, t} = useLanguage()

    const {id} = useParams()

    useEffect(() => {

        const loadStory = async () => {

            try {
                
                setloading(true)
        
                const {story, status} = await getStoryById(id)
                const {storyData} = await getStoryDataById(id)

                console.log(storyData)
                
                setStory(story)
                setStatus(status)
                setStoryData(storyData)


                setloading(false)
            

            } catch (error) {

                console.error(error)
                setloading(false)
                
            }
            
        }

        loadStory()


    }, [])


        if(loading) {
        return (
                <LoadingComponent message={"Loading story..."}/>
            )
    }

        if(status !== 200) {
            return (
                <div className="min-h-screen">
                    <div className="text-center">

                        <p className="text-gray-600 text-xl mb-4" >Story not found</p>
                    </div>
                    <Link to="/">
                    <div className="inline-flex gap-4 px-6 py-3 rounded-full bg-purple-500 ml-4 hover:bg-purple-700 hover:translate-y-2 transition-colors">
                        <ArrowLeft/>
                        <p >Go back to stories</p>
                    </div>
                    </Link>
                </div>
            )
        }

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 p-10">
        
        <div>

            <div className={"flex gap-4 justify-center py-20 bg-gradient-to-br mb-10 " + getStoryColor(storyData.slug)}>
                <BookOpen className="w-16 h-16 drop-shadow-lg"/>
                <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">{storyData?.title || "Title"}</h1>
            </div>

            <div className="flex gap-4 mb-5">
                <User className="w-5 h-5 inline-flex"/>
                <span>{t("author")}: {storyData?.author || "Author"}</span>

            </div>

        </div>
        <div className="container mx-auto px-4 py-12">
            <div className="max-w-4xl mx-auto">
                <div className="bg-white rounded-3x-l shadow-2xl p-8 md:p-12">
                    {story.replaceAll("\\n", "\n").split("\n").map((paragraph, index) => {
                        return(
                            <p
                             key={index}
                             className="text-gray-800 leading-relaxed mb-6 text-lg first-letter:font-bold first-letter:text-2xl first-letter:text-purple-800"
                            >{paragraph}</p>
                        )
                    }) }
                </div>

            </div>
            <div>
            </div>
        </div>
        <Link to="/">
        
            <div className="inline-flex gap-4 px-6 py-3 rounded-full bg-purple-500 ml-4 mt-10 hover:bg-purple-700 hover:translate-y-2 transition-colors">
                <ArrowLeft/>
                <p >Go back to stories</p>
            </div>
        </Link>

        </div>
    )
}

export default StoryDetail