import Link from "next/link"
import { Container } from "@/components/ui/container"
import { Truck, Facebook, Instagram, Twitter } from "lucide-react"

export function Footer() {
    return (
        <footer className="bg-[#F25C24] pt-12 pb-12"> {/* Orange background */}
            <Container>
                <div className="bg-[#1e40af] text-white rounded-3xl p-8 md:p-12 shadow-xl"> {/* Floating Blue Card */}
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
                        <div className="space-y-4">
                            <Link href="/" className="flex items-center space-x-2">
                                <Truck className="h-6 w-6 text-white" />
                                <span className="text-lg font-bold text-white">AM Movers</span>
                            </Link>
                            <p className="text-sm text-white/80">
                                Reliable household and office furniture removal services.
                                Your trusted partner in logistics.
                            </p>
                        </div>

                        <div>
                            <h3 className="mb-4 text-sm font-semibold text-white">Services</h3>
                            <ul className="space-y-2 text-sm text-white/80">
                                <li><Link href="/services#household" className="hover:text-white">Household Removal</Link></li>
                                <li><Link href="/services#office" className="hover:text-white">Office Relocation</Link></li>
                                <li><Link href="/services#rubble" className="hover:text-white">Rubble Removal</Link></li>
                                <li><Link href="/services#storage" className="hover:text-white">Storage Facilities</Link></li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="mb-4 text-sm font-semibold text-white">Company</h3>
                            <ul className="space-y-2 text-sm text-white/80">
                                <li><Link href="/about" className="hover:text-white">About Us</Link></li>
                                <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
                                <li><Link href="/careers" className="hover:text-white">Careers</Link></li>
                                <li><Link href="/privacy" className="hover:text-white">Privacy Policy</Link></li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="mb-4 text-sm font-semibold text-white">Connect</h3>
                            <div className="flex space-x-4 text-white/80">
                                <a href="#" className="hover:text-white"><Facebook className="h-5 w-5" /></a>
                                <a href="https://instagram.com/am_movers_company" className="hover:text-white"><Instagram className="h-5 w-5" /></a>
                                <a href="#" className="hover:text-white"><Twitter className="h-5 w-5" /></a>
                            </div>
                            <div className="mt-4">
                                <p className="text-sm text-white/80">
                                    Call/WhatsApp: <br />
                                    <span className="font-medium text-white">+27 72 562 1963</span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="mt-8 border-t border-white/20 pt-8 text-center text-sm text-white/60">
                        &copy; {new Date().getFullYear()} AM Movers Company. All rights reserved.
                    </div>
                </div>
            </Container>
        </footer>
    )
}
