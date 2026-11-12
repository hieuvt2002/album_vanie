import React, { useEffect, useRef, useState } from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const christmasAnimationUrl = new URL('../animation/snow_santa.lottie', import.meta.url).href;

const tracks = [
  {
    name: 'Viva La Vida',
    artist: 'Coldplay',
    img: '/img/vanie_5.jpg',
    duration: 275,
    src: '/music/viva_la_vida.mp3',
  },
  {
    name: 'Dark Paradise',
    artist: 'Lana Del Rey',
    img: '/img/vanie_2.jpg',
    duration: 198,
    src: '/music/dark_paradise.mp3',
  },
  {
    name: 'Beautiful In White',
    artist: 'Shane Filan',
    img: '/img/vanie_3.jpg',
    duration: 275,
    src: '/music/beautiful_in_white.mp3',
  },
  {
    name: 'Just Give Me a Reason',
    artist: 'P!nk',
    img: '/img/vanie_4.jpg',
    duration: 275,
    src: '/music/just_give_me_a_reason.mp3',
  },
  {
    name: 'Hành Trình Có Em',
    artist: 'Phạm Minh Thành',
    img: '/img/vanie_6.jpg',
    duration: 275,
    src: '/music/hanh_trinh_co_em.mp3',
  },
  {
    name: 'Lover',
    artist: 'Taylor Swift',
    img: '/img/vanie_7.jpg',
    duration: 275,
    src: '/music/lover.mp3',
  },
  {
    name: 'Một đời x Người Tốt Nhất Cho Em',
    artist: '14 CASPER',
    img: '/img/vanie_8.jpg',
    duration: 275,
    src: '/music/mot_doi_nguoi_tot_nhat_cho_em.mp3',
  },
  {
    name: 'Photograph',
    artist: 'Ed Sheeran',
    img: '/img/vanie_9.jpg',
    duration: 275,
    src: '/music/photograph.mp3',
  },
  {
    name: 'Nothings Gonna Change My Love For You',
    artist: 'George Benson',
    img: '/img/vanie_10.jpg',
    duration: 275,
    src: '/music/nothing_gonna_change_my_love_for_you.mp3',
  },
  {
    name: 'Radio',
    artist: 'Lana Del Rey',
    img: '/img/vanie_11.jpg',
    duration: 275,
    src: '/music/radio.mp3',
  },
  {
    name: 'She Neva Knows',
    artist: 'JustaTee',
    img: '/img/vanie_12.jpg',
    duration: 275,
    src: '/music/she_neva_knows.mp3',
  },
  {
    name: 'Wild',
    artist: 'MONOGEM',
    img: '/img/vanie_13.jpg',
    duration: 275,
    src: '/music/wild.mp3',
  },
  {
    name: 'For you',
    artist: 'Liam Payne, Rita Ora',
    img: '/img/vanie_14.jpg',
    duration: 275,
    src: '/music/for_you.mp3',
  },
  {
    name: 'Yesterday Once More',
    artist: 'The Carpenters',
    img: '/img/vanie_15.jpg',
    duration: 275,
    src: '/music/for_you.mp3',
  },
  {
    name: 'Opalite',
    artist: 'Taylor Swift',
    img: '/img/vanie_16.jpg',
    duration: 275,
    src: '/music/opalite.mp3',
  },
  {
    name: 'Confess To You',
    artist: '김예림(림킴) ',
    img: '/img/vanie_17.jpg',
    duration: 275,
    src: '/music/confess_to_you.mp3',
  },
  {
    name: 'I',
    artist: 'Taeyeon (태연)',
    img: '/img/vanie_18.jpg',
    duration: 275,
    src: '/music/i.mp3',
  },
  {
    name: 'THẾ GIỚI CỦA ANH ',
    artist: 'TINH HÀ SAY HI',
    img: '/img/vanie_19.jpg',
    duration: 275,
    src: '/music/the_gioi_cua_anh.mp3',
  },
  {
    name: 'Heal The World ',
    artist: 'Michael Jackson',
    img: '/img/vanie_20.jpg',
    duration: 275,
    src: '/music/heal_the_world.mp3',
  },
];

const memories = [
  { image: '/img/vanie_1.jpg', alt: 'memory1', label: 'Chúc Vanie 💕' },
  { image: '/img/vanie_2.jpg', alt: 'memory3', label: 'Luôn rạng rỡ 💖' },
  { image: '/img/vanie_3.jpg', alt: 'memory4', label: 'Xinh đẹp 🌷' },
  { image: '/img/vanie_4.jpg', alt: 'memory5', label: 'Và 💗' },
  { image: '/img/vanie_5.jpg', alt: 'memory6', label: 'Tràn đầy năng lượng 💝' },
];


const floatingEmojis = ['💕', '🌸', '💗', '🌷', '💓', '✨', '🌼', '💝'];
const particleEmojis = ['💕', '💗', '💖', '🌸'];
const letterText = `Gửi cậu, cô gái đặc biệt của tớ ❤️,

Tớ đã dành một chút thời gian để tạo nên album này. Có lẽ tớ không giỏi nói những lời ngọt ngào, nên muốn gửi gắm cảm xúc, tình cảm chân thành của mình qua album này.

Hy vọng khi nghe album này, cậu sẽ mỉm cười mỗi ngày và biết rằng có một người đang dành cho cậu những tình cảm rất đặc biệt.

Mong rằng câu chuyện của chúng ta sẽ có thêm nhiều chương thật đẹp. 💌`;

function formatTime(time) {
  const totalSeconds = Number.isFinite(time) ? Math.floor(time) : 0;
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

function App() {
  const [page, setPage] = useState('home');
  const [christmasThemeEnabled, setChristmasThemeEnabled] = useState(true);
  const [backgroundHearts] = useState(() =>
    Array.from({ length: 22 }, (_, index) => ({
      id: index,
      emoji: floatingEmojis[Math.floor(Math.random() * floatingEmojis.length)],
      left: `${Math.random() * 100}vw`,
      fontSize: `${0.8 + Math.random() * 1.2}rem`,
      animationDuration: `${6 + Math.random() * 10}s`,
      animationDelay: `${-Math.random() * 12}s`,
    })),
  );
  const [playlistTracks, setPlaylistTracks] = useState(tracks);
  const [currentTrack, setCurrentTrack] = useState(0);
  const [draggingTrack, setDraggingTrack] = useState(null);
  const [dragOverTrack, setDragOverTrack] = useState(null);
  const [playing, setPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(tracks[0].duration);
  const [typedLetter, setTypedLetter] = useState('');
  const [particles, setParticles] = useState([]);
  const audioRef = useRef(null);
  const carouselRef = useRef(null);
  const playlistRef = useRef(null);
  const pauseCarouselRef = useRef(false);
  const particleIdRef = useRef(0);
  const dragStateRef = useRef(null);
  const autoPlayTrackRef = useRef(false);
  const activeTrack = playlistTracks[currentTrack];

  useEffect(() => () => {
    if (dragStateRef.current) {
      window.cancelAnimationFrame(dragStateRef.current.frame);
      dragStateRef.current = null;
    }
  }, []);

  useEffect(() => {
    if (page === 'home') {
      audioRef.current?.pause();
      setPlaying(false);
    }
  }, [page]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.pause();
    audio.currentTime = 0;
    setCurrentTime(0);
    setDuration(activeTrack.duration);
    if (autoPlayTrackRef.current) {
      autoPlayTrackRef.current = false;
      audio.play().catch((error) => {
        console.error('Unable to play the selected track:', error);
        setPlaying(false);
      });
    }
  }, [activeTrack.src]);

  useEffect(() => {
    if (page !== 'letter') return undefined;
    setTypedLetter('');
    const characters = Array.from(letterText);
    let index = 0;
    const timer = window.setInterval(() => {
      index += 1;
      setTypedLetter(characters.slice(0, index).join(''));
      if (index >= characters.length) window.clearInterval(timer);
    }, 22);
    return () => window.clearInterval(timer);
  }, [page]);

  useEffect(() => {
    if (page !== 'image-page') return undefined;
    const track = carouselRef.current;
    if (!track) return undefined;

    let animationFrame;
    let offset = 0;
    let halfWidth = 0;
    const calculateHalfWidth = () => {
      const items = track.querySelectorAll('.polaroid');
      const gap = Number.parseFloat(window.getComputedStyle(track).columnGap) || 0;
      halfWidth = Array.from(items)
        .slice(0, Math.floor(items.length / 2))
        .reduce((width, item) => width + item.getBoundingClientRect().width + gap, 0);
    };
    const resizeObserver = new ResizeObserver(calculateHalfWidth);
    resizeObserver.observe(track);
    const calculateTimer = window.setTimeout(calculateHalfWidth, 50);

    const tick = () => {
      if (!pauseCarouselRef.current) {
        offset += 2;
        if (halfWidth > 0 && offset >= halfWidth) offset = 0;
        track.style.transform = `translateX(${-offset}px)`;
      }
      animationFrame = window.requestAnimationFrame(tick);
    };
    animationFrame = window.requestAnimationFrame(tick);

    return () => {
      window.clearTimeout(calculateTimer);
      window.cancelAnimationFrame(animationFrame);
      resizeObserver.disconnect();
    };
  }, [page]);

  useEffect(() => {
    if (!particles.length) return undefined;
    const timer = window.setTimeout(() => setParticles([]), 800);
    return () => window.clearTimeout(timer);
  }, [particles]);

  const goToPage = (nextPage) => {
    if (nextPage === 'music') {
      audioRef.current?.play().catch((error) => {
        console.error('Unable to autoplay the selected track:', error);
        setPlaying(false);
      });
    }
    setPage(nextPage);
    window.scrollTo(0, 0);
  };

  const goHome = () => {
    setPage('home');
  };

  const spawnHearts = (event) => {
    const { clientX: x, clientY: y } = event;
    const newParticles = Array.from({ length: 7 }, () => {
      const angle = (Math.random() * 360 * Math.PI) / 180;
      const distance = 40 + Math.random() * 60;
      return {
        id: particleIdRef.current++,
        emoji: particleEmojis[Math.floor(Math.random() * particleEmojis.length)],
        left: `${x}px`,
        top: `${y}px`,
        dx: `${Math.cos(angle) * distance}px`,
        dy: `${Math.sin(angle) * distance - 40}px`,
      };
    });
    setParticles((existing) => [...existing, ...newParticles]);
  };

  const selectTrack = (index, shouldPlay = false) => {
    if (index === currentTrack) {
      if (shouldPlay) {
        audioRef.current?.play().catch((error) => {
          console.error('Unable to play the selected track:', error);
          setPlaying(false);
        });
      }
      return;
    }
    setPlaying(false);
    autoPlayTrackRef.current = shouldPlay;
    setCurrentTrack(index);
  };

  const changeTrack = (direction) => {
    const nextIndex = (currentTrack + direction + playlistTracks.length) % playlistTracks.length;
    selectTrack(nextIndex, playing);
  };

  const updatePlaylistDropTarget = (drag) => {
    const target = document.elementFromPoint(drag.clientX, drag.clientY)?.closest('[data-track-index]');
    if (!target) return;
    const targetIndex = Number(target.dataset.trackIndex);
    if (!Number.isInteger(targetIndex)) return;
    drag.to = targetIndex;
    setDragOverTrack(targetIndex);
  };

  const autoScrollPlaylist = () => {
    const drag = dragStateRef.current;
    const playlist = playlistRef.current;
    if (!drag || !playlist) return;

    const bounds = playlist.getBoundingClientRect();
    const edgeSize = Math.min(64, bounds.height * 0.22);
    const topDistance = drag.clientY - bounds.top;
    const bottomDistance = bounds.bottom - drag.clientY;

    if (topDistance >= 0 && topDistance < edgeSize) {
      const speed = Math.ceil(14 * (1 - topDistance / edgeSize));
      playlist.scrollTop -= speed;
    } else if (bottomDistance >= 0 && bottomDistance < edgeSize) {
      const speed = Math.ceil(14 * (1 - bottomDistance / edgeSize));
      playlist.scrollTop += speed;
    }

    updatePlaylistDropTarget(drag);
    drag.frame = window.requestAnimationFrame(autoScrollPlaylist);
  };

  const startPlaylistDrag = (event, index) => {
    if (event.button !== 0) return;
    event.preventDefault();
    event.stopPropagation();
    event.currentTarget.setPointerCapture(event.pointerId);
    dragStateRef.current = {
      pointerId: event.pointerId,
      from: index,
      to: index,
      clientX: event.clientX,
      clientY: event.clientY,
      frame: window.requestAnimationFrame(autoScrollPlaylist),
    };
    setDraggingTrack(index);
    setDragOverTrack(index);
  };

  const movePlaylistDrag = (event) => {
    const drag = dragStateRef.current;
    if (!drag || drag.pointerId !== event.pointerId) return;
    drag.clientX = event.clientX;
    drag.clientY = event.clientY;
    updatePlaylistDropTarget(drag);
  };

  const finishPlaylistDrag = (event, shouldReorder) => {
    const drag = dragStateRef.current;
    if (!drag || drag.pointerId !== event.pointerId) return;
    window.cancelAnimationFrame(drag.frame);
    dragStateRef.current = null;
    setDraggingTrack(null);
    setDragOverTrack(null);

    if (!shouldReorder || drag.from === drag.to) return;

    const { from, to } = drag;
    setPlaylistTracks((currentTracks) => {
      const reordered = [...currentTracks];
      const [movedTrack] = reordered.splice(from, 1);
      reordered.splice(to, 0, movedTrack);
      return reordered;
    });
    setCurrentTrack((currentIndex) => {
      if (currentIndex === from) return to;
      if (from < currentIndex && currentIndex <= to) return currentIndex - 1;
      if (to <= currentIndex && currentIndex < from) return currentIndex + 1;
      return currentIndex;
    });
  };

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (audio.paused) {
      audio.play().catch((error) => {
        console.error('Unable to play the selected track:', error);
        setPlaying(false);
      });
    } else {
      audio.pause();
    }
  };

  const seekTrack = (event) => {
    const audio = audioRef.current;
    const bounds = event.currentTarget.getBoundingClientRect();
    if (!audio || !Number.isFinite(audio.duration) || bounds.width === 0) return;
    const percentage = Math.min(1, Math.max(0, (event.clientX - bounds.left) / bounds.width));
    audio.currentTime = percentage * audio.duration;
  };

  const handleTrackEnded = () => {
    const nextIndex = (currentTrack + 1) % playlistTracks.length;
    selectTrack(nextIndex, true);
  };

  const progress = duration > 0 ? Math.min(100, (currentTime / duration) * 100) : 0;
  const track = activeTrack;

  return (
    <>
      <div className="bg-hearts" aria-hidden="true">
        {backgroundHearts.map((heart) => (
          <span key={heart.id} style={heart}>
            {heart.emoji}
          </span>
        ))}
      </div>

      {christmasThemeEnabled && (
        <div className="christmas-animation" aria-hidden="true">
          <DotLottieReact
            src={christmasAnimationUrl}
            loop
            autoplay
            layout={{ fit: 'cover', align: [0.5, 0.5] }}
            style={{ width: '100%', height: '100%' }}
          />
        </div>
      )}

      <button
        className="christmas-toggle"
        type="button"
        onClick={() => setChristmasThemeEnabled((enabled) => !enabled)}
        aria-label={christmasThemeEnabled ? 'Tắt hiệu ứng Giáng sinh' : 'Bật hiệu ứng Giáng sinh'}
        aria-pressed={christmasThemeEnabled}
        title={christmasThemeEnabled ? 'Tắt hiệu ứng Giáng sinh' : 'Bật hiệu ứng Giáng sinh'}
      >
        {christmasThemeEnabled ? '🎄' : '❄️'}
      </button>

      <button
        className={`back-btn ${page !== 'home' ? 'show' : ''}`}
        type="button"
        onClick={goHome}
        aria-label="Quay lại trang chủ"
      >
        ←
      </button>

      <main>
        <section className={`page ${page === 'home' ? 'active' : ''}`} id="home">
          <div className="home-title">Nhạc của Vanie 💕</div>
          <div className="menu-cards">
            <div className="menu-card" onClick={(event) => { goToPage('music'); spawnHearts(event); }}>
              <span className="deco" style={{ top: 8, right: 14 }}>🌸</span>
              <div className="icon">🎵</div>
              <div className="label">Music</div>
            </div>
            <div className="menu-card" onClick={(event) => { goToPage('image-page'); spawnHearts(event); }}>
              <span className="deco" style={{ top: 8, left: 14 }}>🌷</span>
              <div className="icon">🖼️</div>
              <div className="label">Image</div>
            </div>
            <div className="menu-card" onClick={(event) => { goToPage('letter'); spawnHearts(event); }}>
              <span className="deco" style={{ bottom: 8, right: 14 }}>💌</span>
              <div className="icon">✉️</div>
              <div className="label">Letter</div>
            </div>
          </div>
        </section>

        <section className={`page ${page === 'music' ? 'active' : ''}`} id="music">
          <div className="player-card">
            <button className="close-btn" type="button" onClick={goHome} aria-label="Đóng">✕</button>
            <div className="player-header">
              <span className="note">🎵</span>
              <span>MUSIC PLAYER</span>
            </div>
            <div className="album-art">
              <img src={track.img} alt={track.name} />
              <div className="overlay" />
            </div>
            <div className="track-title">{track.name}</div>
            <div className="progress-bar">
              <span className="time">{formatTime(currentTime)}</span>
              <div
                className="progress-track"
                onClick={seekTrack}
                role="slider"
                aria-label="Tiến trình bài hát"
                aria-valuemin={0}
                aria-valuemax={Math.floor(duration)}
                aria-valuenow={Math.floor(currentTime)}
                tabIndex={0}
                onKeyDown={(event) => {
                  if (event.key === 'ArrowRight' && audioRef.current) audioRef.current.currentTime += 5;
                  if (event.key === 'ArrowLeft' && audioRef.current) audioRef.current.currentTime -= 5;
                }}
              >
                <div className="progress-fill" style={{ width: `${progress}%` }} />
                <div className="progress-dot" style={{ left: `${progress}%` }} />
              </div>
              <span className="time">{formatTime(duration)}</span>
            </div>
            <div className="controls">
              <button className="ctrl-btn" type="button" onClick={() => changeTrack(-1)} aria-label="Bài trước">⏮</button>
              <button className="play-btn" type="button" onClick={togglePlay} aria-label={playing ? 'Tạm dừng' : 'Phát'}>
                {playing ? '⏸' : '▶'}
              </button>
              <button className="ctrl-btn" type="button" onClick={() => changeTrack(1)} aria-label="Bài tiếp theo">⏭</button>
            </div>
            <div className="playlist" ref={playlistRef}>
              {playlistTracks.map((playlistTrack, index) => (
                <div
                  className={[
                    'playlist-item',
                    index === currentTrack ? 'active' : '',
                    index === draggingTrack ? 'dragging' : '',
                    index === dragOverTrack && index !== draggingTrack ? 'drag-over' : '',
                  ].filter(Boolean).join(' ')}
                  key={playlistTrack.src}
                  data-track-index={index}
                  onClick={() => selectTrack(index, true)}
                >
                  <img className="playlist-thumb" src={playlistTrack.img} alt="" />
                  <div className="playlist-info">
                    <div className="pname">{playlistTrack.name}</div>
                    <div className="partist">{playlistTrack.artist}</div>
                  </div>
                  <button
                    className="playlist-drag-handle"
                    type="button"
                    aria-label={`Kéo để đổi thứ tự bài ${playlistTrack.name}`}
                    title="Kéo để đổi thứ tự"
                    onClick={(event) => event.stopPropagation()}
                    onPointerDown={(event) => startPlaylistDrag(event, index)}
                    onPointerMove={movePlaylistDrag}
                    onPointerUp={(event) => finishPlaylistDrag(event, true)}
                    onPointerCancel={(event) => finishPlaylistDrag(event, false)}
                  >
                    <span aria-hidden="true">⠿</span>
                  </button>
                </div>
              ))}
            </div>
          </div>
          <audio
            ref={audioRef}
            src={track.src}
            onTimeUpdate={(event) => setCurrentTime(event.currentTarget.currentTime)}
            onLoadedMetadata={(event) => setDuration(event.currentTarget.duration || track.duration)}
            onPlay={() => setPlaying(true)}
            onPause={() => setPlaying(false)}
            onEnded={handleTrackEnded}
            onError={(event) => {
              if (event.currentTarget.error) console.error('Unable to load the selected track.', event.currentTarget.error);
            }}
          />
        </section>

        <section className={`page ${page === 'letter' ? 'active' : ''}`} id="letter">
          <div className="letter-card">
            <button className="close-btn" type="button" onClick={goHome} aria-label="Đóng">✕</button>
            <div className="letter-heading">
              <span className="letter-kicker">A LITTLE NOTE FOR YOU</span>
              <h1>Gửi Vanie <span aria-hidden="true">💌</span></h1>
              <span className="letter-divider" aria-hidden="true">✦</span>
            </div>
            <div className="letter-content" aria-live="polite">
              {typedLetter}<span className="cursor" />
            </div>
            {typedLetter.length === Array.from(letterText).length && (
              <div className="letter-signature">Thương mến, <span>💕</span></div>
            )}
            <div className="letter-bear">🐻</div>
          </div>
        </section>

        <section className={`page ${page === 'image-page' ? 'active' : ''}`} id="image-page">
          <div style={{ textAlign: 'center', marginBottom: 4 }}>
            <div className="home-title" style={{ fontSize: '1.5rem' }}>Kỷ Niệm 💝</div>
          </div>
          <div
            className="carousel-wrapper"
            onMouseEnter={() => { pauseCarouselRef.current = true; }}
            onMouseLeave={() => { pauseCarouselRef.current = false; }}
          >
            <div className="carousel-track" ref={carouselRef}>
              {[...memories, ...memories].map((memory, index) => (
                <div className="polaroid" key={`${memory.image}-${index}`}>
                  <img src={memory.image} alt={memory.alt} />
                  <div className="polaroid-label">{memory.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="carousel-dots" aria-hidden="true">
            {Array.from({ length: 8 }, (_, index) => <span key={index} />)}
          </div>
          <button
            className="gallery-back-btn"
            type="button"
            onClick={goHome}
          >
            ← Quay lại
          </button>
        </section>
      </main>

      {particles.map((particle) => (
        <div
          className="heart-particle"
          key={particle.id}
          style={{
            left: particle.left,
            top: particle.top,
            '--dx': particle.dx,
            '--dy': particle.dy,
          }}
        >
          {particle.emoji}
        </div>
      ))}
    </>
  );
}

export default App;
