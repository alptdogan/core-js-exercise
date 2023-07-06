// Günlük 210 ton yağ rafine etme ve işleme kapasitesine sahip bir fabrikanın 7550 tonluk üretimi karşılamak için kaç gün çalışması gerektiğini ve çalışma sonucu kaç ton zeytinyağı üretileceğini hesaplayan Javascript kodunu yazınız.

production = 0;
days = 0;

while (production <= 7550) {
    production += 210;
    days++;
}

console.log(days);