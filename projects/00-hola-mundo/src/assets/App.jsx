import './App.css'
import TwitterFollowCard from './TwitterFollowCard'

export function App () {
  const formatUserName = (userName) => `@${userName}`

  return (
    <section className='App'>
      <TwitterFollowCard formatUserName={formatUserName}isFollowing userName="Coldplay" name="Coldplay Official"/>
      <TwitterFollowCard formatUserName={formatUserName} isFollowing={false} userName="Gummibeer" name="Gimmibeer bae"/>
      <TwitterFollowCard formatUserName={formatUserName} isFollowing userName="avrillavigne" name="Avril Lavinge"/>
      <TwitterFollowCard formatUserName={formatUserName} isFollowing userName="vxnder" name="Vanderhart"/>
    </section>
  )
}

