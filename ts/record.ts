interface LYXRecord {
    name: string;
}

type LYXTitle = 'home' | 'home2'

const data: Record<LYXTitle, LYXRecord> = {
    home: {name: '222'},
    home2: {name: '2222'}
}