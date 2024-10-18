export default function Contents() {
  return (
    <div className="flex flex-col flex-grow items-center p-6 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">TODO App</h2>
      <p className="text-gray-700 text-lg mb-8">
        TODO
        Appは、日々のタスクを簡単に管理するためのアプリです。自分のやるべきことをリストにして、効率よく進めましょう！
      </p>
      <section className="flex flex-col w-full ml-4">
        <h3 className="text-2xl font-semibold text-gray-800 mb-2">主な機能</h3>
        <ul className="list-disc list-inside text-gray-700">
          <li>タスクの追加・削除</li>
          <li>タスクの完了状態の管理</li>
          <li>期限の設定（Coming Soon!）</li>
        </ul>
      </section>
    </div>
  );
}
