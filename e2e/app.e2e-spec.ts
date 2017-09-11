import { AngularFireModule } from 'angularfire2';
import { AppPage } from './app.po';
import { browser } from 'protractor';
import { environment } from '../src/environments/environment';

describe('nglx App Tests', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
    browser.ignoreSynchronization = true;
  });

  it('should have browser title CarShop', (done) => {
    page.navigateTo('/home');
    page.getBrowserTitle()
      .then((title) => {
        expect(title).toEqual('CarShop');
        done();
      })
      .catch((err) => {
        done.fail(err);
      });
  });

  it('should display user email after registration', (done) => {
    const user = {
      mail: 'test@gmail.com',
      pass: 'testtest',
      fName: 'Tosho',
      lName: 'Toshev',
      lIntro: 'Obicham koka kola'
    };
    page.navigateTo('/users/signup')
      .then(() => {
      const mailEl = page.getElementById('form-username');
      return mailEl.sendKeys(user.mail);
    })
      .then(() => {
        const passEl = page.getElementById('form-password');
        return passEl.sendKeys(user.pass);
      })
      .then(() => {
        const fNameEl = page.getElementById('form-firstName');
        return fNameEl.sendKeys(user.fName);
      })
      .then(() => {
        const lNameEl = page.getElementById('form-lastName');
        return lNameEl.sendKeys(user.lName);
      })
      .then(() => {
      const lNameEl = page.getElementById('form-intro');
      return lNameEl.sendKeys(user.lIntro);
       })
      .then(() => {
        // tslint:disable-next-line:max-line-length
        const submit = page.getElementByCSS('body > app-root > div > div > div > app-main > main > app-user-signup > div > div > div > div:nth-child(2) > div > div.form-bottom > form > button');
        return submit.click();
      })
      .then(() => {
        browser.sleep(1000);
        const headerMailEl = page.getElementByCSS('#navbarsExampleDefault > ul.navbar-nav.mr-lg-0.float-xl-right > li:nth-child(1) > a');
        return headerMailEl.getText();
      })
      .then((text) => {
        expect(text).toEqual(user.mail);
        done();
      })
      .catch((err) => {
        done.fail(err);
      });
  });

  it('should display user email after sign in', (done) => {
    const user = {
      mail: 'test@gmail.com',
      pass: 'testtest',
      fName: 'Tosho',
      lName: 'Toshev',
      lIntro: 'Obicham koka kola'
    };
    page.navigateTo('/home')
      .then(() => {
        const logOut = page.getElementByCSS('#navbarsExampleDefault > ul.navbar-nav.mr-lg-0.float-xl-right > li:nth-child(2) > a');
        return logOut.isPresent();
      })
      .then((isPresent) => {
        if (isPresent) {
          const logOut = page.getElementByCSS('#navbarsExampleDefault > ul.navbar-nav.mr-lg-0.float-xl-right > li:nth-child(2) > a');
          return logOut.click();
        }
      })
      .then(() => {
        const signInEl = page.getElementByCSS('#navbarsExampleDefault > ul.navbar-nav.mr-lg-0.float-xl-right > li:nth-child(1) > a');
        return signInEl.click();
      }).then(() => {
      const mailEl = page.getElementById('form-username');
      return mailEl.sendKeys(user.mail);
    })
      .then(() => {
        const passEl = page.getElementById('form-password');
        return passEl.sendKeys(user.pass);
      })
      .then(() => {
        // tslint:disable-next-line:max-line-length
        const submit = page.getElementByCSS('body > app-root > div > div > div > app-main > main > app-signin > div > div > div > div:nth-child(2) > div > div.form-bottom > form > button');
        return submit.click();
      })
      .then(() => {
        browser.sleep(1000);
        const headerMailEl = page.getElementByCSS('#navbarsExampleDefault > ul.navbar-nav.mr-lg-0.float-xl-right > li:nth-child(1) > a');
        return headerMailEl.getText();
      })
      .then((text) => {
        expect(text).toEqual(user.mail);
        done();
      })
      .catch((err) => {
        done.fail(err);
      });
  });

});
