import { Routes } from '@angular/router';
import { HomeDemoOneComponent } from './pages/home-demo-one/home-demo-one.component';
import { NotFoundComponent } from './common/not-found/not-found.component';
import { HomeDemoTwoComponent } from './pages/home-demo-two/home-demo-two.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { ServicesPageComponent } from './pages/services-page/services-page.component';
import { ServiceDetailsPageComponent } from './pages/service-details-page/service-details-page.component';
import { TestimonialsPageComponent } from './pages/testimonials-page/testimonials-page.component';
import { SendMoneyPageComponent } from './pages/send-money-page/send-money-page.component';
import { TeamPageComponent } from './pages/team-page/team-page.component';
import { FaqPageComponent } from './pages/faq-page/faq-page.component';
import { SavingGoalsPageComponent } from './pages/saving-goals-page/saving-goals-page.component';
import { CashBackPageComponent } from './pages/cash-back-page/cash-back-page.component';
import { PricingPageComponent } from './pages/pricing-page/pricing-page.component';
import { HelpPageComponent } from './pages/help-page/help-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { PrivacyPolicyPageComponent } from './pages/privacy-policy-page/privacy-policy-page.component';
import { TermsConditionsPageComponent } from './pages/terms-conditions-page/terms-conditions-page.component';
import { BlogPageComponent } from './pages/blog-page/blog-page.component';
import { BlogDetailsPageComponent } from './pages/blog-details-page/blog-details-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';

export const routes: Routes = [
    {path: '', component: HomeDemoOneComponent},
    {path: 'index-2', component: HomeDemoTwoComponent},
    {path: 'about', component: AboutPageComponent},
    {path: 'services', component: ServicesPageComponent},
    {path: 'service-details', component: ServiceDetailsPageComponent},
    {path: 'testimonials', component: TestimonialsPageComponent},
    {path: 'send-money', component: SendMoneyPageComponent},
    {path: 'team', component: TeamPageComponent},
    {path: 'faq', component: FaqPageComponent},
    {path: 'saving-goals', component: SavingGoalsPageComponent},
    {path: 'cash-back', component: CashBackPageComponent},
    {path: 'pricing', component: PricingPageComponent},
    {path: 'help', component: HelpPageComponent},
    {path: 'login', component: LoginPageComponent},
    {path: 'register', component: RegisterPageComponent},
    {path: 'privacy-policy', component: PrivacyPolicyPageComponent},
    {path: 'terms-conditions', component: TermsConditionsPageComponent},
    {path: 'blog', component: BlogPageComponent},
    {path: 'blog-details', component: BlogDetailsPageComponent},
    {path: 'contact', component: ContactPageComponent},
    // Here add new pages component

    {path: '**', component: NotFoundComponent} // This line will remain down from the whole pages component list
];