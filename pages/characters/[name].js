import React from 'react'

export default function getCharacter({res}) {
    console.log('Characters: ', res);
  return (
    <div>Available Characters</div>
  )
}

export async function getServerSideProps({params}) {
    const charId = 'Yelan' //Default to Yelan
    
    //API fetch
    const req = await fetch(`https://api.genshin.dev/characters/${charId}`)
    const data = await req.json();
    return {
        props: {
            res: data
        }
    }
}
