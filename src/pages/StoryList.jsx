import { useEffect, useState } from "react"
import StoryCard from "../components/StoryCard"
import { getStoriesList } from "../data/GetStories"
import { useLanguage } from "../context/LanguageContext"
import { Sparkles, Stars } from "lucide-react"

const StoryList = () => {

    const {language, t} =  useLanguage()

    const [stories, setStories] = useState([])

    const [loading, setLoading] = useState(false)
    
    useEffect(() => {
    
        const loadStories = async () => {
            setLoading(true)
        try{
            
            const { status, stories } = await getStoriesList()

            const filtered = stories.filter(story => story.language === language)
            filtered.sort((a, b) => a.id - b.id)

            setStories(filtered || [])

            setLoading(false)


        }catch(e) {

            console.error(e)
            setLoading(false)

        }
 
    }

    loadStories()
    }, [language])

    if(loading) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 flex items-center-justify-center w-screen">

                <div className="text-center w-screen">
                    <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-purple-500 mx-auto mt-20"> </div>
                    <p>Loading magical stories ...</p>
                </div>
            </div>
            )
    }

    
    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50">
            <div className="container mx-auto px-4 py-12">

                <div className="text-center mb-12">
                    <div className="flex items-center justify-center space-x-3 mb-6">

                        <Stars className="w-8 h-8 text-yellow-500 animate-pulse" />
                        <h1> {t("storyList") } </h1>
                        <Sparkles  className="w-8 h-8 text-yellow-500 animate-pulse"/>

                    </div>

                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        {t("storyListSubtitle")}
                    </p>

                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {
                    stories.map((story, index) => (
                        <div key= {story.id } className="animate fade-in" style={{animationDelay: `${index*0.5}s`}}>
                            <StoryCard story={story} />

                        </div>
                    ))
                }
                </div>
            </div>


        </div>

    )
}

export default StoryList