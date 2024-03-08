import './App.css'
import TwitterFollowCard from './TwitterFollowCard'

export function App () {
const users = [
  {
    userName: 'Coldplay',
    name: 'Coldplay Official',
    isFollowing: true
  },
  {
    userName: 'Gummibeer',
    name: 'Gummibeer bae',
    isFollowing: false
  },
  {
    userName: 'avrillavigne',
    name: 'Avril Lavigne',
    isFollowing: true
  },
  {
    userName: 'vxnder',
    name: 'Vanderhart',
    isFollowing: false
  },
]
  
  return (
    <section className='App'>
      {
        users.map(({ userName, name, isFollowing }) => (
          <TwitterFollowCard
            key={userName}
            userName={userName}
            initialIsFollowing={isFollowing}
          >
            {name}
          </TwitterFollowCard>
        ))
      }
    </section>
  )
}

