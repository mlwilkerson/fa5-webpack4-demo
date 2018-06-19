import { library, dom } from '@fortawesome/fontawesome-svg-core'

import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { faFileArchive } from '@fortawesome/free-solid-svg-icons'
import { faDownload } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

library.add(
  faSearch,
  faFileArchive,
  faDownload,
  faGithub
)

dom.watch()
