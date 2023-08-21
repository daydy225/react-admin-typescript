import { Link } from 'react-router-dom'
import { TMenuData } from '../../../assets/data/menuData'

const MenuItem: React.FC<TMenuData> = ({ title, listItems }) => {
  return (
    <div className="item">
      <span className="title">{title}</span>
      {listItems.map(({ url, icon, title, id }) => (
        <Link
          to={url}
          key={id}
          className="listItem"
        >
          <ImageIcon icon={icon} />
          <ListItemTitle title={title} />
        </Link>
      ))}
    </div>
  )
}

const ImageIcon: React.FC<{ icon: string }> = ({ icon }) => {
  return (
    <img
      src={icon}
      alt=""
    />
  )
}

const ListItemTitle: React.FC<{ title: string }> = ({ title }) => {
  return <span className="listItemTitle">{title}</span>
}

export default MenuItem
