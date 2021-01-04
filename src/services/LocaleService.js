export default class LocaleService {
  _currentLocale = '';

  constructor(currentLocale) {
    this._currentLocale = currentLocale;
  }

  get currentLocale() {
    return this._currentLocale;
  }
}
