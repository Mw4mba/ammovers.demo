import Link from "next/link"
import { Container } from "@/components/ui/container"
import { Truck, Facebook, Instagram, Twitter } from "lucide-react"

export function Footer() {
    return (
        <footer className="bg-muted py-12 border-t">
            <Container>
                <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
                    <div className="space-y-4">
                        <Link href="/" className="flex items-center space-x-2">
                            <Truck className="h-6 w-6 text-secondary" />
                            <span className="text-lg font-bold text-primary">AM Movers</span>
                        </Link>
                        <p className="text-sm text-muted-foreground">
                            Reliable household and office furniture removal services.
                            Your trusted partner in logistics.
                        </p>
                    </div>

                    <div>
                        <h3 className="mb-4 text-sm font-semibold">Services</h3>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><Link href="/services#household" className="hover:text-primary">Household Removal</Link></li>
                            <li><Link href="/services#office" className="hover:text-primary">Office Relocation</Link></li>
                            <li><Link href="/services#rubble" className="hover:text-primary">Rubble Removal</Link></li>
                            <li><Link href="/services#storage" className="hover:text-primary">Storage Facilities</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="mb-4 text-sm font-semibold">Company</h3>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><Link href="/about" className="hover:text-primary">About Us</Link></li>
                            <li><Link href="/contact" className="hover:text-primary">Contact</Link></li>
                            <li><Link href="/careers" className="hover:text-primary">Careers</Link></li>
                            <li><Link href="/privacy" className="hover:text-primary">Privacy Policy</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="mb-4 text-sm font-semibold">Connect</h3>
                        <div className="flex space-x-4 text-muted-foreground">
                            <a href="#" className="hover:text-secondary"><Facebook className="h-5 w-5" /></a>
                            <a href="https://instagram.com/am_movers_company" className="hover:text-secondary"><Instagram className="h-5 w-5" /></a>
                            <a href="#" className="hover:text-secondary"><Twitter className="h-5 w-5" /></a>
                        </div>
                        <div className="mt-4">
                            <p className="text-sm text-muted-foreground">
                                Call/WhatsApp: <br />
                                <span className="font-medium text-foreground">+27 72 562 1963</span>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
                    &copy; {new Date().getFullYear()} AM Movers Company. All rights reserved.
                </div>
            </Container>
        </footer>
    )
}
