// eslint-disable-next-line react/prop-types
function TwitterFollowCard({ children, userName, isFollowing }) {
  return (
    <>
    <article className="tw-followCard">
      <header>
        <img 
          className="tw-followCard-avatar" 
          alt="Avatar" 
          src={`https://unavatar.io/soundcloud/${userName}`} />
        <div className="tw-followCard-info">
          <strong>{children}</strong>
          <span className="tw-followCard-infoUserName">@{userName}</span>
        </div>
      </header>

      <aside>
        <button className="tw-followCard-button">
          Seguir
        </button>
      </aside>
    </article>
</>
  )
}

export default TwitterFollowCard