
import { ManualChapter } from './types';

// Helper to generate placeholder content
const getPlaceholder = (title: string) => `
<div class="text-center mb-10">
  <h1 class="text-3xl font-bold text-slate-900 font-serif">${title}</h1>
</div>
<p class="mb-4">Content for <strong>${title}</strong> to be added.</p>
`;

export const MINISTERS_HANDBOOK_CONTENT = {
  // Placeholder content generator for all chapters
};

export const MINISTERS_HANDBOOK_CHAPTERS: ManualChapter[] = [
  {
    id: 'Acknowledgments',
    title: 'Acknowledgments',
    category: 'Front Matter',
    fullText: `
      <div class="text-center mb-10">
        <h1 class="text-3xl font-bold text-slate-900 font-serif">Acknowledgments</h1>
      </div>

      <p class="mb-4">The Manual for Ministers has, for most of the past century, been a valued tool for instruction and quick reference for the Seventh-day Adventist pastor. In 1992 the title of this work was changed to the Minister's Manual, and it was again renamed as the Minister's Handbook at the 1994 Annual Council. Floyd Bresee, General Conference Ministerial Association secretary (1985-1992), served as the principal writer of the 1992 edition, which has contributed, in a significant way for nearly two decades, to the world ministry of the Seventh-day Adventist Church. Given the rapid pace of change in society and technology, as well as the growth of the church during this time, the General Conference Ministerial Association has elected again to edit, revise, and update the previous edition to reflect the present needs of pastoral ministry. We gratefully acknowledge the help of those who contributed to the preparation of this handbook.</p>
      
      <p class="mb-4"><strong>Researching.</strong> — Ministerial secretaries from the world divisions sought counsel from pastors in their fields who contributed ideas for inclusion in the handbook. Past issues of Ministry magazine were researched. The former handbook was studied, along with the Church Manual and the General Conference Working Policy, in order to address issues of interest and concern to pastors.</p>
      
      <p class="mb-4"><strong>Writing.</strong> — Working from the 1992 edition, Gary Patterson wrote this manuscript, with the assistance of Rae Patterson. Myrna Tetz did the principal editing.</p>
      
      <p class="mb-4"><strong>Reading.</strong> — The manuscript was sent to a worldwide reading committee of pastors, ministerial secretaries, and administrators for suggested changes, with special mention due to Israel Olaore, Ranieri Sales, and Bonita Shields. Final approval was made by the in-house Ministerial Association staff at the General Conference office: Jonas Arrais, James A. Cress, Sharon M. Cress, Willie E. Hucks II, Anthony R. Kent, Cathy Payne, Peter J. Prime, and Nikolaus Satelmajer.</p>
      
      <p class="mb-4"><strong>Publishing.</strong> — Cathy Payne directed the design process, James Cavil copyedited the manuscript, Erika Miike served as designer, and the General Conference Ministerial Resource Center coordinated the printing and distribution of the handbook.</p>
      
      <p class="mb-4">Many others gave their counsel and time in the process of preparing this handbook. We extend to each our heartfelt appreciation.</p>
    `
  },
  {
    id: 'Preface',
    title: 'Preface',
    category: 'Front Matter',
    fullText: `
      <div class="text-center mb-10">
        <h1 class="text-3xl font-bold text-slate-900 font-serif">Preface</h1>
      </div>

      <p class="mb-4">Christ calls all His followers to ministry, and every Christian has the privilege and duty to serve in ministry as part of a Christian lifestyle. But some hear an additional call to full-time ministry* as a vocation, both to serve the needs of the church specifically and to lead the church in service to the broader needs of the world in general, giving witness, loving care, and saving grace to a dying world. For these ministries, specifically, this handbook has been prepared.</p>
      
      <p class="mb-4">Such ministry falls primarily into three categories:</p>
      <ol class="list-decimal pl-5 space-y-2 mb-4">
        <li>Pastoral ministry provided both for individuals and for the church body.</li>
        <li>Evangelistic witness and proclamation of the gospel.</li>
        <li>Administrative leadership in the church structure.</li>
      </ol>

      <h4 class="font-bold text-lg mt-8 mb-3 text-slate-800 border-b border-gray-100 pb-2">RESOURCES</h4>
      <p class="mb-4">In order to function efficiently and effectively in these areas of ministry, the Adventist pastor needs to be well versed in the following four primary resources the church provides for ministerial and church leadership.</p>
      <ol class="list-decimal pl-5 space-y-2 mb-4">
        <li>The Church Manual, as voted by the General Conference in session.</li>
        <li>The Minister's Handbook, which gives guidelines for the work of the minister.</li>
        <li>The Elder's Handbook, which assists the minister in training local elders as associates in the church work and ministry.</li>
        <li>Pastoral Ministry, a compilation from the writings of Ellen G. White, which specifically addresses the work of the pastor.</li>
      </ol>
      
      <p class="mb-4 text-sm italic">*The words "ministry" and "pastoral ministry" are often used interchangeably in this handbook.</p>
      
      <p class="mb-4">In an effort to provide these materials for the pastor and to give emphasis to the importance of their use in ministry, the Ministerial Association has published these four volumes in the same size and format in order to form a matched set for convenience in use.</p>
      
      <p class="mb-4">Since this handbook assumes that the pastor has access to the Church Manual, quotations from it will be limited in length. However, because the Church Manual remains the authoritative source for church function, this particular reference will be referred to often in some sections of this handbook.</p>

      <h4 class="font-bold text-lg mt-8 mb-3 text-slate-800 border-b border-gray-100 pb-2">ALL MINISTERS</h4>
      <p class="mb-4">The primary focus of the Minister's Handbook is on pastoral ministry. However, it applies broadly to all ministries, and those serving in specialized ministries and administration will also benefit from its use. The Seventh-day Adventist Church enjoys the service of both men and women, and in recognition of this inclusive ministry, the handbook seeks to use language that is gender-inclusive.</p>

      <h4 class="font-bold text-lg mt-8 mb-3 text-slate-800 border-b border-gray-100 pb-2">UNITY WITHOUT UNIFORMITY</h4>
      <p class="mb-4">Because Adventist ministers are raised, are trained, and serve in a multitude of differing races, cultures, and languages around the world, it is mandatory for the church to work sensitively in the cultures in which it functions. While this handbook must be translatable into many languages and be adaptable to local conditions and customs, there also needs to be reasonable coordination of pastoral plans and programs to create a united ministry throughout the world field.</p>
      
      <p class="mb-4">This handbook was first prepared to foster unity throughout the world and is now presented in revised form. Although no set order is established for the various ceremonies of the church, unity should be maintained in the general order of services and forms of worship. "Let all things be done decently and in order" (1 Cor. 14:40).</p>
      
      <p class="mb-4">Because of the diversity of the world church, the handbook does not prescribe a rigid model, but rather provides a general pattern for each given area of ministry. Where culture dictates, divisions may need to include adaptation by adding footnotes or appendices. Bible quotations in the English version of the handbook come from the New King James Version.</p>
      
      <p class="mb-4">While the emphasis of handbooks tends to be on techniques, the greatest need we as ministers have is a constant relationship with our Lord. Part of the preparation of this handbook was the prayer that its use will strengthen ministry in the Adventist Church both spiritually and professionally.</p>
      
      <p class="mb-4 text-right italic mt-8">James A. Cress<br/>Ministerial Association Secretary<br/>General Conference of Seventh-day Adventists<br/>June 1, 2009</p>
    `
  },
  {
    id: '1',
    title: 'The Calling',
    category: 'Ministry',
    fullText: `
      <div class="text-center mb-10">
        <h1 class="text-3xl font-bold text-slate-900 font-serif">Chapter 1</h1>
        <h2 class="text-2xl font-semibold text-slate-700 mt-2">The Calling</h2>
      </div>

      <p class="mb-4">Individuals who have received a call to the gospel ministry also receive at the same time a personal call from Christ. In addition, they accept an invitation from the church community who recognizes the call and affirms it, both by employing and credentialing the individual in pastoral ministry. The call comes in both instances from Christ and includes three distinct spiritual qualifications.</p>

      <h4 class="font-bold text-lg mt-8 mb-3 text-slate-800 border-b border-gray-100 pb-2">1. COLABORERS WITH CHRIST</h4>
      
      <p class="mb-4"><strong>Ministry a privilege.</strong> — Preaching the gospel of Jesus Christ must be considered a high privilege granted to humankind by Christ Himself, because the call comes not from human origin but of divine instigation. "The greatest work, the noblest effort, in which men can engage is to point sinners to the Lamb of God. True ministers are co-laborers with the Lord in the accomplishment of His purposes" (Gospel Workers, p. 18).</p>
      
      <p class="mb-4"><strong>Ministry a divine appointment.</strong> — "God has a church, and she has a divinely appointed ministry" (Testimonies to Ministers, p. 52). Many avenues of service exist in the employment world and are open to individual choice. Because of ministry's uniqueness in its divine appointment, ministry is more than a profession. It is a calling. "And no man takes this honor to himself, but he who is called by God, just as Aaron was" (Heb. 5:4).</p>
      
      <p class="mb-4"><strong>Ministerial training.</strong> — Having received a call to ministry does not obviate the need for careful training and preparation for service. Rather, it motivates and propels those called to spend both the time and effort required to fulfill the calling. Moses spent many years in preparation for his leadership and service to Israel. And even our Lord Jesus Christ spent several decades preparing for His ministry.</p>
      
      <p class="mb-4">Ministers for God do not consider themselves "self-called." As with the apostle Paul, the initiative is not the individual's, but the Lord's. Paul did not choose the ministry of the gospel; rather, God chose him for that ministry. Paul's choice was whether or not to respond to God's call. A call to the gospel ministry is a call to become an ambassador for Christ. This call demands the full commitment of one's being to this high calling.</p>

      <h4 class="font-bold text-lg mt-8 mb-3 text-slate-800 border-b border-gray-100 pb-2">2. A PERSONAL RELATIONSHIP WITH CHRIST</h4>
      
      <p class="mb-4">The early apostles were successful in inviting others to come to Christ because they themselves had already come to Him. Individuals can give to others only what they already possess. In order to share the good news of the saving grace in Christ, one must have already experienced it, and daily live in that grace.</p>
      
      <p class="mb-4">After the disciples accepted the invitation of Christ, they spent the next three years in personal relationship with Him, learning His ways of serving and reaching people. Only then were they prepared to minister successfully. Saul saw a vision of Christ on the Damascus road, and it caused him to ask, "Lord, what do You want me to do?" (Acts 9:6). After much prayer and searching he was renamed Paul, and, as with the apostles, he found that the power in ministry to appeal to human hearts results from a personal fellowship and experience with Christ.</p>
      
      <p class="mb-4"><strong>Serve as He served.</strong> — To live as Christ lived means living to serve as He served. Jesus lived to bless others. He lived to love. By nature, humankind is born selfish, and only by grace can we learn to live as Christ lived and minister as He ministered. Successful ministry follows the motto of John the Baptist: "He must increase, but I must decrease" (John 3:30). "Those who have the deepest experience in the things of God are the farthest removed from pride and self-exaltation. Because they have an exalted conception of the glory of God, they feel that the lowest place in His service is too honorable for them" (Gospel Workers, p. 142).</p>
      
      <p class="mb-4">To enjoy serving is to enjoy the ministry. Ministers, however, must not feel that gospel ministry somehow makes them more important than others or that this is the only vocation to which people are called. For an individual, the most important work is whatever work God asks that person to do, with the work of service the grandest work in the world. God calls all—every member of every congregation—to some form of ministry and of service.</p>

      <h4 class="font-bold text-lg mt-8 mb-3 text-slate-800 border-b border-gray-100 pb-2">3. A PERSONAL EMPOWERING BY CHRIST</h4>
      
      <p class="mb-4">Ministers need to exhibit a variety of traits, such as faithfulness, moral purity, integrity, spiritual leadership, intelligence with common sense, relational skills, and teaching ability. Those called by Christ will be empowered by Christ. Whomever Christ calls, He enables. He does not call to failure. Not all possess the same gifts, but He will provide the gifts that are necessary to bring success in the performance of what He calls His ministers to do. As Paul proclaimed, "I thank Christ Jesus our Lord who has enabled me, because He counted me faithful, putting me into the ministry" (1 Tim. 1:12).</p>
      
      <p class="mb-4">"The inexhaustible supplies of heaven are at their command. Christ gives them the breath of His own Spirit, the life of His own life. The Holy Spirit puts forth His highest energies to work in heart and mind. The grace of God enlarges and multiplies their faculties, and every perfection of the divine nature comes to their assistance in the work of saving souls. Through cooperation with Christ, they are made complete in Him, and in their human weakness they are enabled to do the deeds of Omnipotence" (Gospel Workers, pp. 112, 113).</p>
    `
  },
  {
    id: '2',
    title: 'Spiritual Formation',
    category: 'Ministry',
    fullText: `
      <div class="text-center mb-10">
        <h1 class="text-3xl font-bold text-slate-900 font-serif">Chapter 2</h1>
        <h2 class="text-2xl font-semibold text-slate-700 mt-2">Spiritual Formation</h2>
      </div>

      <p class="mb-4">Discipleship must become a personal spiritual discipline resulting in a private dimension before it can have a public influence. As a response to God's initiative, we cannot initiate discipleship on our own. This commitment leads us to center ourselves in Him while Christ becomes the passion of our lives. Private study of God's Word, meditation, and prayer are essential elements in a pastor's personal life.</p>
      
      <p class="mb-4"><strong>Essential to leadership.</strong> — The fervent request of the psalmist, "Create in me a clean heart, O God, and renew a steadfast spirit within me" (Ps. 51:10), can be described as the primary essential to pastoral leadership. Without this spiritual dimension, ministerial leadership becomes little more than the implementation of psychological theories, organizational methods, and motivational techniques. Real power in ministry springs from spirituality resulting from a personal encounter with Christ.</p>
      
      <p class="mb-4"><strong>Essential to evangelism.</strong> — Christ instructed His disciples, "I, if I am lifted up . . . , will draw all peoples to Myself" (John 12:32). Knowing Jesus and holding Him up before the people turns out to be the first essential of soul-winning success.</p>
      
      <p class="mb-4"><strong>Essential to preaching.</strong> — Sermon preparation requires significant time for Bible study and prayer. This essential of sermon preparation must go hand in hand with personal devotion and study. One cannot convincingly and honestly provide spiritual material to the congregation unless that material derives its power from personal experience with the Lord.</p>

      <h4 class="font-bold text-lg mt-8 mb-3 text-slate-800 border-b border-gray-100 pb-2">BARRIERS TO SPIRITUAL EXPERIENCE</h4>
      
      <p class="mb-4"><strong>1. Lack of dependence.</strong> — "There is danger of trusting to human plans and methods. There is a tendency to pray less, and to have less faith. Like the disciples, we are in danger of losing sight of our dependence on God, and seeking to make a savior of our activity" (The Desire of Ages, p. 362). But losing track of the source of strength results in a failure to seek God's guidance. As Jeremiah assured the captives in Babylon who had lost the sense of God's guidance: "And you will seek Me and find Me, when you search for Me with all your heart" (Jer. 29:13).</p>
      
      <p class="mb-4"><strong>2. Lack of time.</strong> — Finding time for spiritual discipline is basically an issue of priorities. Everyone has exactly the same amount of time in each day. The issue is how we manage the time and what we select as the priority on which we spend the time. If prayer, the study of God's Word, and private devotions are valued as an important part of ministry and personal life, then time will be allotted for this pursuit. Jesus admonished His audience on the mount, "Seek first the kingdom of God and His righteousness, and all these things shall be added to you" (Matt. 6:33).</p>
      
      <p class="mb-4"><strong>3. Lack of privacy.</strong> — While it may not always be possible to set rigid times and locations for private devotions, yet even in the press of both church and family needs, ministers must be sure to set aside time for study and prayer. "All who are under the training of God need the quiet hour for communion with their own hearts, with nature, and with God. . . . We must individually hear Him speaking to the heart. When every other voice is hushed, and in quietness we wait before Him, the silence of the soul makes more distinct the voice of God" (The Ministry of Healing, p. 58).</p>
      
      <p class="mb-4"><strong>4. Lack of planning.</strong> — Without a specific plan, not much of a devotional life will be developed. Within the pastor's frequently varied schedule, the plan must, of course, be flexible. Yet without specific intent and planning, it is easy to let personal devotions slip away. In addition to one's private study, a spiritual support group may provide additional opportunity to share with others in the spiritual journey.</p>
      
      <p class="mb-4"><strong>5. Lack of discipline.</strong> — Spiritual growth does require self-discipline. Like any activity of fitness or responsibility, be it spiritual, physical, or family-oriented, accomplishing the task requires discipline. Devotional life should not be considered an end in itself. The focus must not be on the amount of time spent, or on the number of pages read, or on feelings of spirituality. Rather, spiritual growth must be based on communion with God. "And this is eternal life, that they may know You, the only true God, and Jesus Christ whom You have sent" (John 17:3).</p>

      <h4 class="font-bold text-lg mt-8 mb-3 text-slate-800 border-b border-gray-100 pb-2">DEVOTIONAL METHODS</h4>
      
      <p class="mb-4"><strong>Reading.</strong> — Reading helps keep the relationship with God fresh and informed. Consider Scripture as the physical form of His communication to humanity and the primary source of devotional study and prayer. Reading should not ignore the valuable contribution of Ellen White, and should also include some of the great Christian devotional classics, as well as practical ministry publications.</p>
      
      <p class="mb-4"><strong>Prayer and meditation.</strong> — While prayer emphasizes talking, meditation on the Word of God emphasizes listening and concentrates on thinking about God. "It would be well for us to spend a thoughtful hour each day in contemplation of the life of Christ. We should take it point by point, and let the imagination grasp each scene, especially the closing ones. As we thus dwell upon His great sacrifice for us, our confidence in Him will be more constant, our love will be quickened, and we shall be more deeply imbued with His spirit" (The Desire of Ages, p. 83).</p>
      
      <p class="mb-4"><strong>Praise prayer.</strong> — Prayer should begin with praise. Much can be learned from the life of Jesus about the importance and effectiveness of prayer. He prayed early in the morning (Mark 1:35). He spent entire nights in prayer (Luke 6:12). He sometimes withdrew from His direct ministry to pray (Luke 5:16). His power for ministry came from His prayer life (Luke 3:21, 22). Prayer prepared Him for His darkest hour (Matt. 26:36-46).</p>
      
      <p class="mb-4"><strong>Penitential prayer.</strong> — Prayer and confession in private devotions cannot be considered the same as public prayer, where individuals usually pray in rather broad generalities addressing the concerns of the hearers. Devotional repentance should be highly personal and specific, recognizing one's failings and the need for victory over sin.</p>
      
      <p class="mb-4"><strong>Intercessory prayer.</strong> — Many are the requests for prayer that come to the church and the pastor. In this ministry Paul instructs Timothy, "Therefore I exhort first of all that supplications, prayers, intercessions, and giving of thanks be made for all men" (1 Tim. 2:1). Christ, our example, prayed even for those who crucified Him.</p>
    `
  },
  {
    id: '3',
    title: 'Interpersonal Relationships',
    category: 'Ministry',
    fullText: `
      <div class="text-center mb-10">
        <h1 class="text-3xl font-bold text-slate-900 font-serif">Chapter 3</h1>
        <h2 class="text-2xl font-semibold text-slate-700 mt-2">Interpersonal Relationships</h2>
      </div>

      <p class="mb-4">Christ's instruction to His disciples before His ascension was directed to the care of people. And this directive extends to all aspects of pastoral ministry. The supreme interest of the pastor must be serving people. As important as study, preaching, administration, teaching, or any other aspect of ministry may be, without each being centered in the service to people, it will not lead to success as a minister of Jesus Christ. People are a pastor's specialty. In this service the personal characteristics of integrity and warmth rate higher than professional skills. "Tact and good judgment increase the usefulness of the laborer a hundredfold" (Gospel Workers, p. 119).</p>

      <h4 class="font-bold text-lg mt-8 mb-3 text-slate-800 border-b border-gray-100 pb-2">LOVING PEOPLE</h4>
      
      <p class="mb-4">Pastors must love people. Jesus said, "By this all will know that you are My disciples, if you have love for one another" (John 13:35). Jesus employed the shepherd's model to describe His relation to His people and the work of ministry. "I am the good shepherd," He states. "The good shepherd gives His life for the sheep. But he who is a hireling and not the shepherd, one who does not own the sheep, sees the wolf coming and leaves the sheep and flees; and the wolf catches the sheep and scatters them. The hireling flees because he is a hireling and does not care about the sheep" (John 10:11-13). Hirelings see the work of shepherding as just a job that can easily be abandoned under stress.</p>
      
      <p class="mb-4">Moses, pleading with God for his people at Mount Sinai, demonstrated remarkably the ideal of pastoral love. After Israel's worship of the golden calf, he interceded with God on their behalf. "His timidity was lost in his deep interest and love for those for whom he had, in the hands of God, been the means of doing so much. . . . His interest in Israel sprang from no selfish motive. The prosperity of God's chosen people was dearer to him than personal honor, dearer than the privilege of becoming the father of a mighty nation" (Patriarchs and Prophets, p. 319).</p>
      
      <p class="mb-4"><strong>Loving unlovely people.</strong> — Loving humanity in general is a concept that is broadly embraced without much hesitation. But loving faulty people in particular could be categorized as one of the more difficult tasks of pastoral life. Pastors must be able to see people as they are and yet not lose sight of what they could become by God's grace. To be a true shepherd, pastors must minister as Christ ministered. "When He saw the multitudes, He was moved with compassion for them, because they were weary and scattered, like sheep having no shepherd" (Matt. 9:36). To be compassionate as Jesus was compassionate means going beyond mere sympathy for the fallen nature of humanity. This compassion not only accepts people as they are in their imperfections but seeks to help them overcome in Christ.</p>
      
      <p class="mb-4"><strong>Loving hurtful people.</strong> — Christ even included loving hurtful and unkind people in His admonition to good shepherding. At times when people criticize, misunderstand, and even falsely accuse, the example of Christ clearly demonstrates the loving response of the true shepherd. Even as He hung on the cross, Christ forgave those who had nailed Him there. Thus He demonstrates that true forgiveness is based, not on a change in the actions and attitudes of those who do wrong, but on the attitude of the one who willingly forgives.</p>
      
      <p class="mb-4">Genuinely forgiving those who engage in mistreatment best describes the test of Christian love. Whether or not that forgiveness is received by them is then according to their own choice. Indeed, there are consequences that result from sinful behavior that are not reversible, but in the act of forgiving, one does not need to establish who did wrong, but rather consider forgiveness as a matter of "bearing with one another, and forgiving one another . . . ; even as Christ forgave you, so you also must do" (Col. 3:13).</p>

      <h4 class="font-bold text-lg mt-8 mb-3 text-slate-800 border-b border-gray-100 pb-2">FRIENDSHIPS</h4>
      
      <p class="mb-4">That friendships exist is natural and God-given. Clearly among the disciples, Peter, James, and John enjoyed a unique and special relationship with Christ. Likewise pastors will find and enjoy the friendship of people with whom they labor and serve. Close trustworthy friendships not only are acceptable but indicate relational competence and emotional maturity on the pastor's part.</p>
      
      <p class="mb-4"><strong>Everyone needs close friends.</strong> — Friendships assist in the development of a realistic view of one's personal strengths and limitations. A friend not only offers support but also provides additional insight into life and ministry. One may open up and communicate freely with a close friend, and obviously one's spouse makes an ideal source of this kind of friendship. Yet the spouse cannot be all that a friend must be unless the communication of ideas, ideals, plans, fears, failures, and frustrations are openly, honestly, and prayerfully shared with each other. While friendship with the spouse should be the most complete of friendships, if the spouse is the only one in which to confide it places too heavy a burden on the partner.</p>
      
      <p class="mb-4">The General Conference Ministerial Association urges that the ministerial association secretary be the person available as a close friend to ministers. However, often ministers and their spouses are not comfortable confiding in those involved with ministerial placement or discipline. In such cases a fellow pastor may serve as a confidant and friend. Such pastors often share similar problems and frustrations and understand each other's lives more completely than anyone else.</p>
      
      <p class="mb-4"><strong>Close friends in the congregation.</strong> — As natural as it is to find close friends in the congregation, there are some cautions that must be observed in such relationships. Pastors must maintain a wholesome spirit among all members in the congregation, avoiding partiality toward any one individual. Pastors must know the importance of striving to maintain a loving relationship with the indifferent and unresponsive equally with those who are enthusiastic and cooperative. Also, the necessity of confidentiality restricts the sharing of problems with others in the congregation. Close friendships with elders usually escape criticism, as members expect that these associates in ministry should enjoy such a relationship.</p>
      
      <p class="mb-4"><strong>Community relationships.</strong> — Adventist communities seeking to uphold standards and fulfill a mission not recognized by the world in general may at times be perceived as isolated from the communities in which they exist. These communities may interpret this focus as unfriendly aloofness and a notion of spiritual superiority. Pastors should be actively involved in the community, seeking membership and involvement in the local ministerial association and community service organizations. Not only are there many items of similar interest, but these can be valuable, professional friendships that open opportunities for shared ministry and witness.</p>
    `
  },
  {
    id: '4',
    title: 'Time Management',
    category: 'Personal Life',
    fullText: `
      <div class="text-center mb-10">
        <h1 class="text-3xl font-bold text-slate-900 font-serif">Chapter 4</h1>
        <h2 class="text-2xl font-semibold text-slate-700 mt-2">Time Management</h2>
      </div>

      <h4 class="font-bold text-lg mt-8 mb-3 text-slate-800 border-b border-gray-100 pb-2">THE GIFT OF TIME</h4>
      
      <p class="mb-4">Time comes as a gift given to everyone. The issue isn't about whether some have more time than others, but rather how each person manages this gift. The reason that some seem to accomplish more than others lies in the priorities they choose and how they use the time. Jesus emphasized the importance of time management when He stated, "I must work the works of Him who sent Me while it is day; the night is coming when no one can work" (John 9:4).</p>

      <h4 class="font-bold text-lg mt-8 mb-3 text-slate-800 border-b border-gray-100 pb-2">WISE USE OF TIME</h4>
      
      <p class="mb-4"><strong>1. Plan.</strong> — Planning increases efficiency. Set goals and objectives based on what most needs accomplishing, and then develop a time schedule to achieve these goals. Without such a plan, one may easily drift from task to task, often seeking the pleasant and avoiding the difficult, while neglecting the most important tasks. "When you rise in the morning, take into consideration, as far as possible, the work you must accomplish during the day. If necessary, have a small book in which to jot down the things that need to be done, and set yourself a time in which to do your work" (Evangelism, p. 652).</p>
      
      <p class="mb-4">Plans must be flexible. Don't plan so rigidly that exceptions and emergencies cannot be addressed. Failure to respond to emergencies in the name of time management becomes offensive to those in need. A plan so precise and detailed that it cannot realistically be followed will probably be abandoned.</p>
      
      <p class="mb-4">Time planning needs to be communicated to fellow workers and also to the congregation. Discuss the schedule of pastoral work and responsibilities with the church board, and then announce it to the congregation. Clearly communicate that the pastor will always be available for emergencies, but that in an endeavor to make the best use of available time, there must be some limitations. The pastor's schedule can be posted on the office door and also included in the bulletin or in other church communication options. Make every effort to be available at these scheduled times.</p>
      
      <p class="mb-4">Managing telephone availability is significantly important to people who call, and answering machines do not address this importance. Calls to the pastor and to the church office need to be answered personally. Therefore, when answering devices are used, failing to respond promptly is inappropriate and rude. Call forwarding may also be used to direct calls to another location where someone has been assigned to take the call.</p>
      
      <p class="mb-4">Written correspondence and electronic mail can become significant users of a pastor's time. Balancing the importance of response against the mass of communication is no small task, and one can easily go to extremes either in spending too much time on trivial correspondence or in simply not responding to legitimate requests. Avoid the trivial, but respect the legitimate. Care must be taken in what a pastor communicates in either letters or e-mail, for what a pastor writes has a long life after the moment of writing. Be sure that the words thus recorded will continue to contribute to ministry and not undermine it.</p>
      
      <p class="mb-4"><strong>2. Create at your prime time.</strong> — The time of highest work and creative energy levels varies with different people. For some it may be first thing in the morning; for others it may be late at night. One is not better than the other—it is simply a matter of individual distinction. However, do not procrastinate. Do creative, hard-thinking work when the energy level for its accomplishment is highest.</p>
      
      <p class="mb-4"><strong>3. Use the help of others.</strong> — Office associates, if available, significantly increase a pastor's effectiveness by handling much of the church detail work, such as taking phone calls, preparing bulletins and publications, and making appointments and contacts. Few churches are able to finance the salary of full-time office workers, but part-time help or volunteer workers may be available to assist the pastor in these endeavors.</p>
      
      <p class="mb-4"><strong>4. Group appointments.</strong> — Geographically group visits so as to make travel the most efficient. The telephone can be an effective tool for many contacts and also increases efficiency. Hospital visitation is important to those who are ill and to their families. These visits, though best when kept short, are still of great significance. The cultural expectation of pastoral visitation varies significantly in different locations and among different age groups.</p>
      
      <p class="mb-4"><strong>5. Use time twice.</strong> — In ministry, travel requires much time. Both Scripture and books are available in recorded format and can be heard during travel. In addition, disciplining one's mind to think, plan, pray, and even do sermon preparation during travel time provides personal quiet moments for these pursuits. During moments of waiting for appointments, for example, be prepared to utilize such by planning in advance for some productive activity.</p>
      
      <p class="mb-4"><strong>6. Delegate.</strong> — "It is a great mistake to keep a minister who is gifted with power to preach the gospel constantly at work in business matters. He who holds forth the Word of life is not to allow too many burdens to be placed upon him" (Evangelism, pp. 91, 92). The apostles learned that when they tried to do all the work of the church by themselves, the work did not all get done. So they delegated the part to which they were not directly called, saying, "It is not desirable that we should leave the word of God and serve tables. . . . We will give ourselves continually to prayer and to the ministry of the word" (Acts 6:2-4).</p>
    `
  },
  {
    id: '5',
    title: 'Personal Health',
    category: 'Personal Life',
    fullText: `
      <div class="text-center mb-10">
        <h1 class="text-3xl font-bold text-slate-900 font-serif">Chapter 5</h1>
        <h2 class="text-2xl font-semibold text-slate-700 mt-2">Personal Health</h2>
      </div>

      <p class="mb-4">As an asset to ministry, good health provides the ability to do good work and serves as an example of the result of prudent and abstemious living. Loma Linda University health studies clearly demonstrate the advantages of the Adventist lifestyle's not only adding more years to life but improving health as well. "A merry heart does good, like medicine, but a broken spirit dries the bones" (Prov. 17:22).</p>

      <h4 class="font-bold text-lg mt-8 mb-3 text-slate-800 border-b border-gray-100 pb-2">PHYSICAL HEALTH</h4>
      
      <p class="mb-4">While we know the Adventist lifestyle to be a wise choice, it does not guarantee that its adherents will not suffer illness. A physical checkup performed on a regular basis can detect problems that may be able to be treated early, possibly avoiding serious results later in life. Denominational employers provide a variety of health-care options that should be followed in the best interest of both the individual and the church. Maintaining good health also involves the wise following of three critical health practices: proper diet, exercise, and rest.</p>
      
      <p class="mb-4"><strong>1. Diet.</strong> — Eat the right foods in the right amounts. "Many of our ministers are digging their graves with their teeth" (Testimonies, vol. 4, p. 408). "God cannot let His Holy Spirit rest upon those who, while they know how they should eat for health, persist in a course that will enfeeble mind and body" (Counsels on Diet and Foods, pp. 55, 56). The abundance of good counsel on proper diet and food should be not only accessed but followed.</p>
      
      <p class="mb-4"><strong>2. Exercise.</strong> — Given that much of pastoral ministry results in a rather sedentary lifestyle, intentional effort must be given to maintaining a fit and strong body. "The whole system needs the invigorating influence of exercise in the open air. A few hours of manual labor each day would tend to renew the bodily vigor and rest and relax the mind. In this way the general health would be promoted, and a greater amount of pastoral labor could be performed" (Testimonies, vol. 4, pp. 264, 265).</p>
      
      <p class="mb-4"><strong>3. Rest.</strong> — There are occasions when the demands of ministry make obtaining adequate rest difficult. However, allowing this to become a habit will, over time, actually reduce—because of exhaustion, incapacity, or even death—the amount of ministry that can be performed. Rest and relaxation are crucial, not only for physical well-being, but for family stability as well. Because the sleep requirements of people vary, to know one's personal needs and get enough sleep each night cannot be considered optional.</p>
      
      <p class="mb-4">Take a day off each week. Take advantage of the annual vacations an employer provides. Overwork indicates, not great devotion to the work, but foolishness. After many intense and stressful events Jesus invited His disciples to " 'come aside by yourselves to a deserted place and rest a while.' For there were many coming and going, and they did not even have time to eat" (Mark 6:31).</p>

      <h4 class="font-bold text-lg mt-8 mb-3 text-slate-800 border-b border-gray-100 pb-2">MENTAL HEALTH</h4>
      
      <p class="mb-4">Ministry is recognized as stressful work. The intrapersonal nature of ministry provides not only opportunity for joyful exchange with others but also times of pain and distress. Public speaking, administrative leadership, ministry to the ill and bereaved—all contribute to stress. While some stress may aid in focusing efforts on a task, continued high and unresolved stress is debilitating. Because the level of stress that one may be able to absorb varies from person to person, knowing one's limits and developing methods of coping are crucial to effective ministry.</p>
      
      <p class="mb-4">Burnout, defined as the reaction to physical, emotional, and mental exhaustion, is often the product of the repeated emotional stress that comes from constant involvement with people. In addition, the expectations of the congregation and conference leadership may differ, placing the pastor in awkward situations. Seeking counsel and encouragement from others often deters burnout. Such counsel may come from the conference ministerial secretary, a fellow pastor, a friend, a support group, or from within the pastor's family. Some conferences provide anonymous free counseling with a professional counselor when needed.</p>
    `
  },
  {
    id: '6',
    title: 'Personal Appearance',
    category: 'Personal Life',
    fullText: `
      <div class="text-center mb-10">
        <h1 class="text-3xl font-bold text-slate-900 font-serif">Chapter 6</h1>
        <h2 class="text-2xl font-semibold text-slate-700 mt-2">Personal Appearance</h2>
      </div>

      <p class="mb-4">Personal appearance definitely has an impact. When a pastor meets someone for the first time, that person makes an immediate judgment, accurate or not, based on appearance. Furthermore, appearance becomes an ongoing influence in continued ministry. "God expects His ministers, in their manners and in their dress, to give a fitting representation of the principles of truth and the sacredness of their office" (Gospel Workers, p. 174). "A minister who is negligent in his apparel often wounds those of good taste and refined sensibilities" (Testimonies, vol. 2, p. 613).</p>

      <h4 class="font-bold text-lg mt-8 mb-3 text-slate-800 border-b border-gray-100 pb-2">DRESS STANDARDS</h4>
      
      <p class="mb-4">Indeed, a multitude of styles and options available for dress exist, with a rather wide range of these considered acceptable. However, because ministry has the reputation of being a high-level profession, individuals expect the dress of a pastor to conform to the standard of professionals. A clear indication of this expectation in a given culture may easily be determined by observing the attire worn by other professionals in the community. Dressing in a second-class manner compared with others in the community will give the impression that your ministry is second-class. Culture and customs vary widely in different places, and age influences styles as well. But extreme fashion should generally be avoided. Many times, what is seen speaks more loudly than what is verbally spoken.</p>

      <h4 class="font-bold text-lg mt-8 mb-3 text-slate-800 border-b border-gray-100 pb-2">APPEARANCE SHOULD ATTRACT TO CHRIST</h4>
      
      <p class="mb-4">Personal appearance will open or close doors for ministry. "The God of heaven . . . is honored or dishonored by the apparel of those who officiate in His honor" (Gospel Workers, p. 173).</p>
      
      <p class="mb-4"><strong>1. Good taste.</strong> — Taste in clothing, including shoes, should be appropriate to the occasion. Formal dress, such as a business suit, serves best in the pulpit, as well as at weddings and funerals. But do not hesitate to dress casually when the occasion calls for it.</p>
      
      <p class="mb-4"><strong>2. Neatness.</strong> — Neatness involves not only dress but the whole person. Good grooming of skin, teeth, hair, and nails should be considered as important to appearance as good clothing. Not only should clothing be kept clean, but also the person. Consider personal hygiene and cleanliness as vital to representing the church properly.</p>

      <h4 class="font-bold text-lg mt-8 mb-3 text-slate-800 border-b border-gray-100 pb-2">APPEARANCE SHOULD NOT BE OVERLY OBVIOUS</h4>
      
      <p class="mb-4">Dress that draws attention to the self may result from many causes. Sloppy, gaudy, or inappropriate dress for the occasion may detract from both ministry and message. It is best if appearance goes mostly unnoticed. The objective should be to dress so that people do not notice, other than to recognize that the appearance is modest, appropriate, and in good taste.</p>
    `
  },
  {
    id: '7',
    title: 'Personal Finance',
    category: 'Personal Life',
    fullText: `
      <div class="text-center mb-10">
        <h1 class="text-3xl font-bold text-slate-900 font-serif">Chapter 7</h1>
        <h2 class="text-2xl font-semibold text-slate-700 mt-2">Personal Finance</h2>
      </div>

      <p class="mb-4">Personal finance has significant potential for positive and negative influence in both the congregation and the community. Even with the best of intentions the pastor can often be misunderstood in the area of finance. While expectations of the pastor do not include living in poverty, at the same time a lifestyle of conspicuous consumption and opulence will undermine what otherwise might be a successful ministry. Trust the Lord to provide, "and my God shall supply all your need according to His riches in glory by Christ Jesus" (Phil. 4:19).</p>
      
      <p class="mb-4"><strong>1. Absolute honesty.</strong> — Financial dealings must be clearly open and honest to avoid even the appearance of evil. The church expects absolute financial honesty from the pastor (and rightly so), and members expect the same from church funds as well as personal funds. Members must know that church funds will continue to be handled with a great sense of responsibility and integrity. Personal profit derived from a pastor's position and influence on monetary decisions equates with conflict of interest and should not be allowed under any circumstances.</p>
      
      <p class="mb-4"><strong>2. Responsible living.</strong> — A Christian minister, as a divinely called servant-leader of the congregation, should live at the general economic level of the membership as a whole, with the tithing system and the wage scale of the church designed to make this possible. While one should not expect to become wealthy on the pay scale of the ministry, yet at the same time the faithful and steady income provided by the church makes it possible for the minister to live with security, knowing that personal needs will be cared for.</p>
      
      <p class="mb-4"><strong>3. Prompt payment of expenses.</strong> — Not only personal reputation, but that of the church as well, is influenced by the prompt and faithful payment of bills.</p>
      
      <p class="mb-4"><strong>4. Wise but not selfish shopping.</strong> — Careful planning in shopping makes limited funds stretch further, but avoid seeking clergy discounts as if ministers deserve some special treatment. If a business wishes to offer the church special rates on purchases, this should be considered a gift to the church. Expecting to receive personal favors undermines respect for the church and the ministry.</p>
      
      <p class="mb-4"><strong>5. Borrowing and lending.</strong> — Borrow only as necessary, and at the lowest cost for the shortest period of time possible. Borrowing or seeking gifts from church members should be avoided. The potential for misunderstanding and strained relationships with the lender is great, and favoritism toward the lender becomes an easy trap. Live on a budget, and be wise and cautious in the use of credit, paying off such accounts monthly. Avoid becoming involved in the cosigning or guaranteeing of loans for others. Pastors are counseled, "Let them guard themselves as with a fence of barbed wire against the inclination to go into debt" (Testimonies, vol. 7, pp. 235, 236).</p>
      
      <p class="mb-4"><strong>6. Saving.</strong> — Plan for emergencies, such as transportation needs, repairs, replacement of appliances, and sudden medical expenses. Savings should be planned and accumulated in order to provide funds for large items, such as the education of children, the purchase of an automobile, the down payment on a home purchase, and preparation for retirement. Even when attempting to save large sums but falling short, establishing the habit of saving is more important than the amount saved.</p>
      
      <p class="mb-4"><strong>7. Insurance.</strong> — Adequate insurance is needed to protect personal finances, property, and liability.</p>
      
      <p class="mb-4"><strong>8. Outside employment.</strong> — Employing organizations are responsible for providing ministers a living wage. Full-time ministers are responsible for living within that wage in order to devote full energy to serving the church, not seeking outside work and income, or seeking to be paid for preaching in other locations. "The minister who is wholly consecrated to God refuses to engage in business that would hinder him from giving himself fully to his sacred calling" (The Acts of the Apostles, p. 366).</p>
      
      <p class="mb-4"><strong>9. Family.</strong> — Personal finance is a shared family responsibility.</p>
      
      <p class="mb-4"><strong>10. Being an exemplary giver.</strong> — With faithfulness in returning tithe as both a biblical and employment expectation, the generous giving of offerings provides a positive leadership example to the church.</p>
    `
  },
  {
    id: '8',
    title: 'Family Life',
    category: 'Personal Life',
    fullText: `
      <div class="text-center mb-10">
        <h1 class="text-3xl font-bold text-slate-900 font-serif">Chapter 8</h1>
        <h2 class="text-2xl font-semibold text-slate-700 mt-2">Family Life</h2>
      </div>

      <h4 class="font-bold text-lg mt-8 mb-3 text-slate-800 border-b border-gray-100 pb-2">MINISTRY AND THE HOME</h4>
      
      <p class="mb-4"><strong>Recognize the limitations of family as a model.</strong> — Frequently church members look at the pastor's family as a model of family life, and the family members are expected to represent what the church stands for in both personal and family behavior. While this expectation has some validity, it must also be recognized that all families are subject to human frailties and imperfections, and that only by the grace of God and the choice of each individual are their lives lived in accordance with the divine will.</p>
      
      <p class="mb-4"><strong>Provide time for the family.</strong> — The urgency of ministerial service, as a never-ending task with eternal consequences, can lead to putting church work ahead of family needs. In addition, frequent moves in pastoral assignments may lead to a sense of loneliness and isolation. In all this the pastor's family stands as the first priority in a minister's life. This does not mean, however, that more time will be allocated to family concerns than to church work, but it does mean that in all planning and dealing with ministry concerns, the needs of the family should be primary. Proper care for the family involves a direct link to proper care of the church. "For if a man does not know how to rule his own house, how will he take care of the church of God?" (1 Tim. 3:5). "The minister's duties lie around him, nigh and afar off; but his first duty is to his children. . . . The world is not so much in need of great minds, as of good men, who are a blessing in their homes. Nothing can excuse the minister for neglecting the inner circle for the larger circle outside. The spiritual welfare of his family comes first" (Gospel Workers, p. 204).</p>
      
      <p class="mb-4"><strong>Give dependable time to the family.</strong> — When family time is frequently interrupted or canceled because of church work, the family may feel second-class and in competition with the church. Avoid missing and postponing family appointments. When it occurs, make sure to reestablish the family appointment at the earliest possible opportunity. Do things together. Share in the work of the home, doing daily chores along with family members. Engage in shared recreation and entertainment that each family member enjoys.</p>
      
      <p class="mb-4"><strong>Communicate.</strong> — Things held in common with the family relate to the quality and amount of effort placed in communication. Verbal communication includes both talking and listening. Children and parents must establish open channels of communication that neither judge nor threaten. Sharing what transpires in daily life, sharing spiritual experiences and insights, sharing both the triumphs and failures, the joys and sorrows of the day, bonds the family together in a godly communion.</p>
      
      <p class="mb-4"><strong>Affirm freely.</strong> — Look for something good and beautiful in your spouse and children each day and tell them of your respect and appreciation. Say only kind, appreciative things about the family from the pulpit.</p>
      
      <p class="mb-4"><strong>Pray daily.</strong> — Make family worship a happy and creative experience. Be the spiritual leader of the home, but do not assume to know all the answers. Because Christianity is an intensely personal experience, no one person has all the answers. Families need to talk about their individually owned beliefs and standards, not just impose them as family traditions or church rules.</p>

      <h4 class="font-bold text-lg mt-8 mb-3 text-slate-800 border-b border-gray-100 pb-2">ADVANTAGES OF CLERGY FAMILIES</h4>
      
      <p class="mb-4">While unique stresses in the pastoral family happen, yet there are also special advantages, such as wider exposure to people and ideas, travel opportunities, and a more secure family environment spiritually committed to making Christian love work. These advantages tend to provide:</p>
      
      <ul class="list-disc pl-5 space-y-2 mb-4">
        <li>A strong sense of purpose and mission in life.</li>
        <li>Opportunity to work as a team on tasks of eternal significance.</li>
        <li>A people-oriented vocation that addresses the needs of humanity.</li>
        <li>Satisfaction in bringing people into the family of God.</li>
        <li>The love of Christian friends.</li>
      </ul>
      
      <p class="mb-4">Maintaining a happy, exemplary pastor's family provides both present joys and eternal rewards in the kingdom of God. "One well-ordered, well-disciplined family tells more in behalf of Christianity than all the sermons that can be preached" (The Adventist Home, p. 32).</p>
    `
  },
  {
    id: '9',
    title: 'Pastoral Ethics',
    category: 'Ethics',
    fullText: `
      <div class="text-center mb-10">
        <h1 class="text-3xl font-bold text-slate-900 font-serif">Chapter 9</h1>
        <h2 class="text-2xl font-semibold text-slate-700 mt-2">Pastoral Ethics</h2>
      </div>

      <h4 class="font-bold text-lg mt-8 mb-3 text-slate-800 border-b border-gray-100 pb-2">ETHICS CODE</h4>
      
      <p class="mb-4">The General Conference Ministerial Association, with counsel from pastors and church administrators, has prepared and recommends to every Adventist minister the following code of ethics:</p>

      <h4 class="font-bold text-lg mt-8 mb-3 text-slate-800 border-b border-gray-100 pb-2">SEVENTH-DAY ADVENTIST MINISTER'S CODE OF ETHICS</h4>
      
      <p class="mb-4">I recognize that a call to the gospel ministry of the Seventh-day Adventist Church is not for the purpose of bestowing special privilege or position, but rather for living a life of devotion and service to God, His church, and the world. I affirm that my personal life and professional activities shall be rooted in the Word of God and subject to the Lordship of Christ. I am totally committed to the fundamental beliefs of the Seventh-day Adventist Church.</p>
      
      <p class="mb-4">I am dedicated to the maintenance of high standards of professional conduct and competence in my ministry. I purpose to build relationships based on the principles expressed in the life and teachings of Christ. I shall, by the grace of God, apply these standards in my life so as to include the following:</p>
      
      <ol class="list-decimal pl-5 space-y-2 mb-4">
        <li>Maintain a meaningful devotional life for myself and my family.</li>
        <li>Give full time and attention to the ministry as my only vocation.</li>
        <li>Commit myself to continuing professional growth.</li>
        <li>Initiate and maintain supportive professional relationships with fellow ministers.</li>
        <li>Practice strictest professional confidentiality.</li>
        <li>Support my employing organization and the world church.</li>
        <li>Manage church and personal finances with integrity and transparency.</li>
        <li>Perceive and treat my family as a primary part of my ministry.</li>
        <li>Practice healthful living.</li>
        <li>Relate with propriety to both men and women.</li>
        <li>Respect the personhood of every individual, without bias or prejudice.</li>
        <li>Love those to whom I minister, and commit myself to their spiritual growth.</li>
      </ol>

      <h4 class="font-bold text-lg mt-8 mb-3 text-slate-800 border-b border-gray-100 pb-2">ETHICS AND FELLOW MINISTERS</h4>
      
      <p class="mb-4"><strong>Fellow pastors.</strong> — The work of ministry predisposes ministers to a shared fellowship and understanding of one another's interests and concerns. Supporting one another's ministry and sharing ministry ideas and concepts strengthens ministry. No one person has all the wisdom and creativity that ministry needs. Rather than perceiving other clergy members as the competition, ministers should see them as support. Pastors' meetings should not only provide inspiration and instruction in ministry skills, but also be occasions for warm fellowship.</p>
      
      <p class="mb-4"><strong>Supervising pastors.</strong> — In multistaff settings, such as large churches or districts, the roles of ministerial responsibility should be clearly stated and understood. Though individual ministry and service should not be stifled in such settings, the final responsibility for overall ministry rests with the supervising pastor. Multistaff members must support one another and work toward the common goals established in the church program. Any attempt to play one pastor against the other and undermine the working relationship of the staff must be rejected.</p>
      
      <p class="mb-4">Ministerial internship presents a unique setting for multistaff ministry. Placing interns in this role for continued education allows them to learn while working with an experienced and seasoned minister. In addition, the experienced pastor has the opportunity to learn from the intern, who may have had more recent contact in educational circles. To assist in this relationship and training process, the General Conference Ministerial Association has prepared the publication A Manual for Ministerial Interns and Intern Supervisors, available from the Ministerial Resource Center.</p>
      
      <p class="mb-4"><strong>The predecessor.</strong> — When moving to a new church assignment, do not quickly discard the previous program. Rather, assume that those who have gone before may have known of the needs of the church that will not be immediately known to the new pastor. Move ahead carefully, wisely, and respectfully, continuing what now works well and gradually introducing new concepts and ideas that will enhance and build the church program further.</p>
      
      <p class="mb-4"><strong>The successor.</strong> — When departing a post of service, leave behind good church records, such as a church directory (including officers and committees), financial reports, church board and committee minutes, and street maps marked to show membership locations, community outreach territories, and evangelistic interests. Share helpful personal information about shopping, health-care availability, bookstores, and other locations that a pastor may need to access.</p>
      
      <p class="mb-4"><strong>Ministers of other churches.</strong> — In some settings there may be multiple Adventist churches nearby. Open communication, cooperation, and respect between the pastors of these churches is vital to the success of all. In addition, cultivate good relationships with fellow pastors of other denominations in the area. Much may be shared with these pastors, including community service and similar concerns and beliefs. A hostile and competitive spirit undermines the work that can be done in the community. Frequently some form of ministerial association or alliance is available for shared ministry.</p>

      <h4 class="font-bold text-lg mt-8 mb-3 text-slate-800 border-b border-gray-100 pb-2">ETHICS AND JOB PLACEMENT</h4>
      
      <p class="mb-4"><strong>Seeking position.</strong> — The goal of ministry includes service, not position. In God's work promotion becomes His business. "If any are qualified for a higher position, the Lord will lay the burden, not alone on them, but on those who have tested them, who know their worth, and who can understandingly urge them forward" (The Ministry of Healing, p. 477).</p>
      
      <p class="mb-4"><strong>Seeking a high standard.</strong> — Aim high, but aim at a high standard, not a high position. Work diligently in the assignment given, and leave promotion to God.</p>

      <h4 class="font-bold text-lg mt-8 mb-3 text-slate-800 border-b border-gray-100 pb-2">ETHICS AND RACE</h4>
      
      <p class="mb-4">The success of the Seventh-day Adventist Church's mission of world outreach can be seen by the breadth of its membership around the world: "to every nation, tribe, tongue, and people" (Rev. 14:6). With this breadth of membership, no place exists for racial discrimination. "For as many of you as were baptized into Christ have put on Christ. There is neither Jew nor Greek, there is neither slave nor free, there is neither male nor female; for you are all one in Christ Jesus" (Gal. 3:27, 28).</p>

      <h4 class="font-bold text-lg mt-8 mb-3 text-slate-800 border-b border-gray-100 pb-2">ETHICS AND MORAL RESPONSIBILITY</h4>
      
      <p class="mb-4"><strong>Sacred trust.</strong> — As a sacred trust, the call to ministry involves respect for the personhood of all. Any breach of trust in this area brings reproach to ministry, to the church, and to God. It is unreasonable to ask members to trust pastors who have engaged in such practices as adultery, pedophilia, homosexuality, fornication, and other sexual misconduct.</p>
      
      <p class="mb-4"><strong>Forgiveness and restoration.</strong> — While violation of these standards becomes grounds for termination of service and employment in pastoral ministry, the dismissed should experience the affirmation of God's forgiving grace and love. The church should seek to restore and nurture such persons in their spiritual and family relationships.</p>

      <h4 class="font-bold text-lg mt-8 mb-3 text-slate-800 border-b border-gray-100 pb-2">ETHICS IN RELATIONSHIPS</h4>
      
      <p class="mb-4"><strong>Spousal relationships.</strong> — Let it be clearly demonstrated and widely observed that a strong bond of loving relationship in the family has been established between husband and wife. Work diligently to make your home life successful and joyful. Such a relationship both strengthens the bonds of love from within and repels temptation from without.</p>
      
      <p class="mb-4"><strong>Recognition of vulnerability.</strong> — Denying vulnerability to sexual temptation is hazardous. Toying with flirtations and fantasies is a dangerous game. If regularly indulged, erotic and romantic longings will win over rational thought. By being perceptive of one's feelings and candidly facing up to the beginning of an attraction, temptation can be rejected.</p>
      
      <p class="mb-4"><strong>Counseling.</strong> — Because spiritual counseling is part of a pastor's responsibility, caution must be observed in this practice. Some counseling may call for auditory but not visibility privacy. Most pastors are not professional counselors, and they have not been called to be such. For the most part, other than in spiritual counsel, those needing counseling should be referred to professional Christian counselors.</p>

      <h4 class="font-bold text-lg mt-8 mb-3 text-slate-800 border-b border-gray-100 pb-2">ETHICS AND THE LAW</h4>
      
      <p class="mb-4"><strong>Legal implications.</strong> — Church employees, congregations, and victims must be aware of the potential for sexual misconduct to occur. In certain circumstances requirements by law include the reporting of sexual misconduct. In some jurisdictions certain individuals may be mandated to report certain forms of abuse (such as sexual abuse of minors or elder abuse) even if knowledge of that abuse was acquired in a confidential setting. Legal counsel should be sought on the requirements in your area.</p>
      
      <p class="mb-4">Sexual misconduct is not limited to minors, however. It can also occur between purportedly consenting adults. Special care should be taken in dealing with individuals where there is an actual or perceived imbalance of power.</p>
      
      <p class="mb-4"><strong>Injury.</strong> — Regarding injury, generally the law holds churches responsible only for injuries that result from negligence. Reasonable steps should be taken to maintain facilities in a safe condition in order to protect those in attendance at church facilities and functions.</p>
      
      <p class="mb-4"><strong>Negligent supervision.</strong> — Negligent supervision addresses issues that relate to the exercise of sufficient care in supervising an employee or volunteer worker. Liability may be imposed for negligently supervising (or failing to supervise) an employee or volunteer if that person causes harm.</p>
      
      <p class="mb-4"><strong>Staff placement.</strong> — When an individual is placed in a position of trust, care must be taken to ensure that this person is worthy of that trust. Churches should have in place a policy for checking the background of individuals who are in positions that have the potential for abuse or causing harm. Consult with your conference, insurance provider, or legal counsel when developing and implementing these policies.</p>
      
      <p class="mb-4">If you receive an inquiry concerning the background of an individual who is being considered for a position of trust and you are aware of any past misconduct or allegations of past misconduct by that person, consult with your conference office or legal advisor. Care must be taken to protect both the person about whom the inquiry is being made and any person who could be harmed by future misconduct by that person.</p>

      <h4 class="font-bold text-lg mt-8 mb-3 text-slate-800 border-b border-gray-100 pb-2">ETHICS IN FINANCIAL MANAGEMENT</h4>
      
      <p class="mb-4">Policies and procedures for the handling of financial matters are clearly delineated in the Church Manual and in the General Conference Working Policy. Failure to abide by these policies not only risks disrepute of the employee and the church but also places the employee in jeopardy of termination of employment.</p>
    `
  },
  {
    id: '10',
    title: 'Professional Growth',
    category: 'Development',
    fullText: `
      <div class="text-center mb-10">
        <h1 class="text-3xl font-bold text-slate-900 font-serif">Chapter 10</h1>
        <h2 class="text-2xl font-semibold text-slate-700 mt-2">Professional Growth</h2>
      </div>

      <h4 class="font-bold text-lg mt-8 mb-3 text-slate-800 border-b border-gray-100 pb-2">GROWTH AS OPPORTUNITY</h4>
      
      <p class="mb-4">While physical growth reaches a natural stopping point, professional growth provides the opportunity to continue to expand and develop in ministry as long as desired. The reason for professional growth should be, not in order to obtain position, but to be better equipped for service.</p>

      <h4 class="font-bold text-lg mt-8 mb-3 text-slate-800 border-b border-gray-100 pb-2">MANDATE FOR CONTINUING EDUCATION</h4>
      
      <p class="mb-4">The Annual Council of 1986 took action "to urge the controlling bodies of Seventh-day Adventist organizations to make it possible for Seventh-day Adventist ministers to take at least 20 clock hours of continuing education for ministry each year, or an average of 20 clock hours for each year of licensure. (For example, if the minister's license/credential is voted for three years, he should, during that time, accumulate 60 clock hours of credit.) Courses taken by a minister for academic credit in connection with a formal education program approved by the employing organization may be accepted in lieu of continuing education units (CEU). If at the time of the renewal of a minister's license/credential the annual average of their CEU records is less than the standard 20 clock hours indicated, a representative from the employing organization [should] personally counsel with and encourage them to become involved in the Continuing Education Program for Ministry."</p>
      
      <p class="mb-4">This continuing education may come in the form of an approved degree program, individual class intensives, or ministers' meetings that include continuing education courses. In addition, the General Conference Ministerial Association has prepared courses for this purpose. Resources are available through the General Conference Ministerial Resource Center or through division ministerial associations.</p>

      <h4 class="font-bold text-lg mt-8 mb-3 text-slate-800 border-b border-gray-100 pb-2">HOW TO GROW</h4>
      
      <p class="mb-4"><strong>Reading.</strong> — Read widely. A local library will have a significant number of helpful books and magazines, and if not available locally, often these are available through interlibrary loan. Share books with fellow pastors. Visit bookstores, including those offering secondhand books. Schedule time for reading and set a monthly goal of books and magazine articles to be read. With a significant amount of such useful materials published within Adventist circles, as well as wisely selected materials from other sources, ministers can easily find an adequate supply. Ministry magazine and the Ministerial Association Book Club also provide a wealth of materials for professional growth. Include some secular reading in that menu of material in order to keep abreast of current events and trends in society.</p>
      
      <p class="mb-4"><strong>Evaluation.</strong> — Pastoral skills are best learned by practice, followed by evaluation, followed by a plan for improvement. Evaluation may at times seem threatening, but refusing evaluation hides not only weaknesses but also strengths. Evaluation provides encouragement, pointing out areas of talent and success while at the same time providing insight into areas of weakness and failure, which then may be addressed in such a manner as to improve performance in ministry.</p>
      
      <p class="mb-4"><strong>Spiritual growth.</strong> — In ministry "the secret of success is the union of divine power with human effort. Those who achieve the greatest results are those who rely most implicitly upon the Almighty Arm. . . . The men of prayer are the men of power" (Patriarchs and Prophets, p. 509).</p>
    `
  },
  {
    id: '11',
    title: 'Relationship to Church Organization',
    category: 'Organization',
    fullText: `
      <div class="text-center mb-10">
        <h1 class="text-3xl font-bold text-slate-900 font-serif">Chapter 11</h1>
        <h2 class="text-2xl font-semibold text-slate-700 mt-2">Relationship to Church Organization</h2>
      </div>

      <h4 class="font-bold text-lg mt-8 mb-3 text-slate-800 border-b border-gray-100 pb-2">ORGANIZATION IS NEEDED</h4>
      
      <p class="mb-4">Structure and organization, an observable reality in both the physical and social worlds, remains as the basis of all creation. From the minutest particles of an atom to the grand design of the cosmos, the structuring hand of God is observed. "Order is the law of heaven, and it should be the law of God's people on the earth" (Testimonies to Ministers, p. 26).</p>
      
      <p class="mb-4"><strong>Biblical basis of church organization.</strong> — Throughout biblical history God seeks to provide order and structure for His people. He gave ancient Israel an intricate system of organization, calling them from dysfunctional slavery in Egypt to become His chosen nation. Jesus founded the church, appointing His disciples as its leaders, and the Holy Spirit led the New Testament church as it grew in its mission and structure.</p>
      
      <p class="mb-4">Christ called the church into being, and while demonstrably evident that the church exists as an imperfect organization (being made up of imperfect people), yet "enfeebled and defective as it may be, [the church] is the only object on earth on which He bestows His supreme regard" (Testimonies to Ministers, p. 15). To be Christian means to love His church, for Christ "loved the church and gave Himself for it" (Eph. 5:25).</p>
      
      <p class="mb-4"><strong>Practical basis for church organization.</strong> — A nation, a business, or even the human body would fail without organization. The church, with the task of proclaiming God's saving grace to the world, would surely also fail without organization. Early in Adventist history the need for structure was clearly observed. "As our numbers increased, it was evident that without some form of organization there would be great confusion, and the work would not be carried forward successfully. To provide for the support of the ministry, for carrying the work in new fields, for protecting both the churches and the ministry from unworthy members, for holding church property, for the publication of the truth through the press, and for many other objects, organization was indispensable" (Testimonies to Ministers, p. 26).</p>

      <h4 class="font-bold text-lg mt-8 mb-3 text-slate-800 border-b border-gray-100 pb-2">BENEFITS OF ORGANIZATION</h4>
      
      <p class="mb-4">Many and varied forms of church structure can be found in the world of the Christian church. Unless a church operates as a stand-alone unit, there will be need for leadership of, and association among, the churches of a given denomination. Adventist Church polity is based on a representative form of governance, with the church unit as part of the sisterhood of churches in a conference, as delineated in the Church Manual and the General Conference Working Policy.</p>
      
      <p class="mb-4">Conferences depend almost totally on pastors for both church growth and nurture, since conference funds come from churches. Evangelism and church growth occur in the local congregations. Pastors and elders lead the local congregation, and they shepherd the flock. "Therefore take heed to yourselves and to all the flock, among which the Holy Spirit has made you overseers, to shepherd the church of God which He purchased with His own blood" (Acts 20:28).</p>
      
      <p class="mb-4"><strong>Administrative support.</strong> — Through actions of the conference executive committee, administrators assume the responsibility of providing pastors for the churches in their territory. In Adventist policy, employing entities have the responsibility of providing secure salary delivery systems for their pastors.</p>
      
      <p class="mb-4"><strong>Departmental resources.</strong> — Departmental directors serve as specialists and make their expertise available to pastors as they work with them in training their members. They do not have line authority over pastors, but serve as advisers and resource providers. Departmental leaders should make pastors aware of programs and materials available for church ministry, which will assist in the development of pastoral objectives and plans.</p>
      
      <p class="mb-4"><strong>Ministerial association secretary.</strong> — The ministerial association secretary serves as the pastor's pastor and provides specific services that include: a listening interest, a supervised internship, training in pastoral and evangelistic ministries, soul-winning tools to aid in ministry, continuing education opportunities, assistance in training church elders, support for the pastor's family, and a subscription to Ministry magazine.</p>

      <h4 class="font-bold text-lg mt-8 mb-3 text-slate-800 border-b border-gray-100 pb-2">COOPERATIVE MINISTRY</h4>
      
      <p class="mb-4">Ministry, as an intensely personal calling and service, must be performed under the guidance of the Holy Spirit and in accord with one's conscience. However, this does not give the minister license either to lead the church counter to its principles or to espouse positions contrary to the stated fundamental beliefs of the church. "Never should a laborer regard as a virtue the persistent maintenance of his position of independence, contrary to the decision of the general body" (Testimonies, vol. 9, p. 260). An Adventist pastor may make an individual choice in accepting church employment. However, upon becoming an employee and leader in the church, the pastor accepts certain obligations to the church body.</p>
      
      <p class="mb-4"><strong>1. Trust leadership.</strong> While church leadership cannot be described as perfect, it remains as the duly constituted authority in the church. While dialogue on variations in opinion is both permissible and good, when decisions are reached it becomes the responsibility of the pastor to support leadership. "Let us cherish a spirit of confidence in the wisdom of our brethren" (Testimonies to Ministers, p. 500).</p>
      
      <p class="mb-4"><strong>2. Consult leadership.</strong> Counsel with leadership before you enter into any activity that makes inroads on time normally meant for regular ministry. It may be helpful to get advice before buying or building a house, enrolling in an academic study program, or inviting guests to speak in the church.</p>
      
      <p class="mb-4"><strong>3. Hold leadership accountable.</strong> The Adventist form of church governance is representative rather than congregational, providing a democratic process that is both a privilege and an obligation to its members. While sensitive to individual church needs and wishes, it takes into account the broader perspective of both the sisterhood of churches and the worldwide work.</p>
    `
  },
  {
    id: '12',
    title: 'Departmental Services',
    category: 'Organization',
    fullText: `
      <div class="text-center mb-10">
        <h1 class="text-3xl font-bold text-slate-900 font-serif">Chapter 12</h1>
        <h2 class="text-2xl font-semibold text-slate-700 mt-2">Departmental Services</h2>
      </div>

      <p class="mb-4">The General Conference offers many departmental services designed to provide programs and resources to assist pastors and churches. Most of these departments have representatives at the division, union, and conference levels, although these departments should initially be contacted at the conference level. If not available, contact should be made with the next level of the church organization.</p>
      
      <p class="mb-4">The Adventist Yearbook, available online (adventistyearbook.org), provides a directory of church organizations worldwide, such as:</p>
      
      <p class="mb-4">The General Conference Headquarters: 12501 Old Columbia Pike, Silver Spring, Maryland 20904-6600; telephone: (301) 680-6000; Web site: www.adventist.org.</p>
      
      <p class="mb-4">Ministerial Association Web site: www.ministerialassociation.com.</p>
      
      <p class="mb-4">A listing of the departments that responded to a request for information follows in alphabetical order, with a brief statement of the purpose of each. For updates from the various departments, go to www.adventist.org and then the specific departments.</p>

      <h4 class="font-bold text-lg mt-8 mb-3 text-slate-800 border-b border-gray-100 pb-2">ADVENTIST CHAPLAINCY MINISTRIES</h4>
      
      <p class="mb-4"><strong>Purpose.</strong> — The Adventist Chaplaincy Ministries Department (ACM) extends the presence of the church into settings beyond the local church, where people are in crisis and in need of the good news of the gospel. This department encourages and helps equip the church to care effectively for the needs of these communities and their ministers as well as specialized populations both inside and outside the church. These include students on Adventist and public educational campuses, inmates in correctional facilities, patients in health-care facilities, military personnel, and others.</p>
      
      <p class="mb-4"><strong>Programs/Resources.</strong> — Adventist Chaplaincy Ministries, endorses and supports theologically trained and credentialed Adventist ministers to serve as chaplains on educational campuses, correctional institutions, health-care facilities, military branches, volunteer services, and other settings, and provides a variety of support functions.</p>
      
      <p class="mb-4">Ecclesiastical Endorsement. This process is a formal program that grants endorsement for chaplains: the voted affirmation of the church required by many employers and certifying bodies.</p>
      
      <p class="mb-4">Education. The department provides and/or coordinates many continuing education activities for chaplains worldwide, and works to establish indigenous chaplaincy training programs in the divisions. Pastors also are often able to participate in these programs. All of these educational offerings are provided under the auspices of the Institute for Chaplaincy Education—a curriculum of educational opportunities offered throughout the world church.</p>
      
      <p class="mb-4">The Adventist Chaplain is a quarterly publication designed for chaplains and church leaders.</p>
      
      <p class="mb-4">The Chaplain's Manual is a publication that provides an overview of the principles of chaplaincy ministry in a variety of settings. An interactive DVD presents an overview of chaplaincy for seminarians, pastors, church leaders, and others. Educational programs are offered to help chaplains meet ongoing professional development requirements. In addition, other brochures and materials are produced to meet needs as they arise. In some divisions, members in military service are also cared for.</p>
      
      <p class="mb-4">For God and Country is a publication that provides both printed and electronic educational resources dealing with issues related to the military.</p>
      
      <p class="mb-4">In addition, Adventist Church members in uniform have other church publications and spiritual-care programs available.</p>
      
      <p class="mb-4">Adventist Chaplaincy Ministries offers career guidance for chaplains and prospective chaplains, counsel and education for youth considering military and public service, and other related issues. ACM provides assistance for ministers helping parishioners dealing with these matters. The department often works with pastors and other departments, such as Public Affairs and Religious Liberty and the Office of General Counsel, to address religious accommodation issues that Adventists face in the settings in which chaplains serve.</p>

      <h4 class="font-bold text-lg mt-8 mb-3 text-slate-800 border-b border-gray-100 pb-2">ADVENTIST DEVELOPMENT AND RELIEF AGENCY</h4>
      
      <p class="mb-4">Present in 125 countries, the Adventist Development and Relief Agency (ADRA) serves people who need help securing basic needs such as food and water, establishing livelihoods, obtaining health care, achieving literacy and numeracy, and in surviving and thriving against disaster long after the world's attention has shifted elsewhere. Projects address sustainability as the key principle of development. Beyond providing temporary relief, ADRA also works to create long-term solutions. Through these programs, people claim ownership of their own development, leading to lasting stability and prosperity.</p>
      
      <p class="mb-4"><strong>Food and water.</strong> — Working in concert with communities, ADRA seeks to make available a dependable supply of food, including maize, beans, rice, vegetable oil, canned foods, and high-nutrient cookies, which help supplement caloric intake. In addition, ADRA provides information and instruction regarding the production of reliable crops and the availability of clean drinking water by drilling new wells, refurbishing old ones, and improving irrigation systems to allow people and their animals an adequate supply of water.</p>
      
      <p class="mb-4"><strong>Literacy and numeracy.</strong> — Breaking the self-perpetuating cycle of poverty for many requires literacy and numeracy training. As ADRA's programs have demonstrated, learning these basic skills, including reading, writing, and mathematics, fundamentally transforms lives while also improving the ability to function in day-to-day activities.</p>
      
      <p class="mb-4"><strong>Establishing livelihoods.</strong> — Working with individuals, especially poor women who have routinely been denied credit, helps them reach self-empowerment. By providing small loans and teaching them how to create and manage small business enterprises, they are placed on the road to prosperity, allowing them to take control of their own financial well-being. This provides a ripple effect while promoting more opportunities for entrepreneurship and stimulating the regional economy.</p>
      
      <p class="mb-4"><strong>Health care.</strong> — Basic treatment and health-care instruction address issues such as high infant mortality rates, maternal health, AIDS, malaria, tuberculosis, and poor access to medical care. These health issues are addressed by training health-care volunteers to teach communities about AIDS prevention, family planning, literacy, and the effects of poor health on the financial well-being of the family. This integral view acts as a catalyst to improve health awareness and attitudes throughout a community.</p>
      
      <p class="mb-4"><strong>Emergency response.</strong> — Disasters, whether natural or human-made, can strike at any moment. For this reason ADRA prepares ahead of time to deliver assistance—food, clothing, water, shelter, and medical needs—well before problems arise. Then, after disaster strikes, help is provided in rebuilding homes and infrastructure and in development programs that assist those affected to become financially independent again.</p>

      <h4 class="font-bold text-lg mt-8 mb-3 text-slate-800 border-b border-gray-100 pb-2">ADVENTIST MISSION</h4>
      
      <p class="mb-4"><strong>Purpose.</strong> — The Adventist Mission Department (AMD) seeks to establish an Adventist presence in all people groups where presently none exists, with the goal to reach the unreached with hope. AMD raises mission awareness through materials, resources, and programs designed to inform and inspire church members regarding the full range of mission activities of the Seventh-day Adventist Church. This includes reporting to church members the results of mission offerings and the vital importance of continued support of these offerings.</p>
      
      <p class="mb-4"><strong>Programs/Resources.</strong> — Resources are provided for pastors to share the challenge and opportunities of mission around the world. These include missionary diaries, photos, podcasts, PowerPoint presentations, video productions, newsletters, Global Mission Pioneer, and mission stories. The Adventist Mission quarterly DVD, sent free to every division for distributing to local churches, contains reports of varying length about Thirteenth Sabbath Offering projects, as well as the broad range of mission work supported by mission offerings.</p>
      
      <p class="mb-4">Adventist Mission for Children and Adventist Mission for Youth and Adults are quarterly magazines that contain mission stories with a special focus on Thirteenth Sabbath Offering projects. These are provided in a format that can be presented in Sabbath school programs and elsewhere.</p>
      
      <p class="mb-4">Three quarterly full-color Global Mission newsletters, Frontline Edition, Prayer Calendar, and Picture Story, contain stories, reports, and pictures of Global Mission work around the world.</p>
      
      <p class="mb-4">Mission Week is a curriculum of five daily devotional programs with mission emphasis created for children in grades K-8 (ages 5-14). These programs contain video stories, scripts, and activities designed to teach, inspire, and motivate children to get involved in the mission work of the church.</p>
      
      <p class="mb-4">SEEDS conferences are conducted annually at Andrews University, Berrien Springs, Michigan, United States, and in other locations by invitation. The purpose of SEEDS is to cast the vision and provide resources for church planting and for ministries that support church planting.</p>
      
      <p class="mb-4">ChurchWorks conferences are conducted at the invitation of local conferences. These programs are designed for pastors and core lay leadership teams from their churches. ChurchWorks casts the vision and helps leaders create strategy for reaching every person in their territory, using every member's spiritual gifts and every ministry of the church in outreach.</p>
      
      <p class="mb-4">Five Global Mission Religious Study Centers are developing methods, approaches, and tools to help the world church witness effectively and appropriately to people from other religious traditions, including Judaism, Islam, Buddhism, Hinduism, secularism, and postmodernism. Available to pastors, missionaries, Global Mission pioneers, and other church members, these services include programs, training sessions, seminars, Web sites, and various written and electronic materials.</p>

      <h4 class="font-bold text-lg mt-8 mb-3 text-slate-800 border-b border-gray-100 pb-2">ADVENTIST WORLD RADIO</h4>
      
      <p class="mb-4"><strong>Purpose.</strong> — Adventist World Radio, the mission radio arm of the Seventh-day Adventist Church, uses shortwave, AM/FM, satellite, Internet broadcasts, and podcasting. These programs carry the gospel to people difficult to reach because of political restrictions, cultural barriers to Christianity, and geographic obstacles. The mission focuses on broadcasting the Adventist hope in Christ to the hardest-to-reach people groups of the world in their own languages. This primary target expects to share the gospel with people living in the 72 countries within the 10/40 window that contains two thirds of the world's population, of which less than 2 percent are Christian. Broadcasts also reach Africa, Europe, and Latin America. Programming, developed by native-speaking staff in each country, is designed to connect with non-Christian listeners.</p>
      
      <p class="mb-4"><strong>Programs/Resources.</strong> — Broadcast schedules may be found on Adventist World Radio's Web site. The schedule may be searched for a particular country, or the entire schedule may be obtained.</p>
      
      <p class="mb-4">Podcasting provides various language broadcast availability anywhere in the world by means of the Internet. The podcasting information can be advertised widely or shared personally as a means of witness.</p>
      
      <p class="mb-4">Exciting and inspirational mission stories that can be shared in Sabbath school programs, worship services, or on other occasions are available. The e-mail newsletter Inspirations is available on the Web site, as well as the printed newsletter Transmissions and DVDs.</p>
      
      <p class="mb-4">Resources promoting the annual offering are available from the Adventist World Radio office or on the AWR Web site.</p>
      
      <p class="mb-4">Contact the AWR office to arrange for a speaker for church programs, camp meetings, or other occasions, or for brochures, videos, or PowerPoint programs for public presentation, children's activity sheets, or other new resources. Pastors who work in territories where AWR broadcasts are available may receive names of interested listeners for follow-up.</p>

      <h4 class="font-bold text-lg mt-8 mb-3 text-slate-800 border-b border-gray-100 pb-2">BIBLICAL RESEARCH INSTITUTE</h4>
      
      <p class="mb-4"><strong>Purpose.</strong> — The Biblical Research Institute (BRI) promotes the study and practice of Adventist theology and lifestyle as understood by the world church. The institute provides theological resources for the administration and departments of the General Conference and the church. BRI identifies areas of doctrinal and theological discussion, seeking to enhance understanding and build commitment to the truths of Scripture.</p>
      
      <p class="mb-4">BRI encourages and facilitates dialogue with the Seventh-day Adventist theological community, endeavoring to foster doctrinal and theological unity in the world church. The institute also directs the work of the Biblical Research Institute Committee, which consists of members from around the world.</p>
      
      <p class="mb-4"><strong>Programs/Resources.</strong> — The Biblical Research Institute provides many resources for pastors, including books from the Web site bookshop. Also available are documents on the Web site that deal with Adventist doctrine and theology and other issues of interest to pastors. In addition, the institute conducts seminars in biblical studies and theology.</p>

      <h4 class="font-bold text-lg mt-8 mb-3 text-slate-800 border-b border-gray-100 pb-2">CHILDREN'S MINISTRIES</h4>
      
      <p class="mb-4"><strong>Purpose.</strong> — The Children's Ministries Department seeks to nurture children, from birth to 14 years of age, into a loving, serving relationship with Jesus by developing (1) grace-oriented ministries, wherein children experience the unconditional love of Jesus; (2) inclusive ministries, which value all children and volunteers regardless of race, color, gender, language, or abilities; (3) leadership ministries, in which volunteers are empowered, trained, and equipped for effective ministry to children; (4) service-oriented ministries, wherein children are given hands-on service to reach out to the community; (5) cooperative ministries, in which the department works closely with other ministries to further shared goals; (6) safe ministries, whereby churches adopt safeguards to protect children from physical, spiritual, emotional, and sexual abuse; and (7) evangelistic ministries, in which children, not enfolded in the church, are introduced to Jesus through such outreach programs as Vacation Bible Schools and Story Hour.</p>
      
      <p class="mb-4"><strong>Programs/Resources.</strong> — Children's Ministries has joined with the Ministerial Association to publish the Pastor's and Elder's Handbook for Children's Ministries. This practical guide for pastors and elders assists in providing help, support, and motivation for children's leaders to maximize their gifts and time in developing the faith of the children within the church.</p>
      
      <p class="mb-4">The publication God Loves Me 28 Ways serves as a useful tool for pastors who are giving children's Bible studies or studying the fundamental beliefs of the church with children. The Web site contains additional information regarding other resources of the department, as well as information to help train children's ministry coordinators for organizing children's ministry in the local church.</p>

      <h4 class="font-bold text-lg mt-8 mb-3 text-slate-800 border-b border-gray-100 pb-2">COMMUNICATION</h4>
      
      <p class="mb-4"><strong>Purpose.</strong> — The Communication Department seeks to build bridges of hope while endeavoring to create a favorable image of the church and its mission, life, and activities that will encourage people to become followers of Christ. These bridges may be accomplished by building trust among groups of people by the sharing of accurate information, using contemporary technologies and methods of communication to reach the diverse audiences, both within and without the church, with an open, responsible, and hope-filled communication program.</p>
      
      <p class="mb-4"><strong>Programs/Resources.</strong> — The Adventist News Network offers information about the international denomination that exists beyond the walls of a single church. Pastors, administrators, and church members may receive and offer news regarding the church's successes, challenges, and opportunities. This news can be used to inform and inspire church members, as well as connect with the communities served.</p>

      <h4 class="font-bold text-lg mt-8 mb-3 text-slate-800 border-b border-gray-100 pb-2">EDUCATION</h4>
      
      <p class="mb-4"><strong>Purpose.</strong> — Responsible for the coordination, promotion, and quality of the church's educational program, the Education Department works in cooperation with education directors at the division level. The purpose of the department is carried out through its role in coordinating the functions of the International Board of Education, the International Board of Ministerial and Theological Education, and the Accrediting Association of Seventh-day Adventist Schools, Colleges, and Universities, the three boards that authorize new institutions and programs and assess the extent to which schools support the mission and accreditation standards of the church.</p>
      
      <p class="mb-4">The department offers services to boards, administrators, and faculty of Adventist colleges and universities by providing faith and learning seminars for teachers, workshops for administrators, and advice to institutions. The department assists church and school leaders as they address school board governance issues, strategic planning, and accreditation matters.</p>
      
      <p class="mb-4">Education Department publications (the Journal of Adventist Education, providing information regarding the most important issues to Adventist teachers and administrators; and Dialogue, targeting Adventist college and university students who may or may not currently attend Adventist colleges/universities) serve as vehicles to connect the church to Adventist students and teachers worldwide. These journals are available in English, Spanish, Portuguese, and French.</p>
      
      <p class="mb-4">The department works in cooperation with the Youth Ministries and Chaplaincy Ministries departments to maintain contact with Adventist higher education students in educational institutions not affiliated with the Adventist system. This work is best carried out in connection with local church pastors whose churches are in close proximity to public higher education institutions that have Adventist students in attendance.</p>
      
      <p class="mb-4"><strong>Programs/Resources.</strong> — The department provides several resources: (1) Handbook of Seventh-day Adventist Ministerial and Theological Education; (2) A Guidebook for Creating and Implementing a Spiritual Master Plan on Seventh-day Adventist Campuses of Higher Education; (3) Quality Management in Higher Education; (4) Strategic Planning in Higher Education; (5) Light Bearers: A History of the Seventh-day Adventist Church; (6) In Passion for the World: A History of Seventh-day Adventist Education; (7) a 35-volume series entitled Christ in the Classroom: Adventist Approaches to the Integration of Faith and Learning.</p>
      
      <p class="mb-4">In connection with Andrews University, the department manages a human resource database of Seventh-day Adventist professionals who have baccalaureate and/or graduate degrees.</p>

      <h4 class="font-bold text-lg mt-8 mb-3 text-slate-800 border-b border-gray-100 pb-2">FAMILY MINISTRIES</h4>
      
      <p class="mb-4"><strong>Purpose.</strong> — The Family Ministries Department seeks to strengthen the home as a discipling center, the primary setting in which spiritual and other life values, and the development of close relationships with God and people, are learned. Family Ministries focuses on relational connections in marriage, between parents and children, and among siblings and others in the wider family circle.</p>
      
      <p class="mb-4">As a ministry of grace, Family Ministries endeavors to enable families to stretch toward divine ideals while understanding that they will experience brokenness in a fallen world. Family Ministries seeks to aid in the growth of wholesome, emotionally healthy families, resulting in families able to help build strong churches and present a winsome witness to society. Family Ministries fosters competence in the interpersonal skills needed in relationships and provides growth opportunities through family life education and enrichment. While not responsible for counseling, the department encourages individuals, couples, and families to avail themselves of professional help when needed.</p>
      
      <p class="mb-4"><strong>Programs/Resources.</strong> — An adequate ministry to families will include premarital guidance available to all couples; regular marriage-strengthening events; parent education; ministry to the special relational needs of single adults, single parents, and stepfamilies; instruction in family-to-family evangelism; and support ministries to help families with extraordinary needs. To accomplish such ministry more effectively, church boards may establish a family ministries committee. To assist pastors, local church leaders, and family ministries committees, the department offers the following:</p>
      
      <p class="mb-4">Family Ministries handbooks. The General Conference Family Ministries Department and its division associates have produced such manuals for conducting the ministry as Caring for Families Today; The Pastor's and Elder's Handbook for Family Ministries (published by the Ministerial Association) provides orientation and guidance for facilitating family ministries in the church.</p>
      
      <p class="mb-4">Curriculum framework books. The department coordinates development of the world church curriculum framework for comprehensive family life education presented in books that summarize core teaching content in family life for pastors and family life leaders, such as Human Sexuality: Sharing the Wonder of God's Good Gift With Your Children.</p>
      
      <p class="mb-4">Annual planbooks. A book of resources containing sermons, mini-seminars, stories, leadership articles, and book reviews is produced each year by the department to support churches in planning and programming for the annual Christian Home and Marriage Week (February) and Family Togetherness Week (September).</p>
      
      <p class="mb-4">Specific program resources. The department has produced specific program resources that pastors or church leaders can adapt for local use, such as Preparing for Marriage (premarital guidance); Caring for Marriage (marriage enrichment); You Are Not Alone (singles ministry); Peace and Healing: Making Homes Abuse Free (family violence); Jumpstart Connections (short scripts for mini-sermons, audio broadcasts, etc.).</p>
      
      <p class="mb-4">Leadership development. The department provides leadership development through its family life education certificate program. Course resources for division, union, and conference department directors are available through the General Conference. Contact conference family ministries directors for availability of a lay leaders' family ministries development program and certificate.</p>
      
      <p class="mb-4"><strong>Contact Information.</strong> — For more information on the department and available resources, contact conference family ministries directors or the General Conference Family Ministries office: Family Ministries Department, General Conference of Seventh-day Adventists, 12501 Old Columbia Pike, Silver Spring, MD 20904 USA.</p>

      <h4 class="font-bold text-lg mt-8 mb-3 text-slate-800 border-b border-gray-100 pb-2">HEALTH MINISTRIES</h4>
      
      <p class="mb-4"><strong>Purpose.</strong> — Health Ministries' goal includes revealing the compassion and care of our Lord Jesus through concern for the well-being of the whole person. The blessing of health is to be nurtured, shared, and celebrated among members and the community. Health ministry, an integral part of gospel ministry and the mission of the church, incorporates preaching, teaching, and healing. While part of this work will help restore health, the essence of this ministry reveals Christ in all His beauty.</p>
      
      <p class="mb-4">Health Ministries seeks to be the active expression of caring concern. This gospel ministry of health seeks to embrace the church congregation and the wider community within which the congregation lives.</p>
      
      <p class="mb-4"><strong>Programs/Resources.</strong> — The Health Ministries Department, at every level of church organization, either produces or distributes a wide variety of resources. These include youth mentoring programs, stress management, smoking cessation, lifestyle modification, health expo materials, prepared lectures, and educative courses. Information regarding these and other materials and programs can be found on the department Web site.</p>
      
      <p class="mb-4"><strong>Contact Information.</strong> — Visit either the department or Health Connection Web site for hundreds of health materials, DVDs, CDs, and health aids.</p>

      <h4 class="font-bold text-lg mt-8 mb-3 text-slate-800 border-b border-gray-100 pb-2">MINISTERIAL ASSOCIATION</h4>
      
      <p class="mb-4"><strong>Purpose.</strong> — The Ministerial Association of the General Conference of Seventh-day Adventists provides support, continuing education, encouragement, and resources to ministerial workers, accomplished by providing and participating in seminars, in meetings for ministers, and in a variety of resources.</p>
      
      <p class="mb-4"><strong>Programs/Resources.</strong> — A summary of resources provided by the Ministerial Association is listed below. Contact the Ministerial Association for the most current list.</p>
      
      <p class="mb-4">Evangelism/Church Growth provides evangelism support and resources to pastors.</p>
      
      <p class="mb-4">The Ministerial Resource Center publishes books, pamphlets, CDs, and DVDs on a variety of topics. In most instances organizations need to place an order in advance so that the cost will be minimal.</p>
      
      <p class="mb-4">Ministry, an international journal for pastors, has been published since 1928 and is currently made available to both Adventist ministers and clergy of other denominations. Adventist ministers usually obtain the journal through their employing organization.</p>
      
      <p class="mb-4">Ministry Professional Growth Seminars provides seminars by satellite and Web site to ministers around the world. It also coordinates the providing of Ministry to clergy of other denominations.</p>
      
      <p class="mb-4">Resources for Elders provides a variety of information for church elders, including Elder's Digest, a journal for elders available worldwide through local conferences. Also provided are training seminars for elders, in cooperation with other church organizations.</p>
      
      <p class="mb-4">Shepherdess/Ministry to Clergy Families provides seminars and resources to clergy spouses and families. In addition to providing events throughout the world, it publishes Shepherdess Journal, available in various conferences.</p>
      
      <p class="mb-4"><strong>Contact Information.</strong> — Each entity of the Ministerial Association may be contacted directly, or contact the central Ministerial Association office in order to have your request directed to the appropriate person.</p>

      <h4 class="font-bold text-lg mt-8 mb-3 text-slate-800 border-b border-gray-100 pb-2">PLANNED GIVING AND TRUST SERVICES</h4>
      
      <p class="mb-4"><strong>Purpose.</strong> — A highly specialized ministry, Planned Giving and Trust Services helps members and friends of the church prepare such planned gifting instruments as wills, trusts, annuities, pooled income contributions, and outright gifts. The mission encourages and facilitates the expanding of God's work through planned gifts adapted to donors' local jurisdictions. In order to help members accomplish their giving and financial goals, Planned Giving and Trust Services personnel collaborate with other professionals, including attorneys, accountants, financial planners, and others.</p>
      
      <p class="mb-4">Two major general types of trusts are available: (1) revocable, and (2) irrevocable. A revocable trust allows the grantor to withdraw any or all assets, as well as to have full enjoyment of the property during the individual's lifetime. At death the assets flow efficiently to the beneficiaries, saving probate and administrative costs. An irrevocable trust titles assets to the church, providing immediate tax benefits along with income for life.</p>
      
      <p class="mb-4"><strong>Programs/Resources.</strong> — A series of eight Planning for the Cycle of Life brochures focusing on differing ages and family and life situations present how the department can help. In connection with the brochures, a series of display advertisements in various sizes from full page to one-eighth page are available, as well as suggestions for church bulletin and bulletin board, and tithe envelopes, church periodicals, and other means of communication.</p>
      
      <p class="mb-4">The department provides a wide range of seminars suitable for pastors' meetings, camp meetings, and wills and family finance planning weekends for churches and other venues. Planned Giving and Trust Services personnel often team with attorneys, accountants, financial planners, and other professionals to provide seminars for church and/or retreat venues.</p>

      <h4 class="font-bold text-lg mt-8 mb-3 text-slate-800 border-b border-gray-100 pb-2">PUBLIC AFFAIRS AND RELIGIOUS LIBERTY</h4>
      
      <p class="mb-4"><strong>Purpose.</strong> — The Public Affairs and Religious Liberty Department (PARL) seeks to promote and defend religious liberty. Religious liberty includes the right to have or adopt the religion of one's choice, to change religious belief according to conscience, to manifest one's religion individually or in community with fellow believers, in worship, practice, witness, and teaching, subject to respect for the equivalent rights of others.</p>
      
      <p class="mb-4">Involved in government relations and interchurch contacts, the department also networks with nongovernmental organizations that have kindred goals in upholding religious freedom. PARL not only works for the religious liberties of individual church members and organized entities of the church, but also supports freedom of belief for all people everywhere.</p>
      
      <p class="mb-4">In view of the Seventh-day Adventist understanding of the great controversy and the climactic events of human history involving union of church and state that will eliminate the free exercise of religion and result in persecution of the faithful remnant, the department seeks to monitor and interpret current trends that may reflect the prophetic scenario.</p>
      
      <p class="mb-4"><strong>Programs/Resources.</strong> — Festivals of Religious Freedom; regional Religious Liberty Congresses; annual Liberty Awards Dinner; IRLA Meeting of Experts; television presentation Global Faith and Freedom; World Congress on Religious Freedom; conferences/seminars; Religious Liberty Emphasis Sabbaths; Religious Liberty Leader's Handbook; Fides et Libertas (the journal of the International Religious Liberty Association); Religious Freedom World Report; Liberty magazine.</p>

      <h4 class="font-bold text-lg mt-8 mb-3 text-slate-800 border-b border-gray-100 pb-2">PUBLISHING</h4>
      
      <p class="mb-4"><strong>Purpose.</strong> — The Publishing Department serves members of the church and the broader general market, providing primarily printed material for spiritual nurture and evangelistic outreach to the community. To accomplish these objectives, the department seeks to (1) motivate church members to participate in sharing literature with others as part of mission outreach; (2) encourage consideration of literature evangelism as a full-time ministry, providing training and supervision; and (3) encourage members to own and study devotional books for spiritual nurture and growth.</p>
      
      <p class="mb-4"><strong>Programs/Resources.</strong> — Publishing Department personnel provide Literature Awareness Seminars and literature evangelism rallies for churches to create awareness among members for literature evangelism involvement. Literature Ministry Seminary programs provide training for literature evangelists on how to assist pastors in church leadership and evangelism. Young people in school are recruited to join in literature evangelism campaigns during vacation periods.</p>
      
      <p class="mb-4">Each year the department, in coordination with Adventist publishing houses, selects the Missionary Book of the Year, which is made available worldwide to share as an evangelistic outreach. Churches are also encouraged to establish a lending library for evangelistic outreach.</p>
      
      <p class="mb-4">Book sale events are sponsored through publishing houses at Adventist Book Centers, at camp meetings, and in churches, providing Adventist literature at special prices. Books of particular interest to literature evangelism include Colporteur Ministry, Publishing Ministry, and Miracles of Grace, a book of sermon illustrations providing 365 literature evangelism experiences.</p>
      
      <p class="mb-4">Other literature evangelism materials available include a manual for church publishing coordinators, literature ministry training materials available in hard copy, PowerPoint presentations, a video presentation on ways to share books and magazines, and a video regarding recruitment of regular and student literature evangelists. Magazines regarding literature ministry include Literature Evangelist magazine and Publishing Leadership Digest.</p>

      <h4 class="font-bold text-lg mt-8 mb-3 text-slate-800 border-b border-gray-100 pb-2">SABBATH SCHOOL AND PERSONAL MINISTRIES</h4>
      
      <p class="mb-4"><strong>Purpose.</strong> — The Sabbath School Department focuses its thrust in both Sabbath school and personal ministries through a balanced and interrelated emphasis on fellowship, outreach, Bible study, and mission. The department also provides leadership, resources, training, creativity, and inspiration for the discipling of the local church membership through the synergistic ministries of transformational religious education for all ages.</p>
      
      <p class="mb-4"><strong>Programs/Resources.</strong> — The most widely recognized and used resource provided by this department is the publication of Bible Study Guides for all age groups. These include: Beginner (birth-2 years); Kindergarten (3-5 years); Primary (6-9 years); PowerPoints (10-14 years); Real-Time Faith (an alternative for 13-14 years); Cornerstone Connections (15-18 years); and CQ (19-35 years). Each of these publications has a teacher's guide and other curricular resources. The Sabbath School and Personal Ministries Department serves in an advisory capacity in the development of the Adult Bible Study Guide.</p>
      
      <p class="mb-4">Enriching Sabbath School, a video with a leader's guide, provides a full exploration and development of the four foci that are integral to the vital Sabbath school for adults. Other available media include Sabbath School University, a weekly 30-minute video program accessible through satellite broadcast, the Internet, and audio and video podcast.</p>
      
      <p class="mb-4">Resources for programming for the adult Sabbath school are also provided through Cool Tools for Sabbath School, available on the department Web site specifically to aid leadership in the various responsibilities for Sabbath school. Topics include: superintendence, teaching, secretarial, Investment, branch Sabbath schools, music, prayer, fellowship, outreach, and mission. The department also provides training workshops and seminars for the improvement of learning in Sabbath school classes.</p>
      
      <p class="mb-4">The International Institute of Christian Ministries provides coursework and certification in adult religious education, children's religious education, local church leadership, personal evangelism, public evangelism, and youth and young adult religious education.</p>
      
      <p class="mb-4">The Reaching and Winning series of booklets makes available a thorough and systematic approach for ways in which to engage members of a specific faith group. Currently there are booklets for those who witness to Mormons, Hindus, Buddhists, etc. And more options are being added to this series regularly. Training for personal witnessing techniques, conducting Bible studies, church leadership, and other forms of ministry are presented in workshops and seminars.</p>
      
      <p class="mb-4">Seminars and workshops regarding Adventist Community Services supplies motivation, training, and resources that aid church leaders and members in becoming more involved in their communities. The Handbook for Community Services and a Community Services section on the department Web page provide further resources.</p>
      
      <p class="mb-4">Bible correspondence schools provide Bible lessons on request from radio, television, Internet, other media, and various means of advertisement, and these students are placed in contact with church outreach ministries. Churches may establish local-based Bible schools (Discover Bible Schools) for this purpose. Such Bible schools are a means through which members enroll students in the program and provide lessons by one-to-one contacts, small groups, the Internet, video/DVDs, and postal correspondence. The department supplies resources, consultation, and training.</p>

      <h4 class="font-bold text-lg mt-8 mb-3 text-slate-800 border-b border-gray-100 pb-2">STEWARDSHIP</h4>
      
      <p class="mb-4"><strong>Purpose.</strong> — The Stewardship Department provides and promotes an integrated approach to stewardship education that focuses on the Lordship of Jesus Christ. Within this theological framework stewardship equates with a lifestyle of service, sacrifice, and life partnership with God. This includes financial stewardship that seeks to inform, encourage, and remind church members of their spiritual responsibility to return tithe and give offerings of gratitude to God as a consequence of their covenant relationship with Him. These acts of faithfulness and thankfulness are the outward expression of the work of God in the believer's heart and a love response that acknowledges God as Creator, Owner, and Sustainer of life.</p>
      
      <p class="mb-4"><strong>Programs/Resources.</strong> — The department provides ministry resources that can be used for personal study or as tools for teaching stewardship education in the church. These resources are listed under books/booklets, seminar material, or journals, on the department Web site that lists additional and updated resources. These materials may also be ordered from the General Conference Stewardship Department.</p>
      
      <p class="mb-4">Books include Stewardship Roots, a theology of stewardship, tithe, and offerings, and Tithing in the Writings of Ellen G. White, a study of the influence of Scripture that shaped Ellen White's understanding of tithing. Topics include such subjects as the motivation for tithing and spiritual life, the logistics of tithing, and the uses of tithe. Tithing in the New Testament and the Christian Church addresses the issue of early church support of the gospel ministry through tithe. Strategic Church Finances: A Biblical Approach is based on a two-day seminar exploring a strategic approach to church finances built on an understanding of biblical stewardship.</p>
      
      <p class="mb-4">The Stewardship seminar Let God Be God: Biblical Stewardship Foundations presents a three-DVD set addressing the biblical basis of stewardship. The stewardship journal Dynamic Steward is a quarterly publication with articles, sermons, book reviews, and other ministry tools that focus on a specific topic and theme.</p>

      <h4 class="font-bold text-lg mt-8 mb-3 text-slate-800 border-b border-gray-100 pb-2">WHITE ESTATE</h4>
      
      <p class="mb-4"><strong>Purpose.</strong> — The Ellen G. White Estate, Inc., was created by Ellen White's will at her death to serve as the custodian of her writings. Its five trustees care for her letters and manuscripts, maintain her copyrights, promote her writings in English, provide for their translation into other languages, and produce compilations as needed. Additionally, at the request of the General Conference, the White Estate provides the church with information about Ellen G. White and Adventist history. The White Estate also operates research centers in each of the world divisions.</p>
      
      <p class="mb-4"><strong>Programs/Resources.</strong> — As the proprietor of the Ellen G. White writings, the White Estate works with the church's publishing houses to keep the books in print and foster their circulation. Since 1990 the White Estate has also made the published writings of Mrs. White available electronically on CD-ROM and since 1995 on the World Wide Web. Estate staff members are available to speak for workers' meetings, camp meetings, and other similar gatherings.</p>
      
      <p class="mb-4">Each year the White Estate prepares a sermon, a children's story, and other materials that pastors can use for the annual Heritage Day in October. These materials are accessible on the White Estate Web site. In addition the Web site contains study guides for many of Ellen G. White's books, access to a large database of historical photographs, the full text of a number of books about Ellen G. White by other authors, and a searchable database of Ellen G. White's complete published writings. Other features include a daily devotional reading and a thought for the day, resources for children and youth, audio stories of the pioneers, and an extensive collection of materials about Ellen White and the gift of prophecy, including information regarding accusations made by her critics.</p>

      <h4 class="font-bold text-lg mt-8 mb-3 text-slate-800 border-b border-gray-100 pb-2">WOMEN'S MINISTRIES</h4>
      
      <p class="mb-4"><strong>Purpose.</strong> — The Women's Ministries Department upholds, encourages, and challenges Seventh-day Adventist women in their daily walk as disciples of Jesus Christ and as members of His world church. There are six Challenge Issues that guide this purpose: women's health, abuse, poverty, women's workloads, lack of leadership training and education, and illiteracy. These issues affect women of all cultures, social standing, and countries.</p>
      
      <p class="mb-4">The department's objectives include nurturing women in the church and in the community while empowering them to become stronger women of God in the areas of Bible study, prayer, and personal growth, and providing an outreach to women in the community.</p>
      
      <p class="mb-4"><strong>Programs/Resources.</strong> — A four-level training program, the Women's Leadership Certification Program, seeks to educate women in leadership and other related issues, while also providing for confidence in church leadership.</p>
      
      <p class="mb-4">The Women's Ministries Scholarship Program provides support for Seventh-day Adventist women pursuing tertiary education.</p>
      
      <p class="mb-4">Abuse Prevention Emphasis Day is scheduled yearly for the fourth Sabbath of August. Women's Ministries spearheads this joint departmental yearly program, with an emphasis on breaking the silence on abuse. The department provides a series of brochures to supplement the yearly materials prepared for this day of emphasis.</p>
      
      <p class="mb-4">The Challenge Issues set of six informational brochures provides information on various topics of significance to women generally. Resource kits address specifically issues of interest to single women, teens, and young women.</p>
      
      <p class="mb-4">Three newsletters are available from the department: MOSAIC presents news from the world of women's ministry; Scholarshipping Our Sisters addresses fund-raising support for scholarships; and the Touch a Heart, Tell the World newsletter reports on women's ministry projects and aids in fund-raising.</p>
      
      <p class="mb-4">The HIV/AIDS educational flip chart tells the story of HIV/AIDS and provides information regarding the care of those infected with HIV/AIDS.</p>
      
      <p class="mb-4">A variety of seminars designed to assist women in the area of personal development are available. The department publishes a new women's devotional book each year comprised of readings written by women, with the proceeds of this book supporting the Women's Ministries Scholarship Program.</p>

      <h4 class="font-bold text-lg mt-8 mb-3 text-slate-800 border-b border-gray-100 pb-2">YOUTH MINISTRIES</h4>
      
      <p class="mb-4"><strong>Purpose.</strong> — The Youth Ministries Department, built on salvation and service, seeks to facilitate and support the ministry of pastors and churches in winning, training, holding, and reclaiming youth. The department assists the church in forming objectives, goals, plans, and training that will equip the body of the church to save its youth and prepare them for ministry. The department specializes in activities that foster Christian understanding and participation in church life and community service through four key foci: discipleship, leadership, witnessing, and service.</p>
      
      <p class="mb-4"><strong>Programs/Resources.</strong> — The department provides the Pastor's and Elder's Youth Ministry Handbook, the Youth Ministry Handbook, The Pathfinder Story, The AY Story, The Adventurer Story, Master Guide, AY Leadership Award, and Pathfinder Leadership Award. The official Youth Ministry Book for Adventist Churches is Getting It Right, published by the Review and Herald Publishing Association.</p>
      
      <p class="mb-4">Functions for various age groups include: Leadership for the Senior Youth program, ages 22-30; Ambassador Club, ages 16-21; Pathfinder program, ages 10-15; Adventurer program, ages 6-9.</p>
      
      <p class="mb-4">Youth Accent is a quarterly magazine designed for use by church youth leaders and pastors. Youth Week of Prayer materials are prepared annually for church use, with materials for weekly youth programs prepared on an annual basis.</p>
      
      <p class="mb-4">Multiple manuals provide information for the operation of youth programs, and Pathfinder Club, Adventurer Club, and Ambassador Club organizations. Materials for youth evangelistic programs and mission/service are also available.</p>
      
      <p class="mb-4">A World Conference on Youth and Community Service is scheduled every five years in a selected venue/country. Campus Ministries programs are fostered through the organization of student associations in university centers. These ministries train students for outreach, hold student retreats, and develop materials for use in these venues.</p>
    `
  },
  {
    id: '13',
    title: 'Church Policy',
    category: 'Administration',
    fullText: `
      <div class="text-center mb-10">
        <h1 class="text-3xl font-bold text-slate-900 font-serif">Chapter 13</h1>
        <h2 class="text-2xl font-semibold text-slate-700 mt-2">Church Policy</h2>
      </div>

      <p class="mb-4">The church, in its broadest sense, exists when people individually respond to the call of God. But God does not call His people to isolation—He calls them to community, "not forsaking the assembling of ourselves together," as Scripture states (Heb. 10:25). In this mode of assembling together, the church as structure comes into existence. For this to occur, it is natural and necessary that some form of agreed-upon structure must and does occur. In order to guide this structure, the Seventh-day Adventist denomination has established policies and procedures for the harmonious operation of the church as institution. Three primary publications address these procedures: the Church Manual, the General Conference Working Policy, and the Minister's Handbook.</p>

      <h4 class="font-bold text-lg mt-8 mb-3 text-slate-800 border-b border-gray-100 pb-2">CHURCH MANUAL</h4>
      
      <p class="mb-4">The Church Manual provides policies for denominational operation. Established and revised by the General Conference in session, the Church Manual serves as the authoritative voice of the church on matters of organization and operation and can be changed only by the General Conference in session. Pastors are responsible for the application of its policies in churches. "When, in a General Conference, the judgment of the brethren assembled from all parts of the field is exercised, private independence and private judgment must not be stubbornly maintained, but surrendered" (Testimonies, vol. 9, p. 260).</p>
      
      <p class="mb-4">The Church Manual does have flexibility, permitting adaptation to varying cultures and social settings as reflected in the division editions. From time to time it is good and necessary to change these policies as the need becomes clear. Such changes arise out of recognized need in the church, and are passed on to the conference for process through the organizational structure of the church to the General Conference.</p>

      <h4 class="font-bold text-lg mt-8 mb-3 text-slate-800 border-b border-gray-100 pb-2">GENERAL CONFERENCE WORKING POLICY</h4>
      
      <p class="mb-4">The General Conference Working Policy (and the division and union adaptations of it) provides policies for operation at the various levels of the church institution. This policy is reviewed, modified, and updated at the General Conference Annual Council and at the division year-end meetings.</p>

      <h4 class="font-bold text-lg mt-8 mb-3 text-slate-800 border-b border-gray-100 pb-2">MINISTER'S HANDBOOK</h4>
      
      <p class="mb-4">The Minister's Handbook provides additional ministerial guidelines for church operation. Prepared by the General Conference Ministerial Association in consultation with pastors and other church leaders from the world field, the Minister's Handbook is updated as needed.</p>
    `
  },
  {
    id: '14',
    title: 'Credentials and Licenses',
    category: 'Administration',
    fullText: `
      <div class="text-center mb-10">
        <h1 class="text-3xl font-bold text-slate-900 font-serif">Chapter 14</h1>
        <h2 class="text-2xl font-semibold text-slate-700 mt-2">Credentials and Licenses</h2>
      </div>

      <h4 class="font-bold text-lg mt-8 mb-3 text-slate-800 border-b border-gray-100 pb-2">PURPOSE</h4>
      
      <p class="mb-4">Churches, in their collective capacity through the conference, confer upon certain individuals the authority to represent and speak for the church as authorized ministers, by the granting of credentials and licenses. Together with the union level of governance, they carry the responsibility of overseeing the issuing of these credentials and licenses. "The union and local conferences/missions/fields share the responsibility for safeguarding the integrity of the ministry and are required by denominational action and practice to assure that credentials issued within their respective territories shall indeed certify that the holders are in good and unquestioned standing, properly subject to invitation to any other field of service" (GC Policy L 60 05).</p>
      
      <p class="mb-4"><strong>Protection.</strong> — Credentials and licenses protect congregations from those who might mislead, misrepresent, or offend the church. In order that access to the pulpit may be safeguarded, it is urged that only those possessing valid denominational credentials and licenses, or established members of the church, be invited to speak. However, there are times when congregations may be addressed by such others as government officials, civic leaders, or specially recognized guests.</p>
      
      <p class="mb-4"><strong>Disciplined ministers.</strong> — Ministers may be disciplined because of a moral fall, unfaithfulness, apostasy, embezzlement or theft, giving continuing support to an activity subversive to the denomination while persistently refusing to recognize church authority, or continued and unrepentant dissidence regarding the fundamental beliefs of the Adventist Church (see GC Policy L 60 20).</p>
      
      <p class="mb-4">Such discipline may affect ministers by the (1) withdrawal of credential or license, (2) annulment of ordination, (3) loss of church membership, and (4) loss of employment in gospel ministry, the teaching ministry, or denominational leadership. "Where practical the organization involved shall provide a professional program of counseling and career guidance for the minister and family to assist them in transition" (GC Policy L 60 30).</p>
      
      <p class="mb-4"><strong>Credential expiration.</strong> — Credentials and licenses are issued for the duration of the term for which they are granted by the employing organization and are renewed only by a vote of the appropriate body. If a credentialed or licensed individual ceases to be employed by the issuing organization, or if the credential or license is not renewed for a new term of service by the appropriate body, the employee ceases to function as an authorized employee. The possession of an out-of-date or expired credential or license does not authorize a former employee to function in any of the capacities for which they were issued.</p>

      <h4 class="font-bold text-lg mt-8 mb-3 text-slate-800 border-b border-gray-100 pb-2">TO WHOM ISSUED</h4>
      
      <p class="mb-4"><strong>Employees.</strong> — "Credentials/licenses shall be issued only to full-time denominational employees and to those under the supervision of conferences/missions/fields or denominationally owned institutions. They shall expire when denominational employment is terminated. In special cases a credential/license may be issued to a nondenominationally employed individual while serving the church under the supervision of a denominational organization" (GC Policy E 10 80). Credentials and licenses may also be granted to chaplains and to ministers attending school (GC Policy E 10 85-90). Any organization with authority to issue credentials and licenses has the power to withdraw the papers it has granted.</p>
      
      <p class="mb-4"><strong>Retirees.</strong> — "Honorary/emeritus credentials shall be issued by union conferences and union missions to retired denominational employees who are entitled to such credentials, and who reside within the territory of their unions, except for those provided for in E 10 65" (GC Policy E 10 60). In most cases, "employees receiving benefits from the Retirement Plan and retired military chaplains receiving military retirement pay, if entitled to credentials or other papers, are to receive the same from the union conference in which they reside" (GC Policy E 10 70).</p>
      
      <p class="mb-4">Retired ministers usually hold their membership in a church near their place of residence, and they should lend support to the pastor as they are needed and able. Their relationship to the church is the same as that of any other church member except that they may still be called upon to baptize, perform weddings, ordain local leaders, and perform the various functions of the ordained minister.</p>

      <h4 class="font-bold text-lg mt-8 mb-3 text-slate-800 border-b border-gray-100 pb-2">TYPES OF CREDENTIALS AND LICENSES</h4>
      
      <p class="mb-4">Credentials and licenses are given to denominational employees according to the service category in which they are employed. A license is issued to beginning employees; following a period of satisfactory service, credentials are issued.</p>
      
      <p class="mb-4"><strong>Ministerial credential.</strong> — Ministerial credentials are given only to ordained ministers.</p>
      
      <p class="mb-4"><strong>Ministerial license.</strong> — Ministerial licenses are given to nonordained pastors, evangelists, and Bible teachers who are on the path toward ordination. "The responsibility and authority of the licensed minister may in certain circumstances be extended to include the performance of specific functions of the ordained minister in the churches to which he is assigned. The authority for extending this responsibility belongs to the division committee which shall clearly outline for its territory the ministerial functions which may be delegated to licensed ministers" (GC Policy L 25 05). "The conference/mission/field executive committee shall authorize, in harmony with the division policy, which functions of the ordained minister the licensed minister may perform" (GC Policy L 25 15). Minimum requirements to be met by licensed ministers before being given extended ministerial functions include: completion of the ministerial training program, holding a current ministerial license, appointment to a ministerial or pastoral responsibility, election as a local elder in each church to which they are assigned, and ordination as a local elder.</p>
      
      <p class="mb-4"><strong>Commissioned minister credential.</strong> — Commissioned minister credentials are given to associates in pastoral care; Bible instructors; General Conference, division, union, and local conference treasurers and departmental directors, including associate and assistant directors; institutional chaplains; presidents and vice presidents of major institutions; auditors (General Conference director, associates, area and district directors); and field directors of the Christian Record Services. Some divisions may not participate in granting this credential.</p>
      
      <p class="mb-4"><strong>Commissioned minister license.</strong> — Commissioned minister licenses are given to employees in the commissioned minister credential categories who have fewer than five years experience. It is not the normal practice to ordain an individual holding this license.</p>
      
      <p class="mb-4"><strong>Missionary credentials and licenses.</strong> — Employees not involved in the work categories listed above are given a missionary credential or license based on similar criteria.</p>
      
      <p class="mb-4"><strong>Bible instructor.</strong> — Bible instructors generally carry a missionary license for up to five years, and then receive a missionary credential. Where the commissioned minister license and credential are given, Bible instructors should be included in this category.</p>

      <h4 class="font-bold text-lg mt-8 mb-3 text-slate-800 border-b border-gray-100 pb-2">MINISTERIAL INTERNSHIP</h4>
      
      <p class="mb-4">Ministerial interns are given a ministerial license rather than a ministerial credential, indicating that their ministerial training is still in progress. It "designates a period of service spent in practical ministerial training, to be entered upon after the completion of the prescribed ministerial training course, this training period to be served under supervision in a local conference/mission/field, at a limited wage, for the purpose of proving the divine call to the ministry" (GC Policy L 10 10).</p>
      
      <p class="mb-4">Conference administration should ensure that interns receive adequate, supervised, and varied experience under trained experienced ministers. The General Conference Ministerial Association has developed a Manual for Ministerial Interns and Intern Supervisors. The manual aims to train intern supervisors, and assist them in training interns.</p>
    `
  },
  {
    id: '15',
    title: 'Ordination and Commissioning',
    category: 'Ordination',
    fullText: `
      <div class="text-center mb-10">
        <h1 class="text-3xl font-bold text-slate-900 font-serif">Chapter 15</h1>
        <h2 class="text-2xl font-semibold text-slate-700 mt-2">Ordination and Commissioning</h2>
      </div>

      <p class="mb-4">The spiritual rite of ordination and commissioning constitutes recognition by the church for those who have been called and chosen to serve in capacities of leadership and service in the church. Such spiritual rites extend to service in gospel ministry as well as various church offices.</p>
      
      <p class="mb-4"><strong>Ordination for particular service.</strong> — While all Christians are called to render spiritual service, the New Testament portrays an organized church, administered and nurtured by persons who are specially called by God and set apart by the laying on of hands for a particular service. Elders and deacons, appointed by the church on the basis of spiritual experience and ability (Titus 1:5; Acts 6:3), and those serving in gospel ministry, are recognized as receiving a special calling from God. Apart from the appointment and ordination of the twelve apostles for their unique, unrepeatable role (Mark 3:13, 14), the Scriptures distinguish three categories of ordained officers:</p>
      
      <p class="mb-4">(1) the gospel minister, whose role may be seen as preaching, teaching, administering the ordinances, and pastoral care of the church (1 Tim. 4:14; 2 Tim. 4:1-5).</p>
      
      <p class="mb-4">(2) the elder, who exercises oversight of a local congregation, performing some pastoral functions as well (Acts 14:23; 20:17; Titus 1:5, 9; 1 Tim. 3:2, 5).</p>
      
      <p class="mb-4">(3) the deacon, to whose care the poor and the benevolent work of the congregation are entrusted (Phil. 1:1; Acts 6:1-6; 1 Tim. 3:8-13).</p>
      
      <p class="mb-4"><strong>Ordination and commissioning to gospel ministry.</strong> — Just as prophets, priests, and kings were anointed with oil for special roles, so the rite of ordination by the laying on of hands recognizes that God calls some for special purposes. Ordination and commissioning acknowledge God's call and set the individual apart and appoint that person to serve the church in a special capacity. The person thus set apart becomes an authorized representative of the church. By this act the church delegates its authority to its ministers to proclaim the gospel publicly, to administer its ordinances, to organize new congregations, and, within the parameters established by God's Word, to give direction to the believers.</p>
      
      <p class="mb-4">Ordination and commissioning are not sacramental in the sense of conferring some special character trait or power or the ability to formulate doctrine. The biblical background of the rite indicates that it was an acknowledged form of designation to an appointed office and recognition of one's authority in that office. By this means the church sets its seal upon the work of God performed through its ministers. In ordination the church publicly invokes God's blessing upon those He has chosen and devoted to this special work of ministry.</p>
      
      <p class="mb-4"><strong>Qualifications for ordination and commissioning.</strong> — Since ministers carry out their ministry within an earthly organization, that organization must determine whether there is indeed a genuine call to the gospel ministry. God's call and His equipping constitute the first step to the ministry. The recognition and confirmation of that call by those authorized to evaluate its validity comprise the second.</p>
      
      <p class="mb-4">Candidates for the gospel ministry should evince:</p>
      
      <p class="mb-4">Spiritual experience. They must have a deep, experiential knowledge of and devotion to the person of the Lord Jesus Christ that reveals itself in an exemplary lifestyle and reputation, in sound judgment, in representative home life, and in positive character traits.</p>
      
      <p class="mb-4">Knowledge of the Scriptures. Christian pastors are primarily called to the ministry of the Word. Therefore candidates should have a mind furnished with the truth, utterly subject to the Word of God, and prepared to penetrate and make plain its right meaning. They will have given evidence that they have mastered and are able to apply the discipline of theology in their preaching, teaching, and counseling.</p>
      
      <p class="mb-4">Competence for the tasks of ministry. Candidates must manifest that God has equipped them with the gifts necessary to the ministry—gifts of intellect and utterance that enable them to proclaim, defend, and teach the faith, and the gift of leadership that enables them to guide, motivate, and train the congregations entrusted to their care.</p>
      
      <p class="mb-4">A fruitful ministry. While Christ would naturally call and equip His servants and bless their efforts, candidates will reveal their call to the ministry both by soul-winning success and by their ability to nurture those in their care.</p>
      
      <p class="mb-4"><strong>Responsibility of ordination and commissioning.</strong> — Though ordination and commissioning convey no special powers upon the recipient, this action does impose solemn responsibilities and for that reason should not be accepted lightly. Gospel ministers are not their own, but God's. They dedicate their time, talents, and lives to Him without reservation, for they are His mouthpiece and representatives of His church, with the care and salvation of souls as a weighty commission entrusted to them.</p>

      <h4 class="font-bold text-lg mt-8 mb-3 text-slate-800 border-b border-gray-100 pb-2">AUTHORIZING ORDINATION</h4>
      
      <p class="mb-4">The General Conference Working Policy, section L 35-50, clearly and extensively delineates both the standards and procedures to be taken in the process of ordination to gospel ministry. Some divisions authorize ordination for men in ministry and commissioning for women in ministry. While the policy L 35-50 is directed primarily toward the ordination of men, it reasonably applies to the commissioning of women as well. The entire section is not here reproduced, yet a few of its principles are listed.</p>
      
      <p class="mb-4"><strong>Preparation.</strong> — Recognizing that the divisions establish policy governing the suggested ordination track, it is recommended that each division require four to six years of field work beyond the approved educational standard for pastoral preparation. The preferred timetable for ordination is within a 10-year track from college through field work, including four years of undergraduate studies, two years of graduate education, and four years of field work. An alternative to this outline is four years of formal education followed by six years of field work.</p>
      
      <p class="mb-4">If at the conclusion of this timetable it is determined that a candidate is not properly prepared for ordination, the candidate's call to ministry should be reviewed. If there is widespread failure on the part of the conference to prepare candidates in a timely manner for ordination, the union conference should evaluate the situation.</p>
      
      <p class="mb-4"><strong>Authorization procedure.</strong> — Ordination and commissioning to gospel ministry is the setting apart of the employee to a sacred calling. It is neither a reward for faithful service nor an opportunity to add title and prestige to an employee. It must be done with wide counsel, following the procedures outlined in the General Conference Working Policy L 45 05. Pastors not yet ordained should be evaluated annually by a committee made up of conference administrators, the ministerial secretary, and several other individuals appointed by the executive committee regarding their progress toward ordination. Helpful tools in this process are available in the Manual of Evaluation Instruments prepared by the General Conference Ministerial Association.</p>
      
      <p class="mb-4"><strong>Examination process.</strong> — "The examination of candidates for ordination is conducted by ordained ministers. Ordained representatives of conferences/missions/fields/institutions/unions/divisions/General Conference who are present may be invited to assist in the examination. Where it is deemed advisable by the conference/mission/field executive committee, one or more laypersons may be selected to participate in the examination process" (GC Policy L 45 10).</p>
      
      <p class="mb-4">*In some instances, ordination may occur at other levels of church structure, such as unions, divisions, the General Conference, or in educational institutions. In such cases, similar procedures should be followed involving the personnel of these institutions as directed by General Conference Policy L 45 05.</p>
    `
  },
  {
    id: '16',
    title: 'Ordination and Commissioning Services',
    category: 'Ordination',
    fullText: `
      <div class="text-center mb-10">
        <h1 class="text-3xl font-bold text-slate-900 font-serif">Chapter 16</h1>
        <h2 class="text-2xl font-semibold text-slate-700 mt-2">Ordination and Commissioning Services</h2>
      </div>

      <p class="mb-4">Ordination and commissioning comprise the formal dedication by the church of individuals placed in positions of leadership and service. In the Adventist Church these include ministers of the gospel, elders, and deacons. For ministers, the service is instituted by the employing organization, and for elders and deacons, by the church in which they are elected to serve. Though similar in some respects, the service for ministers is usually a longer, separate service, while for elders and deacons it is usually included as part of a Sabbath worship service.</p>

      <h4 class="font-bold text-lg mt-8 mb-3 text-slate-800 border-b border-gray-100 pb-2">MINISTERS</h4>
      
      <p class="mb-4">Ordination and commissioning services generally occur either at a conference function, such as camp meeting, or in the church that the minister currently serves. While the camp meeting setting provides a wider audience representation from the sisterhood of churches, it does tend to limit the opportunity of participation by the congregation that the minister serves.</p>
      
      <p class="mb-4"><strong>Order of service.</strong> — Following is a typical order of service:</p>
      
      <ul class="list-disc pl-5 mb-4 space-y-2">
        <li>opening hymn</li>
        <li>prayer</li>
        <li>presentation of candidate(s)</li>
        <li>special music</li>
        <li>homily</li>
        <li>candidate's response</li>
        <li>ordination prayer</li>
        <li>charge</li>
        <li>welcome</li>
        <li>benediction</li>
        <li>receiving line</li>
      </ul>
      
      <p class="mb-4"><strong>Ordination prayer.</strong> With the congregation usually seated with bowed heads for the ordination prayer, the ministers and the candidate kneel, the latter in the center of the group. Those who have a part in the service, and as many others as may conveniently do so, kneel close to the candidate so as to join in the laying on of hands.</p>
      
      <p class="mb-4">The ordination prayer recognizes God's call of the minister to this sacred work and the need of divine strength to fulfill that call. This prayer asks that, as the hands of the ministers are laid upon the candidate in recognition by the church of the divine call, the Lord may bestow the blessing of the Holy Spirit's power. With the laying on of hands mentioned in the prayer, each ordained minister places a hand on the candidate, or on those laying hands on the candidate, so that all are joined in the laying on of hands.</p>
      
      <p class="mb-4"><strong>Charge.</strong> Rising from prayer, the ministers stand while the charge is given:</p>
      
      <p class="mb-4">God has called you to the work of the ministry, and the church, in recognizing that call, has set you aside by the laying on of hands. You are now invested with full ecclesiastical authority. No higher honor can come to any person. But such honor also involves great responsibility.</p>
      
      <p class="mb-4">I charge you to minister as a servant, making the Master your lifelong study. By spending time with Jesus, you will become like Him, for it is by beholding that we become changed. "A disciple is not above his teacher, nor a servant above his master. It is enough for a disciple that he be like his teacher, and a servant like his master" (Matt. 10:24, 25).</p>
      
      <p class="mb-4">"Let this mind be in you which was also in Christ Jesus, who, being in the form of God, did not consider it robbery to be equal with God, but made Himself of no reputation, taking the form of a servant" (Phil. 2:5-7).</p>
      
      <p class="mb-4">"You therefore must endure hardship as a good soldier of Jesus Christ. No one engaged in warfare entangles himself with the affairs of this life, that he may please him who enlisted him as a soldier" (2 Tim. 2:3, 4).</p>
      
      <p class="mb-4">"Be an example to the believers in word, in conduct, in love, in spirit, in faith, in purity" (1 Tim. 4:12).</p>
      
      <p class="mb-4">I charge you to minister as a shepherd. Jesus said, "I am the good shepherd. The good shepherd gives His life for the sheep. . . . The hireling flees because he is a hireling and does not care about the sheep" (John 10:11-13).</p>
      
      <p class="mb-4">I charge you to minister as a watchman. "I charge you therefore before God and the Lord Jesus Christ, who will judge the living and the dead at His appearing and His kingdom: Preach the word! Be ready in season and out of season. Convince, rebuke, exhort, with all longsuffering and teaching. . . . But you be watchful in all things, endure afflictions, do the work of an evangelist, fulfill your ministry" (2 Tim. 4:1-5).</p>
      
      <p class="mb-4">I charge you to minister as a teacher. "If you instruct the brethren in these things, you will be a good minister of Jesus Christ, nourished in the words of faith and of the good doctrine which you have carefully followed. . . . Take heed to yourself and to the doctrine. Continue in them, for in doing this you will save both yourself and those who hear you" (1 Tim. 4:6-16).</p>
      
      <p class="mb-4">"Take heed therefore unto yourselves, and to all the flock, over the which the Holy Ghost hath made you overseers, to feed the church of God, which he hath purchased with his own blood" (Acts 20:28, KJV).</p>
      
      <p class="mb-4">And when your work is ended, may you say with Paul,</p>
      
      <p class="mb-4">"I have fought the good fight, I have finished the race, I have kept the faith. Finally, there is laid up for me the crown of righteousness, which the Lord, the righteous Judge, will give to me on that Day, and not to me only but also to all who have loved His appearing" (2 Tim. 4:7, 8).</p>
      
      <p class="mb-4"><strong>Welcome.</strong> The platform participants remain standing during the welcome. The welcome may be given by one person, or by representatives of the various groups mentioned.</p>
      
      <p class="mb-4">It is my privilege to extend to you a welcome into the ranks of the gospel ministry. I welcome you on behalf of your conference and the world church. Be loyal to its leadership. Make use of its services to assist in your work.</p>
      
      <p class="mb-4">I welcome you on behalf of your fellow ministers, who share with you the joys, the rewards, and the burdens of ministry. Having experienced these before, they are a source of wise counsel and experience that will assist you in your ministry.</p>
      
      <p class="mb-4">I welcome you on behalf of the congregation you serve, who hold you up before God in their prayers, and who serve as coworkers in His service. And when at last you stand victorious with those for whom you have labored and prayed, you will hear the voice of your Redeemer say, "Well done, good and faithful servant; you were faithful over a few things, I will make you ruler over many things. Enter into the joy of your Lord" (Matt. 25:21).</p>
      
      <p class="mb-4"><strong>Receiving line.</strong></p>
      
      <ul class="list-disc pl-5 mb-4 space-y-2">
        <li>conference, union, division, or general officers giving ordination certificates</li>
        <li>ministers</li>
        <li>elders from churches presently served</li>
        <li>family and special guests</li>
        <li>audience</li>
      </ul>
      
      <p class="mb-4"><strong>Commissioning.</strong> — In divisions in which women receive commissioning to ministry, this same order of service may be used for the commissioning service, or the ordination and commissioning service may occur in the same service.</p>

      <h4 class="font-bold text-lg mt-8 mb-3 text-slate-800 border-b border-gray-100 pb-2">ELDERS AND DEACONS</h4>
      
      <p class="mb-4">Soon after the church elects new elders and deacons a service of ordination should be scheduled to dedicate them to this task. Such ordinations are to be performed by an ordained minister. Elders and deacons should be persons of experience, chosen wisely. By action of the Annual Council of 1975, reaffirmed at the 1984 Annual Council, both men and women are eligible to serve as elders and receive ordination to this position of service in the church.</p>
      
      <p class="mb-4"><strong>Elders.</strong> — A proper form of elder ordination embraces the following features:</p>
      
      <p class="mb-4">With an ordained minister in charge, other ordained ministers and elders in the congregation are invited to participate in this service. At the time selected, usually during the Sabbath morning worship service, candidates and participants are invited to join the minister before the congregation. Fitting scriptural passages, such as 1 Timothy 3:1-7, are read, with brief comments included regarding the work of an elder in the church.</p>
      
      <p class="mb-4">The candidate and participants kneel together. The minister prays that God will bless the recognition the church gives that the Holy Spirit has called the candidate to this office. The hand of ordination is laid on the candidate's head during the prayer. Assisting ministers and elders may join in this laying on of hands.</p>
      
      <p class="mb-4">After prayer the minister and those assisting clasp the candidate's hand and share a word of blessing. A certificate of ordination may be given. The one newly ordained then may return to the congregation or be seated on the platform to take part in the remainder of the service.</p>
      
      <p class="mb-4">Having once been ordained as a church elder, the church officer does not necessarily need to be ordained again upon reelection or upon election as elder of some other church. One who has been ordained as elder may later function as a deacon without further ordination.</p>
      
      <p class="mb-4"><strong>Deacons and deaconesses.</strong> — The ordination service for a deacon is much the same as that for an elder. The suggested scriptural passage is 1 Timothy 3:8-13. According to the Church Manual, "the church may arrange for a suitable service of induction for the deaconess by an ordained minister holding current credentials." The suggested scriptural passage is Romans 16:1.</p>
    `
  },
  {
    id: '17',
    title: 'Church Planting, Organizing, Uniting, and Dissolving',
    category: 'Church Planting',
    fullText: `
      <div class="text-center mb-10">
        <h1 class="text-3xl font-bold text-slate-900 font-serif">Chapter 17</h1>
        <h2 class="text-2xl font-semibold text-slate-700 mt-2">Church Planting, Organizing, Uniting, and Dissolving</h2>
      </div>

      <p class="mb-4">With the passage of time, shifts in population, demographics, church membership, and finances may impact the need for established churches to also serve another geographic area. As a result of these variables, it may be wise to plant a new congregation and ultimately organize a new church. Or uniting two or more churches into one congregation may be the wise course of action, or perhaps at times it may be necessary to dissolve a previously existing church. The Church Manual addresses these policies and procedures at length. For the purpose of this handbook, primarily the programmatic aspects of these activities will be addressed.</p>

      <h4 class="font-bold text-lg mt-8 mb-3 text-slate-800 border-b border-gray-100 pb-2">PLANTING A NEW CHURCH</h4>
      
      <p class="mb-4">One of the most productive methods of church growth is the planting of new congregations. Established churches that purposely seek to foster new congregations as a means of evangelistic outreach are themselves strengthened in the process. When a church reaches the size at which its officers can best perform their task of shepherding, nurturing, and training members, the church could well foster a new congregation. Under ordinary circumstances, churches that have grown to 300 to 500 members generally are large enough to consider planting a new congregation.</p>
      
      <p class="mb-4">Planting a new church will have the double effect of involving more members in the work of the church and establishing a congregation in a new area needing to be served. New churches win new members. Generally, unchurched people are difficult to attract to a church more than a half hour away from their residence. Church growth studies also indicate that new churches tend to revive inactive members more readily than do old churches. Ideally, the planting of new churches should be based on outreach ministry and not on self-interest or splits in an existing church.</p>

      <h4 class="font-bold text-lg mt-8 mb-3 text-slate-800 border-b border-gray-100 pb-2">HOW TO START A NEW CHURCH</h4>
      
      <p class="mb-4">In close consultation with the local conference, determine the location of the greatest need for a new church through the study of demographics and population growth. Locate the new church in a place that will serve a significant unserved population, and design its culture and services to meet the needs of that population group.</p>
      
      <p class="mb-4">Develop interest in the proposed area through home Bible study and small group ministries that could develop into home churches. Start a branch Sabbath school. Hold evangelistic meetings in the area and form a company made up of volunteers from the established church who offer to attend and support the new organization for a specified time, perhaps two or three years. The Church Manual provides specific procedures for organizing a company.</p>

      <h4 class="font-bold text-lg mt-8 mb-3 text-slate-800 border-b border-gray-100 pb-2">PREPARATION FOR ORGANIZING A NEW CHURCH</h4>
      
      <p class="mb-4">When it becomes evident that the new church can thrive, request formal organization approval from conference administration. The organization of the church is to be presided over by an ordained minister. Although the authorization to form new churches is granted to all ordained ministers, the conference president should, "whenever possible, be invited to be present" (Church Manual).</p>
      
      <p class="mb-4">Provision should be made for a charter member signing list. Transfers of membership for those wishing to join the new church from previous congregations must be processed through regular channels. Arrange for necessary record books and materials to be available for the new treasurer, clerk, and other officers to be chosen.</p>
      
      <p class="mb-4">Provide Communion equipment for this church function. Although conducting a Communion service at the time of the organization ceremony may make the program too long, a Communion service should be held soon thereafter, perhaps at the first regular worship service.</p>

      <h4 class="font-bold text-lg mt-8 mb-3 text-slate-800 border-b border-gray-100 pb-2">ORGANIZING SERVICE FOR A NEW CHURCH</h4>
      
      <p class="mb-4">The following suggested order of service makes provision for the process outlined in the Church Manual, for the organization of churches:</p>
      
      <ul class="list-disc pl-5 mb-4 space-y-2">
        <li>opening song</li>
        <li>prayer</li>
        <li>brief review of fundamental doctrines</li>
        <li>forming of nucleus</li>
        <li>accepting of membership by vote of nucleus</li>
        <li>forming of nominating committee</li>
        <li>congregational singing and testimony (while the nominating committee meets)</li>
        <li>voting of new officers</li>
        <li>ordination of new elders and deacons</li>
        <li>challenge to the new church and its members</li>
        <li>church's response</li>
        <li>prayer of dedication</li>
      </ul>
      
      <p class="mb-4">If desirable, several meetings might be held to organize a new church. These could include a Friday evening Communion at the new church, with the established church invited; a Sabbath morning commissioning service, as the established church acknowledges departing members; a Sabbath afternoon organization ceremony, as the new church is established; a Sabbath evening fellowship meal and social event.</p>

      <h4 class="font-bold text-lg mt-8 mb-3 text-slate-800 border-b border-gray-100 pb-2">UNITING CHURCHES</h4>
      
      <p class="mb-4">The uniting of churches involves more than merely the transfer of members from one church to another and the closing of the former facility. Rather, in the uniting of churches, the previous churches cease to exist, and a new church is formed. The process for this action is provided in the Church Manual.</p>
      
      <p class="mb-4">Prior to the meeting for the uniting of churches, careful counsel with conference leadership and the uniting churches must take place. The churches involved should individually engage in extensive exploration of the uniting option and be in agreement that this constitutes the wise and desirable course of action to take. Only at a duly called church business meeting can such a choice be made by the church. Upon mutually reaching the decision to unite, the churches then request authorization from the conference executive committee to proceed with uniting.</p>
      
      <p class="mb-4">After receiving the recommendation from the conference committee, the churches prepare a unification agreement document that includes the reason for uniting, plans for the disposal of property, financial arrangements, a new church name, and items relevant to the union. In a joint meeting presided over by an ordained minister, the churches vote the acceptance of the unification document, and the unification is consummated. A request is then submitted to the next conference session for acceptance of the new church into the sisterhood of churches in the conference.</p>
      
      <p class="mb-4">With the forming of the new church, all previous church officer positions are vacated, with a nominating committee chosen for the selection of new church officers to fill leadership positions for the remainder of the church year. Records, books, and bank accounts from both of the churches become a part of the new church.</p>

      <h4 class="font-bold text-lg mt-8 mb-3 text-slate-800 border-b border-gray-100 pb-2">DISSOLVING CHURCHES</h4>
      
      <p class="mb-4">The action of dissolving churches rarely occurs in Adventist congregations. Reasons for dissolving include loss of members, church discipline, and apostasy or rebellion. When such an action becomes necessary, it is important to know that every effort has been made to avoid the process. Careful counsel with conference leadership must be taken into account.</p>
      
      <p class="mb-4">No precise criteria for deciding when a church becomes too small to continue effectively exist. The Church Manual suggests that this occurs when "so many of the members may move away that the number remaining is not sufficient to support the organization." Yet if the members are content and deeply loyal to their church, dissolving becomes very difficult and perhaps unwise. Members whose leadership potential is not being tapped in another congregation might be willing to transfer their membership and provide leadership. When dissolving is the chosen course of action, members seek transfer to other churches or, if unavailable, to the conference church. With all membership having been thus transferred, the church is effectively dissolved.</p>
      
      <p class="mb-4">Churches moving toward apostasy usually have some theological or procedural disagreement with the church. Among them may be individuals whose dissidence is extreme and whose influence has confused others. Every effort must be made to bring them into harmony and fellowship with the church. If these efforts prove unsuccessful, the conference committee, after careful consideration, will recommend to the conference session that the church be expelled from the sisterhood of churches. The matter of individual membership will be handled according to church policy.</p>
    `
  },
  {
    id: '18',
    title: 'Church Leadership',
    category: 'Leadership',
    fullText: `
      <div class="text-center mb-10">
        <h1 class="text-3xl font-bold text-slate-900 font-serif">Chapter 18</h1>
        <h2 class="text-2xl font-semibold text-slate-700 mt-2">Church Leadership</h2>
      </div>

      <p class="mb-4">To establish the kingdom of God in the earth and press back the forces of evil, all the while looking to the realization of the full coming of the kingdom in its ultimate triumph at the second coming of Christ, describes the purpose of the church. With this as its reason for existence, the church does not become static but dynamic in its growth and movement. The church has a vision for the future and direction in its work. As with any group working together, a need for leadership exists in order to reach its objectives cohesively. In the church the pastor is appointed and expected to be that leader.</p>
      
      <p class="mb-4">On assignment to a church, the pastor assumes principal leadership of the congregation. Such assignment authorizes ministers to function in all areas of pastoral responsibility both personally and by delegating and overseeing the responsibility to other church leaders. "All branches of the work belong to the ministers" (Testimonies, vol. 5, p. 375). This does not mean that they must personally attend to the entire work of the church, but that all work does come under their supervision. They are responsible for overseeing and fostering every department and program while working in cooperation with the local elders and other duly elected officers of the body.</p>
      
      <p class="mb-4"><strong>Servant leadership.</strong> — Christian leadership is servant leadership. Healthy, growing churches usually have strong and effective pastoral leadership. But strong does not mean dominating or manipulative leadership. "You know that the rulers of the Gentiles lord it over them, and those who are great exercise authority over them. Yet it shall not be so among you; but whoever desires to become great among you, let him be your servant" (Matt. 20:25, 26).</p>
      
      <p class="mb-4">Personality and leadership style are intimately related to the natural way ministers lead, yet leaders should adapt to different settings and the needs of those to whom they direct their ministry. Servant leadership demands adaptation and flexibility. The apostle Paul gives the example of this adaptation, saying, "Though I am free from all men, I have made myself a servant to all, that I might win the more; and to the Jews I became as a Jew, that I might win Jews; . . . to the weak I became as weak, that I might win the weak. I have become all things to all men, that I might by all means save some" (1 Cor. 9:19-22).</p>
      
      <p class="mb-4"><strong>Visioning.</strong> — Without a vision of its mission and future, a church tends to stagnate, ritualistically repeating its past behaviors. But the vision of the future does not ignore the past. The church must visualize both what is and what ought to be. Pastoral leadership calls for casting a vision that not only addresses what the church ought to be, but also moves the members to ownership of the objective. By powerfully preaching the Word, and the winsome motivation of the membership, this can be accomplished.</p>
      
      <p class="mb-4"><strong>Organization.</strong> — A church gets from where it is to where it wants to be by consciously organizing its resources and personnel to accomplish specific plans and objectives. There is little value in making plans unless the church has the personnel with the skills and interest to carry them out. This entails recruitment, training, and commitment to the task.</p>
      
      <p class="mb-4"><strong>Delegation.</strong> — Much of the work of the church can and should be accomplished by church members. Servant leadership does not become compromised with the sharing of authority. Often leadership in the church fails to be delegated because the pastor finds it easier to do the work than to recruit, motivate, and train leadership. This might be a valid notion if the primary business of the church was getting work done. But the primary objective of church business is the spiritual growth and well-being of church members, and members involved in the work of the church are most likely to remain spiritually strong in the church.</p>
      
      <p class="mb-4"><strong>Supervision.</strong> — Once work has been delegated it needs supervision—not in a meddling, micromanaging manner, but in supportive encouragement and evaluation of performance. Reward and recognize good work. Assist and support when needed, and be willing to allow others to receive the credit when the job is well done.</p>

      <h4 class="font-bold text-lg mt-8 mb-3 text-slate-800 border-b border-gray-100 pb-2">SETTING OBJECTIVES</h4>
      
      <p class="mb-4">Objectives clarify what the church needs to do and how the members plan to accomplish them. At least once a year, and preferably once a quarter, the church should review the goals it has set for itself and how they are being achieved. The most important time for a review of previously chosen objectives and for the forming of new ones is the time church officers are being elected for a new church term. Leaders chosen and committees formed should depend not just on what was done in the past but also on what was planned for the future. Objectives grow best out of dialogue within the congregation. Pastors and church board members should seek congregational participation regarding the needs and aspirations of the membership, thus providing buy-in from the congregation.</p>
      
      <p class="mb-4"><strong>Attainable objectives.</strong> — Set objectives that are attainable. Projecting financial plans that are unrealistic not only risks withering debt but also creates disillusionment among members. Likewise, promoting unrealistic expectations in membership growth or church program accomplishments will produce discouragement and destroy participation.</p>
      
      <p class="mb-4"><strong>Measurable objectives.</strong> — Not all aspects of church life and spirituality are easily measurable. Because of the difficulty in assessing success or failure without measurability, seek some form of indication regarding the accomplishment of objectives.</p>

      <h4 class="font-bold text-lg mt-8 mb-3 text-slate-800 border-b border-gray-100 pb-2">COMMITTEES</h4>
      
      <p class="mb-4">The apostle Paul invokes the metaphor of the human body in portraying the function of the church. The harmonious cooperation of the various parts of the body, or the church, equals success. Like the body, the church is not all of one part or of one opinion, but through the committee system these various functions and opinions can contribute to a harmonious and productive whole. "In counseling for the advancement of the work, no one man is to be a controlling power, a voice for the whole. Proposed methods and plans are to be carefully considered so that all the brethren may weigh their relative merits and decide which should be followed" (Testimonies, vol. 7, p. 259).</p>
      
      <p class="mb-4">Like the body, the church operates on the basis of group participation. "Where there is no counsel, the people fall; but in the multitude of counselors there is safety" (Prov. 11:14). All of us together are wiser than any one of us alone.</p>
      
      <p class="mb-4"><strong>Committee structure.</strong> — The church business meeting is the highest authority in the local church. A church business meeting "may be held monthly or quarterly according to the needs of the church" (Church Manual). In addition, votes on membership issues are frequently processed during the Sabbath worship service.</p>
      
      <p class="mb-4">The church board stands as the next-highest authority of the local church committee system. The pastor generally chairs the church board, but may pass this position to another church member. Beyond these two positions, the pastor should avoid chairing a large number of additional committees, but the pastor or a designated elder should serve as an ex-officio member of every committee.</p>
      
      <p class="mb-4">A quorum for the enacting of business should be established for the work of the various committees and boards of the church.</p>
      
      <p class="mb-4"><strong>Levels of decision-making.</strong> — Decisions should be made by the most appropriate committee. Each committee should have clearly defined terms of reference and authority and should operate within these definitions. Because of the waste of time and talent to duplicate responsibility for decision-making between various committees, each committee should know its areas of concern and its authority to act or to recommend for approval by another body.</p>
      
      <p class="mb-4"><strong>Chairing committees.</strong> — Committees function best when the members are informed as to the purpose of the committee and the agenda to be addressed. Listed below are suggestions for the preparation and operation of committees:</p>
      
      <p class="mb-4">Agenda preparation. An agenda lists items for the committee to consider and upon which to act. Each committee member should receive a copy of the agenda. If practical, this should be done before the meeting date so that members can come prepared with input and information. Depending on the agreed-upon rules for the committee, additional items may be added by the members. If the agenda is established in advance, it may be modified only by a committee vote.</p>
      
      <p class="mb-4">Punctuality. Committees should have a dependable time schedule. Both starting and ending at a preset time builds attendance by committee members. Committees that exhaust both the physical and emotional limits of members do not often come to good conclusions. "In the hope of reaching a decision, they continue their meetings far into the night. . . . If the brain were given proper periods of rest, the thoughts would be clear and sharp, and the business would be expedited" (Testimonies, vol. 7, p. 256).</p>
      
      <p class="mb-4">Cooperation. Members should be led into a spirit of teamwork and cooperation. The chair has much to do with creating this kind of spirit. Dialogue should flow freely and directly from person to person. Understand and at least informally observe the rules of parliamentary procedure, establishing a sense of fairness and democratic process.</p>
      
      <p class="mb-4">Participation. Ensure a broad spectrum of participation, and encourage everyone to join in the discussion. Avoid domination of the process by any one individual or group. Specifically seek the inclusion of the more timid, inviting them to share their thinking.</p>
      
      <p class="mb-4">Respect of ideas. As chair, remain as unbiased and neutral as possible. On occasion it may be wise to pass the chair to someone else in order to enter the discussion more directly. Advocate and practice committee confidentiality. Frank discussion of delicate issues should not be carried outside the committee.</p>
      
      <p class="mb-4">Focusing on the issue. At times the attention of the committee will wander from the issue being considered, and a discussion of unrelated items will break in. The chair must bring the committee back to the issue at hand.</p>
      
      <p class="mb-4">Summary. Rephrase and summarize the discussion and work toward consensus. Generally there will be agreement on an issue when all sides have been examined. The call for a vote is not for the purpose of stifling discussion, but for reaching consensus on a decision.</p>
      
      <p class="mb-4">Recording and providing of minutes. Minutes of a meeting should be read and approved by the committee at the next meeting. Records should be maintained as a reminder of what action and assignments are needed for implementation following the meeting and as a source of evaluation of the effectiveness of the committee and its decisions.</p>
      
      <p class="mb-4">Supporting the decision. When an action is taken, the duty of all members of the committee includes supporting the action, regardless of whether they voted for or against it.</p>
    `
  },
  { id: '19', title: 'Ministry for All Members', category: 'Leadership', fullText: getPlaceholder('Ministry for All Members') },
  { id: '20', title: 'Large Districts', category: 'Leadership', fullText: getPlaceholder('Large Districts') },
  { id: '21', title: 'Church Growth', category: 'Evangelism', fullText: getPlaceholder('Church Growth') },
  { id: '22', title: 'The Worship Service', category: 'Worship', fullText: getPlaceholder('The Worship Service') },
  { id: '23', title: 'Fellowship and Visitation', category: 'Pastoral Care', fullText: getPlaceholder('Fellowship and Visitation') },
  { id: '24', title: 'Counseling', category: 'Pastoral Care', fullText: getPlaceholder('Counseling') },
  { id: '25', title: 'Church Community', category: 'Community', fullText: getPlaceholder('Church Community') },
  { id: '26', title: 'Church Finance', category: 'Administration', fullText: getPlaceholder('Church Finance') },
  { id: '27', title: 'Church Facilities', category: 'Administration', fullText: getPlaceholder('Church Facilities') },
  { id: '28', title: 'Church Discipline', category: 'Discipline', fullText: getPlaceholder('Church Discipline') },
  { id: '29', title: 'Church Schools', category: 'Education', fullText: getPlaceholder('Church Schools') },
  { id: '30', title: 'Baptism', category: 'Services', fullText: getPlaceholder('Baptism') },
  { id: '31', title: 'Communion', category: 'Services', fullText: getPlaceholder('Communion') },
  { id: '32', title: 'Weddings', category: 'Services', fullText: getPlaceholder('Weddings') },
  { id: '33', title: 'Child Dedication', category: 'Services', fullText: getPlaceholder('Child Dedication') },
  { id: '34', title: 'Anointing and Deliverance', category: 'Services', fullText: getPlaceholder('Anointing and Deliverance') },
  { id: '35', title: 'Funerals', category: 'Services', fullText: getPlaceholder('Funerals') },
  { id: '36', title: 'Church Opening, Dedication, and Groundbreaking', category: 'Services', fullText: getPlaceholder('Church Opening, Dedication, and Groundbreaking') },
  { id: '37', title: 'House Blessing', category: 'Services', fullText: getPlaceholder('House Blessing') },
  { id: '38', title: 'Pastoral Installation', category: 'Services', fullText: getPlaceholder('Pastoral Installation') },
  { id: '39', title: 'Retirement', category: 'Ministry', fullText: getPlaceholder('Retirement') },
  { id: 'Index', title: 'Index', category: 'Index', fullText: getPlaceholder('Index') },
];
