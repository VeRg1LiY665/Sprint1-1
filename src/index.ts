import {Testapp} from './app'
import {SETTINGS} from './settings'

Testapp.listen(SETTINGS.PORT, () => {
    console.log('...server started in port ' + SETTINGS.PORT)
})