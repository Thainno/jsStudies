const videoResolutions = [
    ['QVGA', '320x240', '4:3'],
    ['FULL HD', '1920x1080', '4:3'],
    ['4K ULTRA HD', '3840x2160', '16:9'],
    ['QVGA', '640x480', '4:3'],
    ['4K ULTRA HD', '3440x1440', '16:9'],
    ['FULL HD', '2560x1080', '16:9']
]

const resolution = videoResolutions.filter((value) =>  {
    if (value[2] == '16:9') return value
})

console.log(resolution)