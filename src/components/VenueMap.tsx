import React, { useState } from 'react';
import {
  MapPin,
  Navigation,
  ExternalLink,
  Copy,
  Check,
  Layers,
  Train,
  Plane,
  Hotel,
  Compass,
  Building,
  Car,
  Maximize2,
  Minimize2,
  Info,
  ShieldCheck,
  Calendar,
  Clock,
  Sparkles
} from 'lucide-react';

interface PoiItem {
  id: string;
  name: string;
  category: 'venue' | 'hotel' | 'transit' | 'dining';
  address: string;
  distance: string;
  time: string;
  lat: number;
  lng: number;
  description: string;
}

const POI_LOCATIONS: PoiItem[] = [
  {
    id: 'venue-main',
    name: 'Los Angeles Convention Center (LACC)',
    category: 'venue',
    address: '1201 S Figueroa St, Los Angeles, CA 90015',
    distance: '0.0 miles',
    time: 'On-site venue',
    lat: 34.0407,
    lng: -118.2690,
    description: 'Main conference venue housing Keynote Plenary (West Hall), Technical Sessions (Rooms 401–412), and Poster Exhibition (South Hall).'
  },
  {
    id: 'hotel-jw',
    name: 'JW Marriott Los Angeles L.A. LIVE',
    category: 'hotel',
    address: '900 W Olympic Blvd, Los Angeles, CA 90015',
    distance: '0.3 miles',
    time: '6 min walk',
    lat: 34.0452,
    lng: -118.2658,
    description: 'Official conference partner hotel with reserved academic room block rates for registered AMLIS delegates.'
  },
  {
    id: 'transit-pico',
    name: 'Pico Metro Station (A & E Lines)',
    category: 'transit',
    address: '1250 S Flower St, Los Angeles, CA 90015',
    distance: '0.2 miles',
    time: '4 min walk',
    lat: 34.0406,
    lng: -118.2647,
    description: 'Direct light rail access to Downtown Los Angeles Financial District, Santa Monica Pier, Culver City, and Union Station.'
  },
  {
    id: 'transit-lax',
    name: 'Los Angeles International Airport (LAX)',
    category: 'transit',
    address: '1 World Way, Los Angeles, CA 90045',
    distance: '16.8 miles',
    time: '28–35 min drive / FlyAway Bus',
    lat: 33.9416,
    lng: -118.4085,
    description: 'Primary international gateway. Connect to DTLA via FlyAway bus, airport taxi, or rideshare pickup zone.'
  },
  {
    id: 'hotel-hotel-fig',
    name: 'Hotel Figueroa (Historic Landmark)',
    category: 'hotel',
    address: '939 S Figueroa St, Los Angeles, CA 90015',
    distance: '0.4 miles',
    time: '7 min walk',
    lat: 34.0461,
    lng: -118.2625,
    description: 'Boutique accommodation partner within easy walking distance of the convention complex.'
  },
  {
    id: 'dining-lalive',
    name: 'L.A. LIVE Dining & Entertainment District',
    category: 'dining',
    address: '800 W Olympic Blvd, Los Angeles, CA 90015',
    distance: '0.3 miles',
    time: '5 min walk',
    lat: 34.0445,
    lng: -118.2662,
    description: 'Premier culinary and networking area with over 20 restaurants, cafes, and outdoor seating plazas.'
  }
];

export const VenueMap: React.FC = () => {
  const [activePoi, setActivePoi] = useState<PoiItem>(POI_LOCATIONS[0]);
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'venue' | 'hotel' | 'transit' | 'dining'>('all');
  const [mapViewType, setMapViewType] = useState<'interactive' | 'floorplan' | 'transit'>('interactive');
  const [copiedAddress, setCopiedAddress] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const filteredPois = POI_LOCATIONS.filter(
    poi => selectedCategory === 'all' || poi.category === selectedCategory
  );

  const handleCopyAddress = (address: string) => {
    navigator.clipboard.writeText(address);
    setCopiedAddress(true);
    setTimeout(() => setCopiedAddress(false), 2500);
  };

  const getGoogleMapsDirectionsUrl = (address: string) => {
    const encoded = encodeURIComponent(address);
    return `https://www.google.com/maps/dir/?api=1&destination=${encoded}`;
  };

  return (
    <div className="w-full rounded-2xl border border-slate-200 bg-white shadow-xs overflow-hidden text-left">
      {/* Top Header Bar */}
      <div className="p-5 sm:p-6 bg-slate-900 text-white flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-[10px] font-bold text-cyan-400 bg-cyan-950/80 border border-cyan-800/80 px-2 py-0.5 rounded tracking-widest uppercase">
              VENUE & LOCATION
            </span>
            <span className="text-xs text-slate-400">•</span>
            <span className="text-xs text-slate-300 font-medium">Los Angeles, California, USA</span>
          </div>
          <h3 className="text-lg sm:text-xl font-extrabold text-white tracking-tight flex items-center gap-2">
            <span>Los Angeles Convention Center (LACC)</span>
          </h3>
          <p className="text-xs text-slate-400 mt-1">
            1201 S Figueroa St, Los Angeles, CA 90015 · Coordinates: 34.0407° N, 118.2690° W
          </p>
        </div>

        {/* Action Controls */}
        <div className="flex flex-wrap items-center gap-2 shrink-0">
          <button
            type="button"
            onClick={() => handleCopyAddress('1201 S Figueroa St, Los Angeles, CA 90015')}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium border border-slate-700 transition-colors cursor-pointer"
            title="Copy venue address to clipboard"
          >
            {copiedAddress ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-300">Copied Address</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 text-slate-400" />
                <span>Copy Address</span>
              </>
            )}
          </button>

          <a
            href={getGoogleMapsDirectionsUrl('Los Angeles Convention Center, 1201 S Figueroa St, Los Angeles, CA 90015')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold shadow-xs transition-colors cursor-pointer"
          >
            <Navigation className="w-3.5 h-3.5" />
            <span>Open in Maps</span>
            <ExternalLink className="w-3 h-3 opacity-70" />
          </a>

          <button
            type="button"
            onClick={() => setIsExpanded(!isExpanded)}
            className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 transition-colors cursor-pointer"
            title={isExpanded ? 'Collapse Map' : 'Expand Map View'}
          >
            {isExpanded ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Sub-navigation Tabs: View modes */}
      <div className="px-5 py-3 bg-slate-50 border-b border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs">
        {/* View Mode Switcher */}
        <div className="flex items-center gap-1 bg-white p-1 rounded-xl border border-slate-200 shadow-2xs">
          <button
            type="button"
            onClick={() => setMapViewType('interactive')}
            className={`px-3 py-1.5 rounded-lg font-semibold transition-colors cursor-pointer ${
              mapViewType === 'interactive'
                ? 'bg-blue-600 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
            }`}
          >
            Interactive Map
          </button>
          <button
            type="button"
            onClick={() => setMapViewType('floorplan')}
            className={`px-3 py-1.5 rounded-lg font-semibold transition-colors cursor-pointer ${
              mapViewType === 'floorplan'
                ? 'bg-blue-600 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
            }`}
          >
            Venue Floorplan
          </button>
          <button
            type="button"
            onClick={() => setMapViewType('transit')}
            className={`px-3 py-1.5 rounded-lg font-semibold transition-colors cursor-pointer ${
              mapViewType === 'transit'
                ? 'bg-blue-600 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
            }`}
          >
            Transit & Arrival
          </button>
        </div>

        {/* POI Category Filter Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-0.5">
          {(['all', 'venue', 'hotel', 'transit', 'dining'] as const).map(cat => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`px-2.5 py-1 rounded-lg text-[11px] font-medium capitalize transition-colors cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-slate-800 text-white'
                  : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-100'
              }`}
            >
              {cat === 'all' ? 'All Locations' : cat}
            </button>
          ))}
        </div>
      </div>

      {/* Main Map Content Area */}
      <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[460px]">
        {/* Left / Center Map Display */}
        <div className="lg:col-span-8 relative bg-slate-100 flex flex-col items-stretch border-b lg:border-b-0 lg:border-r border-slate-200">
          {mapViewType === 'interactive' && (
            <div className={`relative w-full ${isExpanded ? 'h-[620px]' : 'h-[440px] sm:h-[480px]'} transition-all duration-300 overflow-hidden`}>
              {/* Interactive OpenStreetMap Embed centered on Los Angeles Convention Center */}
              <iframe
                title="Los Angeles Convention Center Venue Map"
                src="https://www.openstreetmap.org/export/embed.html?bbox=-118.2770%2C34.0350%2C-118.2610%2C34.0470&amp;layer=mapnik&amp;marker=34.0407%2C-118.2690"
                className="w-full h-full border-0 select-none"
                loading="lazy"
              />

              {/* Venue Marker Card Overlay */}
              <div className="absolute top-4 left-4 z-10 max-w-xs p-3.5 rounded-xl bg-slate-900/90 backdrop-blur-md text-white border border-slate-700/80 shadow-lg pointer-events-auto">
                <div className="flex items-start gap-2.5">
                  <div className="w-7 h-7 rounded-lg bg-blue-600 text-white flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold leading-tight text-white">
                      {activePoi.name}
                    </h4>
                    <p className="text-[11px] text-slate-300 mt-0.5 leading-snug">
                      {activePoi.address}
                    </p>
                    <div className="flex items-center gap-2 mt-2 pt-2 border-t border-slate-800 text-[10px] text-cyan-300 font-medium">
                      <span>{activePoi.distance}</span>
                      <span>•</span>
                      <span>{activePoi.time}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map View Indicator Badge */}
              <div className="absolute bottom-3 right-3 z-10 px-2.5 py-1 rounded-md bg-white/90 backdrop-blur-xs text-[10px] text-slate-600 font-mono shadow-xs border border-slate-200">
                LACC · DTLA Precinct
              </div>
            </div>
          )}

          {mapViewType === 'floorplan' && (
            <div className={`w-full ${isExpanded ? 'h-[620px]' : 'h-[440px] sm:h-[480px]'} p-6 bg-slate-900 text-white flex flex-col justify-between overflow-y-auto`}>
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="text-[10px] font-bold text-cyan-400 uppercase tracking-widest block">
                      ARCHITECTURAL PRECINCT
                    </span>
                    <h4 className="text-base font-extrabold text-white">LACC Conference Center Layout</h4>
                  </div>
                  <span className="text-xs bg-slate-800 border border-slate-700 px-2.5 py-1 rounded-lg text-slate-300">
                    Levels 1 & 2
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  {/* West Hall */}
                  <div className="p-4 rounded-xl border border-blue-500/30 bg-blue-950/40 text-left">
                    <div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center mb-2.5 text-xs font-bold">
                      W
                    </div>
                    <h5 className="text-xs font-bold text-white mb-1">West Hall Plenary</h5>
                    <p className="text-[11px] text-slate-300 leading-relaxed font-normal mb-2">
                      Keynote addresses, Opening/Closing ceremonies, and Presidential Panel.
                    </p>
                    <span className="text-[10px] text-cyan-400 font-semibold block">Capacity: 1,200 seats</span>
                  </div>

                  {/* South Hall */}
                  <div className="p-4 rounded-xl border border-cyan-500/30 bg-cyan-950/40 text-left">
                    <div className="w-8 h-8 rounded-lg bg-cyan-600 text-white flex items-center justify-center mb-2.5 text-xs font-bold">
                      S
                    </div>
                    <h5 className="text-xs font-bold text-white mb-1">South Hall Exhibits</h5>
                    <p className="text-[11px] text-slate-300 leading-relaxed font-normal mb-2">
                      Interactive Poster Sessions, Sponsor Exhibition booths, and Refreshment Foyers.
                    </p>
                    <span className="text-[10px] text-cyan-400 font-semibold block">Capacity: 80 Poster Boards</span>
                  </div>

                  {/* Concourse Meeting Rooms */}
                  <div className="p-4 rounded-xl border border-indigo-500/30 bg-indigo-950/40 text-left">
                    <div className="w-8 h-8 rounded-lg bg-indigo-600 text-white flex items-center justify-center mb-2.5 text-xs font-bold">
                      M
                    </div>
                    <h5 className="text-xs font-bold text-white mb-1">Rooms 401–412</h5>
                    <p className="text-[11px] text-slate-300 leading-relaxed font-normal mb-2">
                      Four parallel technical oral presentation tracks, workshops, and tutorials.
                    </p>
                    <span className="text-[10px] text-cyan-400 font-semibold block">4 Simultaneous Tracks</span>
                  </div>
                </div>

                {/* Amenity Checklist */}
                <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700 text-xs text-slate-300 grid grid-cols-2 sm:grid-cols-4 gap-3">
                  <div className="flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Free High-Speed Wi-Fi</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Speaker Ready Room</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>ADA Ramps & Elevators</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Prayer & Quiet Room</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800 text-[11px] text-slate-400 flex items-center justify-between">
                <span>Registration Desk opens daily at 07:30 AM in the West Hall Concourse.</span>
                <span className="text-cyan-400">Security pass required at all times.</span>
              </div>
            </div>
          )}

          {mapViewType === 'transit' && (
            <div className={`w-full ${isExpanded ? 'h-[620px]' : 'h-[440px] sm:h-[480px]'} p-6 bg-white text-slate-800 flex flex-col justify-between overflow-y-auto`}>
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="text-[10px] font-bold text-blue-600 uppercase tracking-widest block">
                      COMMUTER & TRANSIT GUIDE
                    </span>
                    <h4 className="text-base font-extrabold text-slate-900">How to Reach the Los Angeles Venue</h4>
                  </div>
                </div>

                <div className="space-y-3.5 mb-6 text-xs text-slate-600">
                  <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center shrink-0">
                      <Train className="w-4 h-4" />
                    </div>
                    <div>
                      <h5 className="font-bold text-slate-900">Metro Light Rail (Pico Station)</h5>
                      <p className="text-[11px] text-slate-500 mt-0.5 leading-relaxed">
                        Take the <strong>A Line (Blue)</strong> or <strong>E Line (Expo)</strong> to Pico Station. Walk 1 block west down Pico Blvd or 12th St to the Convention Center main entrance. Transit cards (TAP card or Apple/Google Wallet) cost $1.75 per single ride.
                      </p>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                      <Plane className="w-4 h-4" />
                    </div>
                    <div>
                      <h5 className="font-bold text-slate-900">From Los Angeles International Airport (LAX)</h5>
                      <p className="text-[11px] text-slate-500 mt-0.5 leading-relaxed">
                        Distance is approximately 17 miles. Take the <strong>LAX FlyAway Bus</strong> to LA Union Station ($9.75), then transfer to the Metro B Line to 7th St/Metro Center, or book rideshare (Uber/Lyft) directly from LAX-it pickup area ($40–$65).
                      </p>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center shrink-0">
                      <Car className="w-4 h-4" />
                    </div>
                    <div>
                      <h5 className="font-bold text-slate-900">Parking & Vehicle Access</h5>
                      <p className="text-[11px] text-slate-500 mt-0.5 leading-relaxed">
                        Official on-site parking garages are located at the <strong>West Hall Garage</strong> (entrances on L.A. LIVE Way) and <strong>South Hall Garage</strong> (entrance on Venice Blvd). Standard daily flat rate is $25.00–$30.00. Electric vehicle (EV) charging stations available.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs">
                <span className="text-slate-500">Need customized directions?</span>
                <a
                  href={getGoogleMapsDirectionsUrl('Los Angeles Convention Center, 1201 S Figueroa St, Los Angeles, CA 90015')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-blue-600 hover:text-blue-700 font-semibold hover:underline"
                >
                  <span>Launch Turn-by-Turn GPS Directions</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          )}
        </div>

        {/* Right Column: Interactive Points of Interest (POI) Sidebar */}
        <div className="lg:col-span-4 p-4 sm:p-5 bg-white flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-[10px] font-bold text-blue-600 uppercase tracking-widest">
                NEARBY LOCATIONS ({filteredPois.length})
              </span>
              <span className="text-[11px] text-slate-400">Click to focus</span>
            </div>

            <div className="space-y-2 max-h-[360px] overflow-y-auto pr-1">
              {filteredPois.map((poi) => {
                const isSelected = activePoi.id === poi.id;
                return (
                  <button
                    key={poi.id}
                    type="button"
                    onClick={() => setActivePoi(poi)}
                    className={`w-full text-left p-3 rounded-xl border transition-all cursor-pointer ${
                      isSelected
                        ? 'border-blue-500 bg-blue-50/50 shadow-xs ring-1 ring-blue-500/20'
                        : 'border-slate-200 bg-slate-50/50 hover:bg-slate-100/70'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex items-center gap-2">
                        {poi.category === 'venue' && <MapPin className="w-3.5 h-3.5 text-blue-600 shrink-0" />}
                        {poi.category === 'hotel' && <Hotel className="w-3.5 h-3.5 text-amber-600 shrink-0" />}
                        {poi.category === 'transit' && <Train className="w-3.5 h-3.5 text-emerald-600 shrink-0" />}
                        {poi.category === 'dining' && <Building className="w-3.5 h-3.5 text-purple-600 shrink-0" />}
                        <span className={`text-xs font-bold leading-tight ${isSelected ? 'text-blue-900' : 'text-slate-900'}`}>
                          {poi.name}
                        </span>
                      </div>
                      <span className="text-[10px] text-slate-400 font-mono shrink-0">
                        {poi.distance}
                      </span>
                    </div>

                    <p className="text-[11px] text-slate-500 mt-1 line-clamp-1">
                      {poi.address}
                    </p>

                    <div className="flex items-center justify-between mt-2 pt-1.5 border-t border-slate-200/60 text-[10px] text-slate-400">
                      <span className="font-medium text-slate-600">{poi.time}</span>
                      <span className="capitalize">{poi.category}</span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active POI Summary Bottom Card */}
          <div className="mt-4 pt-3 border-t border-slate-200">
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-0.5">
                SELECTED SPOT
              </span>
              <h5 className="font-bold text-slate-900">{activePoi.name}</h5>
              <p className="text-[11px] text-slate-500 mt-1 leading-relaxed">
                {activePoi.description}
              </p>
              <div className="mt-2.5 flex items-center gap-2">
                <a
                  href={getGoogleMapsDirectionsUrl(activePoi.address)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[11px] text-blue-600 hover:text-blue-700 font-semibold"
                >
                  <span>Directions</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
                <span className="text-slate-300">•</span>
                <button
                  type="button"
                  onClick={() => handleCopyAddress(activePoi.address)}
                  className="text-[11px] text-slate-600 hover:text-slate-900 font-medium cursor-pointer"
                >
                  Copy Address
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
