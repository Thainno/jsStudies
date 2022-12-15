const videos = [
    {
        id: '001',
        title: 'Vídeo 001',
        views: 100
    },
    {
        id: '002',
        title: 'Vídeo 002',
        views: 250
    },
    {
        id: '003',
        title: 'Vídeo 003',
        views: 450
    }
]

const totalViews = videos.reduce((sum, videos) => {
    return sum + videos.views
}, -80)

console.log(totalViews)