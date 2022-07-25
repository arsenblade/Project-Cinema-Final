import Collections from '../../ui/collections/Collections'
import { useDiscovery } from './useDiscovery'

const Discovery = () => {
  const {genreDiscovery, isLoading} = useDiscovery()
  console.log(genreDiscovery)

  return (
    <Collections
      collections={genreDiscovery}
    />
  )
}

export default Discovery