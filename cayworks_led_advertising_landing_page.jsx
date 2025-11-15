import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Phone, Mail, MapPin, Sun, Video, Clock, Rocket, Instagram, Facebook, Youtube, Star } from "lucide-react";

export default function LandingPage() {
  const [selected, setSelected] = useState("growth");
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Top bar */}
      <div className="w-full bg-black text-white">
        <div className="mx-auto max-w-7xl px-4 py-2 flex items-center justify-between text-sm">
          <span className="flex items-center gap-2"><Sun className="h-4 w-4"/> Solar‑powered • Mobile LED Screens</span>
          <div className="flex items-center gap-4">
            <a href="tel:+18494074260" className="flex items-center gap-1 hover:text-teal-300"><Phone className="h-4 w-4"/> 849 407 4260</a>
            <a href="mailto:info@cayworks.com" className="flex items-center gap-1 hover:text-teal-300"><Mail className="h-4 w-4"/> info@cayworks.com</a>
          </div>
        </div>
      </div>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-teal-50 via-white to-white"/>
        <div className="mx-auto max-w-7xl px-4 py-16 lg:py-24 relative z-10">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <Badge className="bg-teal-600">Cabarete • North Coast, DR</Badge>
              <h1 className="mt-4 text-4xl md:text-5xl font-extrabold leading-tight">Your Message. <span className="text-teal-600">Everywhere.</span></h1>
              <p className="mt-4 text-lg text-gray-700 max-w-2xl">Cayworks MultiMedia & Design runs high‑brightness, solar‑powered mobile LED screens that meet your customers where they are: beaches, nightlife, festivals, and city hotspots.</p>
              <ul className="mt-6 space-y-3 text-gray-800">
                <li className="flex items-start gap-3"><Check className="h-5 w-5 text-teal-600 mt-1"/> 20‑second and 30‑second ad spots with rotation scheduling</li>
                <li className="flex items-start gap-3"><Check className="h-5 w-5 text-teal-600 mt-1"/> Flexible monthly plans and sponsorships</li>
                <li className="flex items-start gap-3"><Check className="h-5 w-5 text-teal-600 mt-1"/> Social media amplification included on select plans</li>
              </ul>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#pricing"><Button size="lg" className="bg-teal-600 hover:bg-teal-700 rounded-2xl px-6">View Packages</Button></a>
                <a href="#contact"><Button variant="outline" size="lg" className="rounded-2xl px-6">Book a Spot</Button></a>
              </div>
              <p className="mt-4 text-sm text-gray-600">Launch promo: <strong>$149/mo</strong> for a <strong>15‑second</strong> ad – limited availability.</p>
            </div>
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl ring-1 ring-black/5">
                <div className="aspect-video bg-gray-900 flex items-center justify-center">
                  <div className="text-center text-white p-6">
                    <Video className="h-10 w-10 mx-auto mb-3"/>
                    <p className="text-lg font-semibold">LED Trailer Demo</p>
                    <p className="text-sm text-gray-300">Place your promo video or demo reel here.</p>
                  </div>
                </div>
                <div className="absolute top-3 left-3"><Badge className="bg-black/80 backdrop-blur">4K Content • 3840Hz</Badge></div>
                <div className="absolute bottom-3 right-3"><Badge className="bg-teal-600"><Clock className="h-3 w-3 mr-1"/> Live Rotations</Badge></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats / Value Props */}
      <section className="bg-teal-600 text-white">
        <div className="mx-auto max-w-7xl px-4 py-10 grid grid-cols-2 md:grid-cols-4 gap-6">
          <Stat label="Blocks / Day" value="80"/>
          <Stat label="Ads / Day" value="1,920"/>
          <Stat label="Ads / Month" value="53,760"/>
          <Stat label="Price / Ad" value="$0.20"/>
        </div>
      </section>

      {/* Packages */}
      <section id="pricing" className="mx-auto max-w-7xl px-4 py-16">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold">Simple, High‑Impact Packages</h2>
          <p className="mt-3 text-gray-600">Choose the frequency that fits your goals. All plans include scheduling support and basic content checks.</p>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          <PricingCard
            highlight={false}
            name="Starter Boost"
            price="$99/mo"
            tagline="15‑minute rotation • 20‑sec ad"
            points={["Great for seasonal promos","Multiple plays daily","Mobile placements across hotspots"]}
            cta="Get Starter"
          />
          <PricingCard
            highlight={true}
            name="Growth Pro"
            price="$189/mo"
            tagline="~10‑minute rotation • 20‑sec ad"
            points={["Most popular for restaurants & tours","Increased frequency","Optional social repost included"]}
            cta="Choose Growth"
          />
          <PricingCard
            highlight={false}
            name="Dominance"
            price="$269/mo"
            tagline="~5‑minute rotation • 2×20‑sec or 40‑sec"
            points={["Premium visibility all day","Priority locations & events","Best for launches & sponsors"]}
            cta="Own the Day"
          />
        </div>

        {/* Alternate contract options */}
        <div className="mt-12">
          <Card className="rounded-2xl border-gray-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2"><Rocket className="h-5 w-5 text-teal-600"/> Long‑Term Value Plans</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-gray-700">
              <p>Prefer fixed ad counts? Our value plans deliver <strong>2,920 ads/month</strong> (≈96/day) at just <strong>$0.07 per airing</strong> with flexible terms:</p>
              <ul className="mt-3 grid md:grid-cols-4 gap-2">
                <li className="flex items-center gap-2"><Badge className="bg-gray-900">$249</Badge> Month‑to‑Month</li>
                <li className="flex items-center gap-2"><Badge className="bg-gray-900">$237</Badge> 3 Months</li>
                <li className="flex items-center gap-2"><Badge className="bg-gray-900">$224</Badge> 6 Months</li>
                <li className="flex items-center gap-2"><Badge className="bg-gray-900">$199</Badge> 12 Months</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <h3 className="text-2xl font-bold text-center">Brands we help stand out</h3>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {[1,2,3].map((i)=> (
              <Card key={i} className="rounded-2xl">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 text-teal-600"><Star className="h-5 w-5"/><Star className="h-5 w-5"/><Star className="h-5 w-5"/><Star className="h-5 w-5"/><Star className="h-5 w-5"/></div>
                  <p className="mt-3 text-gray-700">“Our foot traffic spiked within a week. The mobile screen found our audience where they hang out.”</p>
                  <p className="mt-4 text-sm text-gray-500">— Local Business, Cabarete</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-7xl px-4 py-16">
        <h3 className="text-2xl font-bold text-center">FAQs</h3>
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          <Faq q="What ad formats do you accept?" a="MP4 (H.264) for video and JPG/PNG for images. 1080p or 4K preferred; 20 or 30 seconds."/>
          <Faq q="Where will my ad appear?" a="We rotate through prime locations in Cabarete (beachfront, nightlife, events) and nearby hotspots."/>
          <Faq q="Can you help create my ad?" a="Yes—add-on creative support includes script, edit, voiceover, and social cut‑downs."/>
          <Faq q="Do you offer social amplification?" a="Growth Pro and Dominance include optional reposts on Cayworks channels when content is suitable."/>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-gray-900 text-white">
        <div className="mx-auto max-w-7xl px-4 py-16 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="text-3xl font-bold">Book your screen time</h3>
            <p className="mt-3 text-gray-300">Tell us your goal and timeline—we’ll recommend the right rotation and locations.</p>
            <div className="mt-6 space-y-3 text-gray-200">
              <p className="flex items-center gap-2"><Phone className="h-5 w-5 text-teal-400"/> <a href="tel:+18494074260" className="hover:underline">849 407 4260</a></p>
              <p className="flex items-center gap-2"><Mail className="h-5 w-5 text-teal-400"/> <a href="mailto:info@cayworks.com" className="hover:underline">info@cayworks.com</a></p>
              <p className="flex items-center gap-2"><MapPin className="h-5 w-5 text-teal-400"/> Cabarete • North Coast, Dominican Republic</p>
            </div>
            <div className="mt-6 flex gap-3">
              <Button asChild className="bg-teal-600 hover:bg-teal-700 rounded-2xl"><a href="mailto:info@cayworks.com?subject=LED%20Ad%20Booking&body=Hi%20Cayworks%2C%20I%27d%20like%20to%20book%20an%20LED%20ad%20spot.%20Here%27s%20what%20I%20need%3A">Email Us</a></Button>
              <Button variant="outline" asChild className="rounded-2xl border-white text-white"><a href="tel:+18494074260">Call Now</a></Button>
            </div>
          </div>
          <div>
            <Card className="rounded-2xl bg-white text-gray-900">
              <CardHeader>
                <CardTitle>Quick Inquiry</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={(e)=>{e.preventDefault(); alert("Thanks! We\'ll be in touch shortly.");}} className="grid grid-cols-1 gap-4">
                  <input required placeholder="Your name" className="border rounded-xl px-4 py-3"/>
                  <input required type="email" placeholder="Email" className="border rounded-xl px-4 py-3"/>
                  <input placeholder="Phone (optional)" className="border rounded-xl px-4 py-3"/>
                  <select className="border rounded-xl px-4 py-3" value={selected} onChange={(e)=>setSelected(e.target.value)}>
                    <option value="starter">Starter Boost ($99/mo)</option>
                    <option value="growth">Growth Pro ($189/mo)</option>
                    <option value="dominance">Dominance ($269/mo)</option>
                    <option value="value">Value Plan (2,920 ads/mo from $199)</option>
                  </select>
                  <textarea placeholder="Tell us about your campaign (dates, goals, locations)" className="border rounded-xl px-4 py-3 min-h-[120px]"/>
                  <Button type="submit" className="bg-teal-600 hover:bg-teal-700 rounded-2xl">Request Availability</Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-gray-300">
        <div className="mx-auto max-w-7xl px-4 py-10 grid md:grid-cols-4 gap-6">
          <div>
            <h4 className="text-white font-semibold">Cayworks MultiMedia & Design</h4>
            <p className="mt-2 text-sm">Mobile LED advertising that meets your audience where they already are.</p>
          </div>
          <div>
            <h5 className="text-white font-semibold mb-2">Contact</h5>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2"><Phone className="h-4 w-4"/> 849 407 4260</li>
              <li className="flex items-center gap-2"><Mail className="h-4 w-4"/> info@cayworks.com</li>
              <li className="flex items-center gap-2"><MapPin className="h-4 w-4"/> Cabarete, Dominican Republic</li>
            </ul>
          </div>
          <div>
            <h5 className="text-white font-semibold mb-2">Follow</h5>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2"><Instagram className="h-4 w-4"/> @robertlynchcoaching</li>
              <li className="flex items-center gap-2"><Facebook className="h-4 w-4"/> Cayworks Media</li>
              <li className="flex items-center gap-2"><Youtube className="h-4 w-4"/> Cayworks Channel</li>
            </ul>
          </div>
          <div>
            <h5 className="text-white font-semibold mb-2">Legal</h5>
            <p className="text-sm">© {new Date().getFullYear()} Cayworks MultiMedia & Design. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function Stat({label, value}:{label:string, value:string}){
  return (
    <div className="text-center">
      <div className="text-3xl font-bold">{value}</div>
      <div className="text-sm opacity-90">{label}</div>
    </div>
  );
}

function PricingCard({name, price, tagline, points, cta, highlight}:{name:string, price:string, tagline:string, points:string[], cta:string, highlight:boolean}){
  return (
    <Card className={`rounded-2xl ${highlight ? 'border-teal-600 shadow-lg shadow-teal-100' : 'border-gray-200'}`}>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>{name}</span>
          {highlight && <Badge className="bg-teal-600">Most Popular</Badge>}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-4xl font-extrabold">{price}</div>
        <div className="text-sm text-gray-600 mt-1">{tagline}</div>
        <ul className="mt-5 space-y-2 text-sm text-gray-800">
          {points.map((p,i)=> (
            <li key={i} className="flex items-start gap-2"><Check className="h-4 w-4 text-teal-600 mt-0.5"/>{p}</li>
          ))}
        </ul>
        <div className="mt-6">
          <Button asChild className="w-full rounded-2xl bg-teal-600 hover:bg-teal-700">
            <a href="#contact">{cta}</a>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

function Faq({q,a}:{q:string, a:string}){
  return (
    <div className="p-6 rounded-2xl border">
      <p className="font-semibold">{q}</p>
      <p className="mt-2 text-gray-700 text-sm leading-relaxed">{a}</p>
    </div>
  );
}
