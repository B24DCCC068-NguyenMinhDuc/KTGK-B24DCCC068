import { Post } from './types';


export const initialPosts: Post[] = [
    {
        id: '1',
        title: 'React + TypeScript: Bắt đầu thế nào',
        author: 'Minh Đức',
        thumbnail: 'https://picsum.photos/seed/react/600/400',
        content: 'React và TypeScript là cặp đôi quyền lực cho front-end hiện đại. '.repeat(20),
        category: 'Công nghệ',
        createdAt: new Date().toISOString(),
    },
    {
        id: '2',
        title: 'Một chuyến du lịch đến Đà Lạt',
        author: 'Lan Anh',
        thumbnail: 'https://picsum.photos/seed/dalat/600/400',
        content: 'Đà Lạt có khí hậu mát mẻ và nhiều điểm check-in đẹp.'.repeat(20),
        category: 'Du lịch',
        createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 10).toISOString(),
    },
    {
        id: '3',
        title: 'Bí quyết nấu phở nhà ngon',
        author: 'Quang Huy',
        thumbnail: 'https://picsum.photos/seed/phobowl/600/400',
        content: 'Phở ngon cần nước dùng trong và gia vị cân bằng.'.repeat(20),
        category: 'Ẩm thực',
        createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 30).toISOString(),
    },
    {
        id: '4',
        title: 'Làm chủ thói quen: Sáng tạo mỗi ngày',
        author: 'Hương',
        thumbnail: 'https://picsum.photos/seed/habit/600/400',
        content: 'Thói quen định hình năng suất và tinh thần của bạn.'.repeat(20),
        category: 'Đời sống',
        createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 5).toISOString(),
    },
    {
        id: '5',
        title: 'Một số công cụ frontend bạn nên biết',
        author: 'Trung',
        thumbnail: 'https://picsum.photos/seed/tools/600/400',
        content: 'Công cụ đúng sẽ tiết kiệm thời gian cho bạn.'.repeat(20),
        category: 'Công nghệ',
        createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 60).toISOString(),
    },
    {
        id: '6',
        title: 'Ăn chơi ở Hội An: Hướng dẫn ngắn',
        author: 'Mai',
        thumbnail: 'https://picsum.photos/seed/hoian/600/400',
        content: 'Hội An nhỏ nhưng đầy ắp trải nghiệm.'.repeat(20),
        category: 'Du lịch',
        createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 15).toISOString(),
    },
];