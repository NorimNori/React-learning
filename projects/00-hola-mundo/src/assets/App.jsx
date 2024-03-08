import './App.css'
import TwitterFollowCard from './TwitterFollowCard'

export function App () {
  return (
    <section className='App'>
      <TwitterFollowCard isFollowing userName="Coldplay" initialIsFollowing={true}>
        Coldplay Official
      </TwitterFollowCard>
      <TwitterFollowCard isFollowing={false} userName="Gummibeer">
        Gummibeer bae
      </TwitterFollowCard>
      <TwitterFollowCard isFollowing userName="avrillavigne">
        Avril Lavigne
      </TwitterFollowCard>
      <TwitterFollowCard isFollowing userName="vxnder">
        Vanderhart
      </TwitterFollowCard>
    </section>
  )
}

