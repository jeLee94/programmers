//1. 장르별로 정보를 담을 해시테이블(객체) 생성 
//2. key: 장르, value: 장르별 총 플레이 횟수/{현재 음악의 순서, 플레이횟수}
//3. 총횟수, 재생횟수 기준으로 정렬(재생횟수가 같으면 고유번호 오름차순)
//4. 2개씩 slice하여 베스트 앨범에 push

function solution(genres, plays) {
    let songInfo = {}
    for(let i=0; i<genres.length; i++){
        let genre = genres[i]
        let playCount = plays[i]
        if(songInfo[genre] === undefined){
            songInfo[genre] = {
                totalCount : playCount,
                songs : [{index: i, playCount}],
            }
        }else{
            songInfo[genre].totalCount += playCount
            songInfo[genre].songs.push({index:i, playCount})
        }
    }
    
    let bestAlbum = []
    const sortedGenre = Object.keys(songInfo).sort((a,b)=>
        songInfo[b].totalCount - songInfo[a].totalCount
    )
    
    for(const genre of sortedGenre){
        let songs = songInfo[genre].songs
        songs.sort((a,b)=>{
            if(b.playCount === a.playCount){
               return a.index - b.index
            }else{
                return b.playCount - a.playCount
            }
        })
        const selectedSong = songs.slice(0,2);
        for(const {index} of selectedSong){
            bestAlbum.push(index)
        }
    }
    return bestAlbum
    
}