const getStoryColor = (slug) => {
    const colors = {
    "tortoise-hare": "from-green-400 to-blue-500",
    "little-red-riding-hood": "from-red-300 to-pink-700",
    "three-little-pigs": "from-yellow-400 to-blue-500",
    "goldilocks-three-bears": "from-orange-600 to-yellow-400",
    "jack-beanstalk": "from-emerald-200 to-green-700"
    }
return colors[slug] || "from-purple-400 to-pink-500"
}

export default getStoryColor