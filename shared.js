// URL WEB APP DARI GOOGLE SCRIPT (Sudah terpasang milik Anda)
const GAS_URL = "https://script.google.com/macros/s/AKfycbxKsu_iRGm0xk9m03j9OeCyeNsz1Ze7-F8bJL7t4PgnsFGlKnkGZWR4MAEOXz82C9hnng/exec";

window.api = {
    run: async (funcName, ...args) => {
        try {
            const response = await fetch(GAS_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'text/plain;charset=utf-8' },
                body: JSON.stringify({ action: funcName, params: args })
            });
            const result = await response.json();
            if (result.error) throw new Error(result.error);
            return result.data;
        } catch (e) {
            console.error("API Error:", e);
            throw new Error(e.message || "Gagal terhubung ke Server Database.");
        }
    }
};

window.LOGO_DPPI = "https://upload.wikimedia.org/wikipedia/commons/3/36/Logo_DPPI.png";
window.LOGO_YOGYA = "https://upload.wikimedia.org/wikipedia/commons/d/db/Logo_Pemkot_Yk.png"; 
window.LOGO_PASKIB = "https://upload.wikimedia.org/wikipedia/commons/d/dc/Logo_paskibraka.png";

window.getBadgeClass = (penugasan) => {
    if (!penugasan) return 'badge-kota'; 
    const p = penugasan.toLowerCase();
    if (p.includes('provinsi')) return 'badge-provinsi';
    if (p.includes('nasional')) return 'badge-nasional';
    return 'badge-kota'; 
};

window.Background3D = function() {
    return (
        <React.Fragment>
            <div className="ambient-light light-gold"></div>
            <div className="ambient-light light-blue"></div>
        </React.Fragment>
    );
}

window.StarRating = function({ count, size = "text-xs" }) {
    const numCount = parseInt(count) || 0;
    if (numCount < 0) {
        return (
            <div className={`flex items-center gap-1 ${size} text-red-500 font-bold`}>
                <i className="fas fa-minus-circle"></i><span>{Math.abs(numCount)} BINTANG</span>
            </div>
        );
    }
    const starCount = Math.max(0, Math.min(5, numCount));
    return (
        <div className={`flex gap-0.5 ${size} text-[#FFD700]`}>
            {[...Array(5)].map((_, i) => (
                <i key={i} className={`${i < starCount ? "fas" : "far"} fa-star drop-shadow-[0_0_2px_rgba(255,215,0,0.5)]`}></i>
            ))}
        </div>
    );
}

window.MediaModal = function({ src, badgeText, badgeClass, onClose }) {
    if (!src) return null;
    const isDataVideo = src.startsWith("data:video/");
    const isVideoExt = src.toLowerCase().match(/\.(mp4|webm|ogg|mov)(\?|$)/i);
    const isVideo = isDataVideo || isVideoExt;
    return (
        <div className="lightbox-overlay" onClick={onClose}>
            <div className="lightbox-close" onClick={onClose}><i className="fas fa-times"></i></div>
            <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
                {isVideo ? (
                    <video controls autoPlay playsInline className="lightbox-img bg-black" style={{ width: '100%', maxHeight: '80vh' }}><source src={src} />Browser Anda tidak mendukung tag video.</video>
                ) : (<img src={src} className="lightbox-img" />)}
                {badgeText && <div className={`lightbox-badge badge-base ${badgeClass}`}>{badgeText}</div>}
            </div>
        </div>
    );
}

// === FIX SYNTAX ERROR DI BAWAH INI ===
window.PasswordDisplay = function({ password }) {
    const [show, setShow] = React.useState(false);
    return (
        <div className="flex justify-between items-center w-full">
            <span className={show ? "font-mono font-bold text-white drop-shadow-md" : "font-mono font-bold text-slate-500"}>
                {show ? password : "••••••••"}
            </span>
            <button onClick={() => setShow(!show)} className="text-xs text-gold-primary hover:text-white transition drop-shadow-md"><i className={`fas ${show ? 'fa-eye-slash' : 'fa-eye'}`}></i></button>
        </div>
    );
}

window.StatusBadge = function({ status }) {
    let colorClass = 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    if (status === 'Active') colorClass = 'bg-green-500/20 text-green-400 border-green-500/30 shadow-[0_0_10px_rgba(74,222,128,0.2)]';
    else if (status === 'Pending') colorClass = 'bg-orange-500/20 text-orange-400 border-orange-500/30';
    else if (status === 'Blocked' || status === 'Non-Active') colorClass = 'bg-red-500/20 text-red-400 border-red-500/30';
    return <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase border ${colorClass}`}>{status}</span>;
}

window.FullProfileCard = function({ user, type }) {
    const isPaskib = type === 'paskibraka';
    const badgeClass = isPaskib ? window.getBadgeClass(user.penugasan) : 'badge-gold';
    
    // Gunakan dari window object
    const StatusBadge = window.StatusBadge;
    const PasswordDisplay = window.PasswordDisplay;

    return (
        <div className="space-y-3 text-sm animate-in">
            <div className="bg-white/5 rounded-xl border border-white/10 overflow-hidden shadow-lg backdrop-blur-sm">
                <div className="bg-white/5 p-2 px-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest border-b border-white/5">DATA UTAMA</div>
                <div className="p-4 space-y-3">
                    <div className="flex justify-between border-b border-white/5 pb-2"><span className="text-slate-400">Peran</span><span className="font-bold text-gold-primary uppercase drop-shadow">{type}</span></div>
                    <div className="flex justify-between border-b border-white/5 pb-2"><span className="text-slate-400">{isPaskib ? 'NIK' : 'Username'}</span><span className="font-bold text-white drop-shadow">{isPaskib ? user.nik : user.username}</span></div>
                    <div className="flex justify-between border-b border-white/5 pb-2"><span className="text-slate-400">Nama Lengkap</span><span className="font-bold text-white text-right drop-shadow">{user.nama}</span></div>
                    <div className="flex justify-between border-b border-white/5 pb-2"><span className="text-slate-400">Nama Lapangan</span><span className="font-bold text-gold-gradient">{user.lapangan}</span></div>
                    <div className="flex justify-between items-center"><span className="text-slate-400">Status Akun</span><StatusBadge status={user.status} /></div>
                </div>
            </div>
            <div className="bg-white/5 rounded-xl border border-white/10 overflow-hidden shadow-lg backdrop-blur-sm">
                <div className="bg-white/5 p-2 px-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest border-b border-white/5">DETAIL & KEAMANAN</div>
                <div className="p-4 space-y-3">
                    {isPaskib ? (
                        <><div className="flex justify-between border-b border-white/5 pb-2"><span className="text-slate-400">Asal Sekolah</span><span className="font-bold text-white text-right drop-shadow">{user.sekolah}</span></div><div className="flex justify-between items-center border-b border-white/5 pb-2"><span className="text-slate-400">Penugasan</span><span className={`px-2 py-0.5 rounded text-[10px] font-bold ${badgeClass} badge-base`}>{user.penugasan}</span></div></>
                    ) : (
                        <div className="flex justify-between items-center border-b border-white/5 pb-2"><span className="text-slate-400">Jabatan</span><span className={`px-2 py-0.5 rounded text-[10px] font-bold ${badgeClass} badge-base`}>{user.jabatan}</span></div>
                    )}
                    <div className="flex flex-col gap-1"><span className="text-slate-400 text-xs">Password</span><div className="bg-black/30 p-2 rounded border border-white/5 inner-shadow"><PasswordDisplay password={user.password} /></div></div>
                </div>
            </div>
        </div>
    );
}

window.TrainingFeedbackForm = function({ user, role, onBack }) {
    const today = new Date().toISOString().split('T')[0];
    const [form, setForm] = React.useState({ aspect: 'Umum', rating: 5, content: '', date: today });
    const [loading, setLoading] = React.useState(false);
    const ASPECTS = ['Umum', 'Materi Latihan', 'Fisik & Stamina', 'Kedisiplinan', 'Konsumsi/Logistik', 'Sarana Prasarana'];

    const handleSubmit = () => {
        if (!form.content) return alert("Mohon isi detail masukan/evaluasi.");
        setLoading(true);
        const now = new Date();
        const payload = {
            role: role === 'paskibraka' ? 'Paskibraka' : 'Pelatih',
            senderName: user.nama, date: form.date, 
            time: now.toLocaleTimeString('id-ID', {hour: '2-digit', minute:'2-digit'}),
            aspect: form.aspect, rating: form.rating, content: form.content
        };
        window.api.run('addTrainingFeedback', payload).then(res => {
            setLoading(false); alert(res.message);
            if (res.status === 'success') onBack();
        }).catch(e => { setLoading(false); alert("Gagal: " + e); });
    };

    return (
        <div className="os-window p-0 rounded-[2rem] h-[85vh] flex flex-col overflow-hidden animate-in">
            <div className="p-6 border-b border-white/10 bg-[#050505]/80 backdrop-blur-xl z-10 flex-none text-center">
                <h3 className="font-black text-white uppercase tracking-tight text-lg">EVALUASI PELATIHAN</h3>
                <p className="text-[10px] text-slate-400">Feedback harian untuk kemajuan bersama</p>
            </div>
            <div className="flex-1 overflow-y-auto p-6 space-y-5 custom-scrollbar">
                <div><label className="block text-slate-400 text-xs font-bold mb-2">Tanggal Latihan</label><input type="date" className="w-full p-2 os-input rounded-xl text-sm" value={form.date} onChange={e => setForm({...form, date: e.target.value})} /></div>
                <div>
                    <label className="block text-slate-400 text-xs font-bold mb-2">Aspek Evaluasi</label>
                    <div className="grid grid-cols-2 gap-2">{ASPECTS.map(a => (<button key={a} onClick={() => setForm({...form, aspect: a})} className={`py-2 px-1 rounded-lg text-[10px] font-bold border transition ${form.aspect === a ? 'bg-[#FFD700] text-black border-[#FFD700]' : 'bg-white/5 border-white/10 text-slate-400'}`}>{a}</button>))}</div>
                </div>
                <div className="bg-white/5 border border-white/10 p-4 rounded-xl text-center">
                    <label className="block text-slate-400 text-xs font-bold mb-3">Rating Pelaksanaan</label>
                    <div className="flex justify-center gap-3">{[1, 2, 3, 4, 5].map(star => (<i key={star} onClick={() => setForm({...form, rating: star})} className={`fas fa-star text-3xl cursor-pointer transition ${star <= form.rating ? 'text-[#FFD700] drop-shadow-[0_0_10px_rgba(255,215,0,0.6)]' : 'text-slate-700'}`}></i>))}</div>
                    <div className="text-xs font-bold text-[#FFD700] mt-2">{form.rating} / 5 Bintang</div>
                </div>
                <div><label className="block text-slate-400 text-xs font-bold mb-2">Detail Masukan / Kritik / Saran</label><textarea rows="5" className="w-full p-4 os-input rounded-xl text-sm" placeholder="Tuliskan evaluasi Anda..." value={form.content} onChange={e => setForm({...form, content: e.target.value})}></textarea></div>
            </div>
            <div className="p-4 border-t border-white/10 bg-[#050505]/80 z-10 flex-none flex gap-3">
                <button disabled={loading} onClick={onBack} className="flex-1 py-3 text-xs font-bold text-slate-400 hover:text-white">BATAL</button>
                <button disabled={loading} onClick={handleSubmit} className="flex-1 btn-gold py-3 rounded-xl text-xs font-bold">{loading ? "MENGIRIM..." : "KIRIM EVALUASI"}</button>
            </div>
        </div>
    );
}
