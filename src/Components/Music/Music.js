import React, { useState, useEffect, useRef } from 'react'

import './Music.css'

const playerState = {
  playing: 'playing',
  paused: 'paused',
  stopped: 'stopped'
}

const Music = () => {
  const [data, setData] = useState({
    items: [],
    error: null
  })

  const [player, setPlayer] = useState({
    id: null,
    stream: null,
    state: playerState.stopped
  })

  const prevPlayer = useRef(player)

  useEffect(() => {
    fetch('https://api.dantran.fr/music')
			.then(result => result.json())
			.then(result => {
        setData({
          items: result.reverse()
        })
			}, error => {
        setData({
          error: error
        })
      })
    
    return () =>  {
      const player = prevPlayer.current
      if (player.state !== playerState.stopped) {
        player.stream.pause()
      }
    }
    // eslint-disable-next-line
  }, [])

  useEffect(() => {
    prevPlayer.current = player
  }, [player])

  const play = (id) => {
    const url = 'https://object.dantran.fr/music/' + id + '/audio'
    const stream = new Audio(url)
    stream.play()
    setPlayer({
      id: id,
      stream: stream,
      state: playerState.playing
    })
  }

	const stop = () => {
		const stream = player.stream
		stream.pause()
		stream.currentTime = 0
    setPlayer({
      id: null,
      stream: null,
      state: playerState.stopped
    })
	}

	const handleMusics = (event) => {
		const nextId = event.currentTarget.getAttribute('key-id')
		const { id, stream } = player
		if (nextId === id) {
			stop()
			return
		}
		if (stream === null) {
			play(nextId)
		} else {
			stop()
			play(nextId)
		}
	}

	const handleButton = () => {
		const { stream, state } = player
		if (state === playerState.playing) {
			stream.pause()
      setPlayer({
        stream: stream,
        state: playerState.paused
      })
		} else if (state === playerState.paused) {
			stream.play()
			setPlayer({
        stream: stream,
        state: playerState.playing
      })
		}
	}

  if (data.error) {
    return <div>Error: {data.error.message}</div>
  } 

  return (
    <div className='Music'>
      <p className='MusicCaption'>
        Click on covers to play/stop
      </p>
      <MusicList
        items={data.items}
        onPress={(e) => handleMusics(e)}
      />
      <MusicButton
        state={player.state}
        states={playerState}
        onPress={handleButton}
      />
    </div>
  )
}

const MusicList = ({ items, onPress }) => {
  return (
    <ul className='MusicList'>
      {items.map((item) => (
        <li
          className='MusicItem'
          key={item._id}
          key-id={item._id}
          onClick={(e) => onPress(e)}
        >
          <img
            className='MusicItemImage'
            src={'https://object.dantran.fr/music/' + item._id + '/image'}
            alt={item._id}
          />
          <div className='MusicItemInfo'>
            <p>{item.artist} - {item.title}</p>
            <p>{item.album}</p>
            <p>&#8471; {item.year} {item.label}</p>
          </div>
        </li>
      ))}
    </ul>
  )
}

const MusicButton = ({ state, onPress }) => {
  if (state !== playerState.stopped) {
    return (
      <span id='MusicButton' className='material-icons' onClick={onPress}>
        {state === playerState.playing ? 'pause' : 'play_arrow'}
      </span>
    )
  }
  return null
}

export default Music
