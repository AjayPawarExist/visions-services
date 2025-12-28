import Link from "next/link"
import { ModeToggle } from "@/theme/mode-toggle"
import { 
  ScanEye, 
  MessageSquare,
  Users,
  Zap,
  BarChart3,
  Mail,
  Smartphone,
  Globe,
  CheckCircle2,
  Lock,
  ChevronRight,
  Bot,
  Send,
  Inbox,
  Megaphone,
  LayoutDashboard,
  Sparkles
} from "lucide-react"

export default function VisionsHome() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground font-sans selection:bg-primary/20 selection:text-primary">
      
      {/* --- FLOATING NAVBAR --- */}
      <header className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4">
        <div className="bg-background/80 backdrop-blur-md border border-border rounded-full pl-6 pr-2 py-2 flex items-center justify-between w-full max-w-5xl shadow-lg shadow-primary/5">
            
            {/* Logo Area */}
            <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
                <div className="relative flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <ScanEye className="w-5 h-5" />
                </div>
                <span className="font-bold text-lg tracking-tight">visions.services</span>
            </Link>

            {/* Centered Links */}
            <nav className="hidden md:flex items-center gap-8 text-xs font-medium uppercase tracking-widest text-muted-foreground">
                <Link href="#product" className="hover:text-primary transition-colors">Product</Link>
                <Link href="#solutions" className="hover:text-primary transition-colors">Solutions</Link>
                <Link href="#pricing" className="hover:text-primary transition-colors">Pricing</Link>
            </nav>

            {/* Action Area */}
            <div className="flex items-center gap-2">
                <Link href="/login" className="hidden sm:block text-sm font-medium text-muted-foreground hover:text-foreground px-4 transition-colors">
                    Login
                </Link>
                <Link href="/demo">
                    <button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-5 py-2 text-xs font-bold tracking-wide transition-all shadow-sm">
                        Get Started
                    </button>
                </Link>
                <div className="pl-2 border-l border-border ml-2">
                    <ModeToggle />
                </div>
            </div>
        </div>
      </header>

      <main className="flex-1 w-full relative">
        
        {/* --- HERO SECTION --- */}
        <section className="relative pt-32 pb-20 px-6 overflow-hidden border-b border-border">
            
            {/* Background Texture */}
            <div className="absolute inset-0 -z-10 h-full w-full bg-background bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] bg-size-[16px_16px] mask-[radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] dark:bg-[radial-gradient(#1f2937_1px,transparent_1px)]"></div>
            
            <div className="max-w-5xl mx-auto text-center space-y-8 mb-16">
                
                {/* Brand Pill */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-muted/50 text-muted-foreground text-[10px] font-mono tracking-widest uppercase backdrop-blur-sm">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                    </span>
                    <span>AI + Assistance + Automation</span>
                </div>

                {/* Headline */}
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-foreground leading-[1.1] text-balance">
                    Intelligent Conversations. <br />
                    <span className="text-primary">Empowered Teams.</span>
                </h1>

                <p className="text-muted-foreground max-w-2xl mx-auto text-lg md:text-xl leading-relaxed font-medium text-balance">
                    Visions unifies WhatsApp, Email, and Socials into one inbox. 
                    Automate support, manage your team, and drive sales—all from a single operating system.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                    <button className="h-12 px-8 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-all font-medium text-sm flex items-center gap-2 shadow-lg shadow-primary/20">
                        Start Free Trial
                        <ChevronRight className="w-4 h-4" />
                    </button>
                    <button className="h-12 px-8 rounded-md border border-border bg-background hover:bg-muted transition-all font-medium text-sm text-foreground flex items-center gap-2">
                        <Zap className="w-4 h-4 text-orange-500" />
                        See How It Works
                    </button>
                </div>
            </div>

            {/* --- HERO VISUAL: THE PRODUCT DASHBOARD --- */}
            <div className="max-w-6xl mx-auto relative perspective-1000">
                {/* Glow behind dashboard */}
                <div className="absolute inset-0 bg-primary/20 blur-[100px] opacity-20 -z-10 rounded-full"></div>

                <div className="relative rounded-xl border border-border bg-card shadow-2xl overflow-hidden ring-1 ring-border/50">
                    
                    {/* Fake Browser Header */}
                    <div className="h-10 border-b border-border bg-muted/30 flex items-center px-4 gap-2">
                        <div className="flex gap-1.5">
                            <div className="w-3 h-3 rounded-full bg-destructive/40"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-400/40"></div>
                            <div className="w-3 h-3 rounded-full bg-green-500/40"></div>
                        </div>
                        <div className="ml-4 flex items-center gap-2 px-3 py-1 rounded-md bg-background border border-border text-[10px] text-muted-foreground font-mono">
                            <Lock className="w-3 h-3" />
                            app.visions.services
                        </div>
                    </div>

                    {/* App Interface */}
                    <div className="flex h-125 bg-background">
                        
                        {/* Sidebar */}
                        <div className="w-16 border-r border-border flex flex-col items-center py-4 gap-4 bg-muted/10">
                            <div className="w-10 h-10 rounded-lg bg-primary text-primary-foreground flex items-center justify-center">
                                <ScanEye className="w-6 h-6" />
                            </div>
                            <div className="w-full border-b border-border"></div>
                            <div className="p-2 rounded-lg bg-primary/10 text-primary cursor-pointer"><Inbox className="w-5 h-5"/></div>
                            <div className="p-2 rounded-lg text-muted-foreground hover:bg-muted cursor-pointer"><Users className="w-5 h-5"/></div>
                            <div className="p-2 rounded-lg text-muted-foreground hover:bg-muted cursor-pointer"><Megaphone className="w-5 h-5"/></div>
                            <div className="p-2 rounded-lg text-muted-foreground hover:bg-muted cursor-pointer"><BarChart3 className="w-5 h-5"/></div>
                        </div>

                        {/* Chat List */}
                        <div className="w-72 border-r border-border hidden md:flex flex-col">
                            <div className="p-4 border-b border-border">
                                <h3 className="font-semibold text-sm">Inbox (3)</h3>
                                <div className="mt-2 text-xs text-muted-foreground">All Channels • Unresolved</div>
                            </div>
                            <div className="flex-1 overflow-y-auto">
                                {/* Chat Item 1 */}
                                <div className="p-3 border-l-2 border-primary bg-primary/5 cursor-pointer">
                                    <div className="flex justify-between items-start mb-1">
                                        <span className="font-medium text-sm">Anjali Mehta</span>
                                        <span className="text-[10px] text-muted-foreground">10:42 AM</span>
                                    </div>
                                    <div className="text-xs text-muted-foreground line-clamp-1">Is the 3BHK available?</div>
                                    <div className="mt-2 flex gap-2">
                                        <span className="text-[10px] bg-green-100 dark:bg-green-900/30 text-green-600 px-1.5 py-0.5 rounded">WhatsApp</span>
                                    </div>
                                </div>
                                {/* Chat Item 2 */}
                                <div className="p-3 border-l-2 border-transparent hover:bg-muted/30 cursor-pointer">
                                    <div className="flex justify-between items-start mb-1">
                                        <span className="font-medium text-sm">Rahul Tech</span>
                                        <span className="text-[10px] text-muted-foreground">09:15 AM</span>
                                    </div>
                                    <div className="text-xs text-muted-foreground line-clamp-1">I need a refund for...</div>
                                    <div className="mt-2 flex gap-2">
                                        <span className="text-[10px] bg-purple-100 dark:bg-purple-900/30 text-purple-600 px-1.5 py-0.5 rounded">Instagram</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Active Conversation */}
                        <div className="flex-1 flex flex-col bg-muted/5 relative">
                            {/* Chat Header */}
                            <div className="h-14 border-b border-border flex items-center justify-between px-6 bg-background">
                                <div className="flex items-center gap-3">
                                    <div className="h-8 w-8 rounded-full bg-green-100 text-green-700 flex items-center justify-center font-bold text-xs">AM</div>
                                    <div>
                                        <div className="font-medium text-sm">Anjali Mehta</div>
                                        <div className="text-[10px] text-muted-foreground">via WhatsApp Business API</div>
                                    </div>
                                </div>
                                <div className="flex gap-2">
                                    <button className="text-xs border border-border rounded px-2 py-1 flex items-center gap-1 hover:bg-muted transition-colors">
                                        <CheckCircle2 className="w-3 h-3"/> Resolve
                                    </button>
                                </div>
                            </div>

                            {/* Chat Area */}
                            <div className="flex-1 p-6 space-y-6">
                                <div className="flex gap-3">
                                    <div className="h-8 w-8 rounded-full bg-green-100 text-green-700 flex items-center justify-center font-bold text-xs shrink-0">AM</div>
                                    <div className="bg-background border border-border p-3 rounded-2xl rounded-tl-none shadow-sm text-sm max-w-[80%]">
                                        Hi, I saw your ad for the automated CRM. Does it support Instagram DMs too?
                                    </div>
                                </div>

                                <div className="flex gap-3 flex-row-reverse">
                                    <div className="h-8 w-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center shrink-0">
                                        <Bot className="w-4 h-4" />
                                    </div>
                                    <div className="bg-primary/10 border border-primary/20 p-4 rounded-2xl rounded-tr-none shadow-sm text-sm max-w-[80%]">
                                        <div className="flex items-center gap-2 mb-2 text-primary text-xs font-bold">
                                            <Zap className="w-3 h-3" /> AI Auto-Reply
                                        </div>
                                        <p>Yes, Anjali! Visions unifies WhatsApp, Email, SMS, Instagram, and even Facebook Messenger into one single inbox. Would you like to see a demo video?</p>
                                    </div>
                                </div>
                            </div>

                            {/* Reply Box */}
                            <div className="p-4 border-t border-border bg-background">
                                <div className="relative">
                                    <div className="h-10 w-full border border-border bg-muted/20 rounded-lg pl-3 pr-10 flex items-center text-sm text-muted-foreground">
                                        Type / for saved replies...
                                    </div>
                                    <div className="absolute right-2 top-2 text-primary cursor-pointer hover:scale-110 transition-transform"><Send className="w-4 h-4"/></div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>


        {/* --- PROBLEM / SOLUTION --- */}
        <section className="py-24 px-6 bg-muted/20 border-y border-border">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
                <div>
                    <h2 className="text-3xl font-bold mb-6">Stop juggling tabs. <br/>Start managing relationships.</h2>
                    <div className="space-y-8">
                        <div className="flex gap-4">
                            <div className="w-10 h-10 rounded-full bg-red-100 dark:bg-red-900/20 text-red-600 flex items-center justify-center shrink-0">
                                <LayoutDashboard className="w-5 h-5" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-lg">The Old Way</h3>
                                <p className="text-muted-foreground mt-1">
                                    Conversations scattered across WhatsApp mobile, Gmail tabs, and Instagram phone apps. Leads get lost, response times are slow.
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900/20 text-green-600 flex items-center justify-center shrink-0">
                                <ScanEye className="w-5 h-5" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-lg">The Visions Way</h3>
                                <p className="text-muted-foreground mt-1">
                                    One unified dashboard. AI responds instantly 24/7. Your team collaborates on complex tickets. Nothing slips through the cracks.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                    <div className="p-6 bg-card border border-border rounded-xl shadow-sm hover:border-primary/50 transition-colors flex flex-col items-center text-center">
                        <Mail className="w-8 h-8 text-blue-500 mb-4" />
                        <div className="font-bold">Email</div>
                        <div className="text-xs text-muted-foreground mt-1">Automated & Sync</div>
                    </div>
                    <div className="p-6 bg-card border border-border rounded-xl shadow-sm hover:border-primary/50 transition-colors flex flex-col items-center text-center translate-y-4">
                        <MessageSquare className="w-8 h-8 text-green-500 mb-4" />
                        <div className="font-bold">WhatsApp</div>
                        <div className="text-xs text-muted-foreground mt-1">Official API</div>
                    </div>
                    <div className="p-6 bg-card border border-border rounded-xl shadow-sm hover:border-primary/50 transition-colors flex flex-col items-center text-center">
                        <Smartphone className="w-8 h-8 text-pink-500 mb-4" />
                        <div className="font-bold">Instagram</div>
                        <div className="text-xs text-muted-foreground mt-1">DM Automation</div>
                    </div>
                    <div className="p-6 bg-card border border-border rounded-xl shadow-sm hover:border-primary/50 transition-colors flex flex-col items-center text-center translate-y-4">
                        <Globe className="w-8 h-8 text-orange-500 mb-4" />
                        <div className="font-bold">Webchat</div>
                        <div className="text-xs text-muted-foreground mt-1">Live Widget</div>
                    </div>
                </div>
            </div>
        </section>

        {/* --- FEATURES PILLARS --- */}
        <section id="product" className="py-24 px-6">
            <div className="max-w-6xl mx-auto space-y-24">
                
                {/* Feature 1: Campaigns */}
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="order-2 md:order-1 bg-muted/30 rounded-2xl p-8 border border-border relative overflow-hidden h-87.5 flex items-center justify-center group">
                        
                        <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors"></div>
                        <div className="relative bg-card p-6 rounded-xl border border-border shadow-xl w-3/4">
                             <div className="flex items-center justify-between mb-4">
                                <span className="font-bold text-sm">Campaign Report</span>
                                <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">Completed</span>
                             </div>
                             <div className="space-y-3">
                                <div className="flex justify-between text-xs"><span>Sent</span> <span>1,200</span></div>
                                <div className="w-full bg-muted h-1.5 rounded-full"><div className="w-full bg-blue-500 h-1.5 rounded-full"></div></div>
                                
                                <div className="flex justify-between text-xs"><span>Opened</span> <span>1,050 (88%)</span></div>
                                <div className="w-full bg-muted h-1.5 rounded-full"><div className="w-[88%] bg-green-500 h-1.5 rounded-full"></div></div>
                                
                                <div className="flex justify-between text-xs"><span>Replied</span> <span>340 (28%)</span></div>
                                <div className="w-full bg-muted h-1.5 rounded-full"><div className="w-[28%] bg-purple-500 h-1.5 rounded-full"></div></div>
                             </div>
                        </div>
                    </div>
                    <div className="order-1 md:order-2">
                        <div className="w-12 h-12 rounded-lg bg-orange-100 dark:bg-orange-900/30 text-orange-600 flex items-center justify-center mb-6">
                            <Megaphone className="w-6 h-6" />
                        </div>
                        <h3 className="text-3xl font-bold mb-4">Marketing that lands.</h3>
                        <p className="text-muted-foreground text-lg mb-6">
                            Don&apos;t just wait for customers. Reach out to them. 
                            Send personalized WhatsApp, Email, and SMS campaigns.
                        </p>
                        <ul className="space-y-3">
                            <li className="flex items-center gap-3 text-sm">
                                <CheckCircle2 className="w-5 h-5 text-primary" /> 
                                Broadcast to thousands in one click
                            </li>
                            <li className="flex items-center gap-3 text-sm">
                                <CheckCircle2 className="w-5 h-5 text-primary" /> 
                                Automated drip sequences for nurturing
                            </li>
                            <li className="flex items-center gap-3 text-sm">
                                <CheckCircle2 className="w-5 h-5 text-primary" /> 
                                Real-time analytics (Open, Click, Reply)
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Feature 2: Team Management */}
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <div className="w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-600 flex items-center justify-center mb-6">
                            <Users className="w-6 h-6" />
                        </div>
                        <h3 className="text-3xl font-bold mb-4">Empower your humans.</h3>
                        <p className="text-muted-foreground text-lg mb-6">
                            Visions isn&apos;t just AI. It&apos;s a complete suite for your sales and support teams to collaborate effectively.
                        </p>
                        <ul className="space-y-3">
                            <li className="flex items-center gap-3 text-sm">
                                <CheckCircle2 className="w-5 h-5 text-primary" /> 
                                Auto-assign chats based on agent availability
                            </li>
                            <li className="flex items-center gap-3 text-sm">
                                <CheckCircle2 className="w-5 h-5 text-primary" /> 
                                Internal notes and mentions (@manager)
                            </li>
                            <li className="flex items-center gap-3 text-sm">
                                <CheckCircle2 className="w-5 h-5 text-primary" /> 
                                Track resolution times and performance
                            </li>
                        </ul>
                    </div>
                    <div className="bg-muted/30 rounded-2xl p-8 border border-border relative overflow-hidden h-87.5 flex items-center justify-center group">
                        
                         <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors"></div>
                         <div className="relative bg-card p-6 rounded-xl border border-border shadow-xl w-3/4 space-y-4">
                            <div className="flex items-center gap-3 border-b border-border pb-3">
                                <div className="w-8 h-8 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center font-bold text-xs">JS</div>
                                <div className="flex-1">
                                    <div className="text-sm font-bold">John Smith</div>
                                    <div className="text-[10px] text-green-600">Online • Sales Team</div>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-3">
                                <div className="bg-muted/50 p-2 rounded text-center">
                                    <div className="text-xs text-muted-foreground">Assigned</div>
                                    <div className="font-bold text-lg">12</div>
                                </div>
                                <div className="bg-muted/50 p-2 rounded text-center">
                                    <div className="text-xs text-muted-foreground">Resolved</div>
                                    <div className="font-bold text-lg">45</div>
                                </div>
                            </div>
                         </div>
                    </div>
                </div>

            </div>
        </section>

        {/* --- PRICING (BLURRED & LOCKED) --- */}
        <section id="pricing" className="py-24 px-6 bg-muted/10 border-t border-border relative overflow-hidden">
            
            {/* Overlay */}
            <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-background/60 backdrop-blur-xs">
                <div className="bg-background/90 backdrop-blur-xl border border-border/50 p-10 rounded-2xl shadow-2xl text-center max-w-md mx-4 ring-1 ring-primary/10 animate-in fade-in zoom-in duration-700">
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                        <Sparkles className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3">Early Access Program</h3>
                    <p className="text-muted-foreground mb-8 text-base">
                        Our pricing plans are currently being calibrated for maximum value. 
                        <br className="hidden md:block"/>Join the beta to get exclusive rates.
                    </p>
                    <Link href="/demo" className="block w-full">
                        <button className="w-full h-12 rounded-lg bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-sm transition-all shadow-lg shadow-primary/20">
                            Apply for Beta Access
                        </button>
                    </Link>
                    <p className="mt-4 text-xs text-muted-foreground">Limited spots available for Q1 2025.</p>
                </div>
            </div>

            {/* Blurred Background Content */}
            <div className="max-w-4xl mx-auto opacity-30 filter blur-sm pointer-events-none select-none">
                 <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-foreground mb-4">Simple, Transparent Pricing</h2>
                    <p className="text-muted-foreground">Start free, scale as you grow.</p>
                </div>

                <div className="grid md:grid-cols-2 gap-6 scale-95">
                    {/* Fake Tier 1 */}
                    <div className="rounded-2xl border border-border bg-card p-8 flex flex-col">
                        <div className="text-sm font-mono text-muted-foreground mb-4">STARTER</div>
                        <div className="text-4xl font-bold text-foreground mb-6">$0</div>
                        <ul className="space-y-4 mb-8 flex-1">
                            <li className="flex items-center gap-3 text-sm text-muted-foreground"><CheckCircle2 className="w-4 h-4"/> 1 User Seat</li>
                            <li className="flex items-center gap-3 text-sm text-muted-foreground"><CheckCircle2 className="w-4 h-4"/> 500 Conversations</li>
                        </ul>
                        <div className="h-12 w-full bg-muted rounded-lg"></div>
                    </div>

                    {/* Fake Tier 2 */}
                    <div className="rounded-2xl border border-primary bg-primary/5 p-8 flex flex-col relative">
                        <div className="text-sm font-mono text-primary mb-4">GROWTH</div>
                        <div className="text-4xl font-bold text-foreground mb-6">$49</div>
                         <ul className="space-y-4 mb-8 flex-1">
                            <li className="flex items-center gap-3 text-sm text-foreground"><CheckCircle2 className="w-4 h-4"/> 5 User Seats</li>
                            <li className="flex items-center gap-3 text-sm text-foreground"><CheckCircle2 className="w-4 h-4"/> Unlimited Conversations</li>
                        </ul>
                        <div className="h-12 w-full bg-primary/50 rounded-lg"></div>
                    </div>
                </div>
            </div>
        </section>

        {/* --- FOOTER --- */}
        <footer className="py-12 px-6 border-t border-border bg-muted/20 text-xs text-muted-foreground">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
                <div className="col-span-1 md:col-span-1 space-y-4">
                     <div className="flex items-center gap-2">
                        <ScanEye className="w-5 h-5 text-primary" />
                        <span className="text-foreground tracking-wider font-bold text-sm">VISIONS.SERVICES</span>
                    </div>
                    <p className="leading-relaxed">
                        An intelligent communication, support, and team-management platform designed for modern businesses.
                    </p>
                </div>
                
                <div className="space-y-3">
                    <h4 className="font-bold text-foreground uppercase tracking-widest text-[10px]">Product</h4>
                    <ul className="space-y-2">
                        <li><Link href="#" className="hover:text-primary transition-colors">Unified Inbox</Link></li>
                        <li><Link href="#" className="hover:text-primary transition-colors">AI Chatbots</Link></li>
                        <li><Link href="#" className="hover:text-primary transition-colors">WhatsApp API</Link></li>
                        <li><Link href="#" className="hover:text-primary transition-colors">Team Management</Link></li>
                    </ul>
                </div>

                <div className="space-y-3">
                    <h4 className="font-bold text-foreground uppercase tracking-widest text-[10px]">Company</h4>
                    <ul className="space-y-2">
                        <li><Link href="#" className="hover:text-primary transition-colors">About Us</Link></li>
                        <li><Link href="#" className="hover:text-primary transition-colors">Contact Support</Link></li>
                        <li><Link href="#" className="hover:text-primary transition-colors">Partners</Link></li>
                    </ul>
                </div>

                <div className="space-y-3">
                    <h4 className="font-bold text-foreground uppercase tracking-widest text-[10px]">Contact</h4>
                    <ul className="space-y-2">
                        <li>support@visions.services</li>
                        <li>+91 93025 25332</li>
                        <li className="pt-2">Indore, MP, India</li>
                    </ul>
                </div>
            </div>

            <div className="max-w-6xl mx-auto border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                 <div className="flex flex-col gap-1">
                     <p>© 2025 Visions. All rights reserved.</p>
                     <p>Powered by <strong className="text-foreground">SHRI SIDDHAM INFOTECH PRIVATE LIMITED</strong></p>
                 </div>
                 <div className="flex gap-6">
                    <Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link>
                    <Link href="#" className="hover:text-primary transition-colors">Terms of Service</Link>
                 </div>
            </div>
        </footer>

      </main>
    </div>
  )
}